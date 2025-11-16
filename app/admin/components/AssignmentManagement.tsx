'use client'

import { useState, useEffect } from 'react'
import { collection, doc, getDocs, setDoc, deleteDoc, query, orderBy, where } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Plus, Trash2, CalendarIcon, BookOpen, Folder, X } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'

interface Assignment {
  id?: string
  title: string
  description: string
  folderId?: string
  folderName?: string
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

interface Folder {
  id: string
  name: string
}

export default function AssignmentManagement() {
  const [assignments, setAssignments] = useState<Assignment[]>([])
  const [students, setStudents] = useState<Student[]>([])
  const [folders, setFolders] = useState<Folder[]>([])
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null)
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

      // Load folders
      const foldersRef = collection(db, 'folders')
      const foldersSnapshot = await getDocs(query(foldersRef, orderBy('name')))
      const foldersList: Folder[] = []
      foldersSnapshot.forEach((doc) => {
        foldersList.push({
          id: doc.id,
          name: doc.data().name || '',
        })
      })
      setFolders(foldersList)

      // Load assignments
      await loadAssignments(studentsList, foldersList)
    } catch (error) {
      console.error('Error loading data:', error)
      toast({
        title: 'Error',
        description: 'Failed to load data.',
        variant: 'destructive',
      })
    }
  }

  const loadAssignments = async (studentsList: Student[], foldersList: Folder[]) => {
    if (!db) return

    try {
      const assignmentsRef = collection(db, 'assignments')
      const q = query(assignmentsRef, orderBy('assignedDate', 'desc'))
      const querySnapshot = await getDocs(q)
      
      const assignmentsList: Assignment[] = []
      querySnapshot.forEach((doc) => {
        const data = doc.data()
        const student = studentsList.find(s => s.id === data.studentId)
        const folder = foldersList.find(f => f.id === data.folderId)
        
        assignmentsList.push({
          id: doc.id,
          title: data.title || '',
          description: data.description || '',
          folderId: data.folderId || '',
          folderName: folder?.name,
          studentId: data.studentId || '',
          studentName: student?.name,
          dueDate: data.dueDate ? data.dueDate.toDate() : null,
          assignedDate: data.assignedDate ? data.assignedDate.toDate() : null,
        })
      })

      setAssignments(assignmentsList)
    } catch (error) {
      console.error('Error loading assignments:', error)
    }
  }

  const handleNewAssignment = () => {
    setSelectedAssignment({
      title: '',
      description: '',
      folderId: '',
      studentId: '',
      dueDate: null,
      assignedDate: new Date(),
    })
    setShowForm(true)
  }

  const handleSave = async () => {
    if (!db || !selectedAssignment || !selectedAssignment.studentId) {
      toast({
        title: 'Error',
        description: 'Please select a student.',
        variant: 'destructive',
      })
      return
    }

    try {
      const assignmentData = {
        title: selectedAssignment.title,
        description: selectedAssignment.description,
        folderId: selectedAssignment.folderId || null,
        studentId: selectedAssignment.studentId,
        dueDate: selectedAssignment.dueDate || null,
        assignedDate: selectedAssignment.assignedDate || new Date(),
        completed: false,
      }

      const assignmentsRef = collection(db, 'assignments')
      const newDocRef = doc(assignmentsRef)
      await setDoc(newDocRef, assignmentData as any)

      toast({
        title: 'Success',
        description: 'Assignment created successfully!',
      })

      await loadData()
      setShowForm(false)
      setSelectedAssignment(null)
    } catch (error) {
      console.error('Error saving assignment:', error)
      toast({
        title: 'Error',
        description: 'Failed to save assignment.',
        variant: 'destructive',
      })
    }
  }

  const handleDelete = async (assignmentId: string) => {
    if (!db || !confirm('Are you sure you want to delete this assignment?')) {
      return
    }

    try {
      await deleteDoc(doc(db, 'assignments', assignmentId))
      toast({
        title: 'Success',
        description: 'Assignment deleted successfully!',
      })
      await loadData()
    } catch (error) {
      console.error('Error deleting assignment:', error)
      toast({
        title: 'Error',
        description: 'Failed to delete assignment.',
        variant: 'destructive',
      })
    }
  }

  // Group assignments by student
  const assignmentsByStudent = new Map<string, Assignment[]>()
  assignments.forEach(assignment => {
    if (!assignmentsByStudent.has(assignment.studentId)) {
      assignmentsByStudent.set(assignment.studentId, [])
    }
    assignmentsByStudent.get(assignment.studentId)!.push(assignment)
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Assignments</h2>
          <p className="text-gray-600 text-sm">Create and manage assignments for students</p>
        </div>
        <Button onClick={handleNewAssignment} className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          New Assignment
        </Button>
      </div>

      {/* Create/Edit Form */}
      {showForm && selectedAssignment && (
        <Card className="mb-6 border-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Create New Assignment</CardTitle>
              <Button variant="ghost" size="icon" onClick={() => {
                setShowForm(false)
                setSelectedAssignment(null)
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
                  value={selectedAssignment.studentId}
                  onValueChange={(value) => setSelectedAssignment({ ...selectedAssignment, studentId: value })}
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
                <Label>Folder (Optional)</Label>
                <Select
                  value={selectedAssignment.folderId || ''}
                  onValueChange={(value) => setSelectedAssignment({ ...selectedAssignment, folderId: value || undefined })}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select a folder (optional)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">No Folder</SelectItem>
                    {folders.map((folder) => (
                      <SelectItem key={folder.id} value={folder.id}>
                        {folder.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Title</Label>
                <Input
                  value={selectedAssignment.title}
                  onChange={(e) => setSelectedAssignment({ ...selectedAssignment, title: e.target.value })}
                  className="mt-1"
                  placeholder="Assignment title"
                />
              </div>

              <div>
                <Label>Description</Label>
                <textarea
                  value={selectedAssignment.description}
                  onChange={(e) => setSelectedAssignment({ ...selectedAssignment, description: e.target.value })}
                  className="mt-1 flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  placeholder="Assignment description and instructions..."
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
                          !selectedAssignment.assignedDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedAssignment.assignedDate ? (
                          format(selectedAssignment.assignedDate, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={selectedAssignment.assignedDate || undefined}
                        onSelect={(date) => setSelectedAssignment({ ...selectedAssignment, assignedDate: date || new Date() })}
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
                          !selectedAssignment.dueDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedAssignment.dueDate ? (
                          format(selectedAssignment.dueDate, "PPP")
                        ) : (
                          <span>Pick a date (optional)</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={selectedAssignment.dueDate || undefined}
                        onSelect={(date) => setSelectedAssignment({ ...selectedAssignment, dueDate: date || null })}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="flex gap-4">
                <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
                  Create Assignment
                </Button>
                <Button variant="outline" onClick={() => {
                  setShowForm(false)
                  setSelectedAssignment(null)
                }}>
                  Cancel
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Assignments List */}
      {assignments.length === 0 ? (
        <Card className="p-12 text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <h3 className="text-xl font-semibold mb-2">No assignments yet</h3>
          <p className="text-gray-600 mb-6">Create your first assignment to get started</p>
          <Button onClick={handleNewAssignment} className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Create First Assignment
          </Button>
        </Card>
      ) : (
        <div className="space-y-6">
          {Array.from(assignmentsByStudent.entries()).map(([studentId, studentAssignments]) => {
            const student = students.find(s => s.id === studentId)
            return (
              <Card key={studentId}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    {student?.name || 'Unknown Student'}
                  </CardTitle>
                  <CardDescription>{student?.email}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {studentAssignments.map((assignment) => (
                      <div key={assignment.id} className="border-l-4 border-blue-500 pl-4 py-3 bg-gray-50 rounded-r">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-semibold text-lg">{assignment.title}</h3>
                              {assignment.folderName && (
                                <Badge variant="secondary" className="text-xs">
                                  <Folder className="w-3 h-3 mr-1" />
                                  {assignment.folderName}
                                </Badge>
                              )}
                            </div>
                            <p className="text-gray-600 text-sm mb-2">{assignment.description}</p>
                            <div className="flex gap-4 text-xs text-gray-500">
                              {assignment.assignedDate && (
                                <span>Assigned: {format(assignment.assignedDate, 'MMM dd, yyyy')}</span>
                              )}
                              {assignment.dueDate && (
                                <span>Due: {format(assignment.dueDate, 'MMM dd, yyyy')}</span>
                              )}
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => assignment.id && handleDelete(assignment.id)}
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

