'use client'

import { useState, useEffect } from 'react'
import { collection, doc, getDocs, setDoc, deleteDoc, query, orderBy } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Plus, Trash2, CalendarIcon, FileText, X } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'

interface Test {
  id?: string
  title: string
  description: string
  studentId: string
  studentName?: string
  dueDate: Date | null
  assignedDate: Date | null
}

interface Student {
  id: string
  name: string
  email: string
}

export default function TestManagement() {
  const [tests, setTests] = useState<Test[]>([])
  const [students, setStudents] = useState<Student[]>([])
  const [selectedTest, setSelectedTest] = useState<Test | null>(null)
  const [showForm, setShowForm] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    if (!db) return
    
    try {
      // Load students
      const studentsRef = collection(db, 'students')
      const studentsSnapshot = await getDocs(query(studentsRef, orderBy('name')))
      const studentsList: Student[] = []
      studentsSnapshot.forEach((doc) => {
        const data = doc.data()
        studentsList.push({
          id: doc.id,
          name: data.name || '',
          email: data.email || '',
        })
      })
      setStudents(studentsList)

      // Load tests
      const testsRef = collection(db, 'tests')
      const q = query(testsRef, orderBy('assignedDate', 'desc'))
      const querySnapshot = await getDocs(q)
      
      const testsList: Test[] = []
      querySnapshot.forEach((doc) => {
        const data = doc.data()
        const student = studentsList.find(s => s.id === data.studentId)
        
        testsList.push({
          id: doc.id,
          title: data.title || '',
          description: data.description || '',
          studentId: data.studentId || '',
          studentName: student?.name,
          dueDate: data.dueDate ? data.dueDate.toDate() : null,
          assignedDate: data.assignedDate ? data.assignedDate.toDate() : null,
        })
      })

      setTests(testsList)
    } catch (error) {
      console.error('Error loading data:', error)
      toast({
        title: 'Error',
        description: 'Failed to load data.',
        variant: 'destructive',
      })
    }
  }

  const handleNewTest = () => {
    setSelectedTest({
      title: '',
      description: '',
      studentId: '',
      dueDate: null,
      assignedDate: new Date(),
    })
    setShowForm(true)
  }

  const handleSave = async () => {
    if (!db || !selectedTest || !selectedTest.studentId) {
      toast({
        title: 'Error',
        description: 'Please select a student.',
        variant: 'destructive',
      })
      return
    }

    try {
      const testData = {
        title: selectedTest.title,
        description: selectedTest.description,
        studentId: selectedTest.studentId,
        dueDate: selectedTest.dueDate || null,
        assignedDate: selectedTest.assignedDate || new Date(),
        completed: false,
      }

      const testsRef = collection(db, 'tests')
      const newDocRef = doc(testsRef)
      await setDoc(newDocRef, testData as any)

      toast({
        title: 'Success',
        description: 'Test created successfully!',
      })

      await loadData()
      setShowForm(false)
      setSelectedTest(null)
    } catch (error) {
      console.error('Error saving test:', error)
      toast({
        title: 'Error',
        description: 'Failed to save test.',
        variant: 'destructive',
      })
    }
  }

  const handleDelete = async (testId: string) => {
    if (!db || !confirm('Are you sure you want to delete this test?')) {
      return
    }

    try {
      await deleteDoc(doc(db, 'tests', testId))
      toast({
        title: 'Success',
        description: 'Test deleted successfully!',
      })
      await loadData()
    } catch (error) {
      console.error('Error deleting test:', error)
      toast({
        title: 'Error',
        description: 'Failed to delete test.',
        variant: 'destructive',
      })
    }
  }

  // Group tests by student
  const testsByStudent = new Map<string, Test[]>()
  tests.forEach(test => {
    if (!testsByStudent.has(test.studentId)) {
      testsByStudent.set(test.studentId, [])
    }
    testsByStudent.get(test.studentId)!.push(test)
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Tests</h2>
          <p className="text-gray-600 text-sm">Create and manage tests for students</p>
        </div>
        <Button onClick={handleNewTest} className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          New Test
        </Button>
      </div>

      {/* Create/Edit Form */}
      {showForm && selectedTest && (
        <Card className="mb-6 border-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Create New Test</CardTitle>
              <Button variant="ghost" size="icon" onClick={() => {
                setShowForm(false)
                setSelectedTest(null)
              }}>
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label>Student</Label>
                <Select
                  value={selectedTest.studentId}
                  onValueChange={(value) => setSelectedTest({ ...selectedTest, studentId: value })}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select a student" />
                  </SelectTrigger>
                  <SelectContent>
                    {students.map((student) => (
                      <SelectItem key={student.id} value={student.id}>
                        {student.name} ({student.email})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Title</Label>
                <Input
                  value={selectedTest.title}
                  onChange={(e) => setSelectedTest({ ...selectedTest, title: e.target.value })}
                  className="mt-1"
                  placeholder="Test title"
                />
              </div>

              <div>
                <Label>Description</Label>
                <textarea
                  value={selectedTest.description}
                  onChange={(e) => setSelectedTest({ ...selectedTest, description: e.target.value })}
                  className="mt-1 flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  placeholder="Test description and instructions..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Assigned Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full mt-1 justify-start text-left font-normal",
                          !selectedTest.assignedDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedTest.assignedDate ? (
                          format(selectedTest.assignedDate, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={selectedTest.assignedDate || undefined}
                        onSelect={(date) => setSelectedTest({ ...selectedTest, assignedDate: date || new Date() })}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <Label>Due Date (Optional)</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full mt-1 justify-start text-left font-normal",
                          !selectedTest.dueDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedTest.dueDate ? (
                          format(selectedTest.dueDate, "PPP")
                        ) : (
                          <span>Pick a date (optional)</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={selectedTest.dueDate || undefined}
                        onSelect={(date) => setSelectedTest({ ...selectedTest, dueDate: date || null })}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="flex gap-4">
                <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
                  Create Test
                </Button>
                <Button variant="outline" onClick={() => {
                  setShowForm(false)
                  setSelectedTest(null)
                }}>
                  Cancel
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Tests List */}
      {tests.length === 0 ? (
        <Card className="p-12 text-center">
          <FileText className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <h3 className="text-xl font-semibold mb-2">No tests yet</h3>
          <p className="text-gray-600 mb-6">Create your first test to get started</p>
          <Button onClick={handleNewTest} className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Create First Test
          </Button>
        </Card>
      ) : (
        <div className="space-y-6">
          {Array.from(testsByStudent.entries()).map(([studentId, studentTests]) => {
            const student = students.find(s => s.id === studentId)
            return (
              <Card key={studentId}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-red-600" />
                    {student?.name || 'Unknown Student'}
                  </CardTitle>
                  <CardDescription>{student?.email}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {studentTests.map((test) => (
                      <div key={test.id} className="border-l-4 border-red-500 pl-4 py-3 bg-gray-50 rounded-r">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-2">{test.title}</h3>
                            <p className="text-gray-600 text-sm mb-2">{test.description}</p>
                            <div className="flex gap-4 text-xs text-gray-500">
                              {test.assignedDate && (
                                <span>Assigned: {format(test.assignedDate, 'MMM dd, yyyy')}</span>
                              )}
                              {test.dueDate && (
                                <span>Due: {format(test.dueDate, 'MMM dd, yyyy')}</span>
                              )}
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => test.id && handleDelete(test.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}

