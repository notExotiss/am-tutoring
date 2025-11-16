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
import { Switch } from '@/components/ui/switch'
import { Plus, Trash2, CalendarIcon, FileText, X, Edit, Save } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'
import TestQuestionEditor from './TestQuestionEditor'

interface Question {
  id: string
  questionText: string
  questionImage?: string
  readingPassage?: string // For English questions
  options: string[]
  correctAnswer: number
  module: number
  section: 'english' | 'math'
  questionType?: 'multiple-choice' | 'open-ended'
}

interface Test {
  id?: string
  title: string
  description: string
  studentId: string
  studentName?: string
  dueDate: Date | null
  assignedDate: Date | null
  questions: Question[]
  timeLimitEnabled: boolean
  englishModule1Time?: number // in minutes
  englishModule2Time?: number
  mathModule1Time?: number
  mathModule2Time?: number
  breakTime?: number // in minutes, default 10
}

interface Student {
  id: string
  name: string
  email: string
}

const DIGITAL_SAT_STRUCTURE = {
  english: {
    module1: { count: 27, defaultTime: 32 }, // 32 minutes for 27 questions
    module2: { count: 27, defaultTime: 32 },
  },
  math: {
    module1: { count: 32, defaultTime: 35 }, // 35 minutes for 32 questions
    module2: { count: 32, defaultTime: 35 },
  },
  breakTime: 10, // 10 minutes between English and Math
}

export default function TestManagement() {
  const [tests, setTests] = useState<Test[]>([])
  const [students, setStudents] = useState<Student[]>([])
  const [selectedTest, setSelectedTest] = useState<Test | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [editingTest, setEditingTest] = useState<Test | null>(null)
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
          questions: data.questions || [],
          timeLimitEnabled: data.timeLimitEnabled !== false,
          englishModule1Time: data.englishModule1Time || DIGITAL_SAT_STRUCTURE.english.module1.defaultTime,
          englishModule2Time: data.englishModule2Time || DIGITAL_SAT_STRUCTURE.english.module2.defaultTime,
          mathModule1Time: data.mathModule1Time || DIGITAL_SAT_STRUCTURE.math.module1.defaultTime,
          mathModule2Time: data.mathModule2Time || DIGITAL_SAT_STRUCTURE.math.module2.defaultTime,
          breakTime: data.breakTime || DIGITAL_SAT_STRUCTURE.breakTime,
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
    const newTest: Test = {
      title: '',
      description: '',
      studentId: '',
      dueDate: null,
      assignedDate: new Date(),
      questions: [],
      timeLimitEnabled: true,
      englishModule1Time: DIGITAL_SAT_STRUCTURE.english.module1.defaultTime,
      englishModule2Time: DIGITAL_SAT_STRUCTURE.english.module2.defaultTime,
      mathModule1Time: DIGITAL_SAT_STRUCTURE.math.module1.defaultTime,
      mathModule2Time: DIGITAL_SAT_STRUCTURE.math.module2.defaultTime,
      breakTime: DIGITAL_SAT_STRUCTURE.breakTime,
    }
    setSelectedTest(newTest)
    setEditingTest(newTest)
    setShowForm(true)
  }

  const handleEditTest = (test: Test) => {
    setSelectedTest(test)
    setEditingTest({ ...test })
    setShowForm(true)
  }

  const initializeQuestions = (test: Test): Test => {
    const questions: Question[] = []
    
    // English Module 1: 27 questions
    for (let i = 1; i <= DIGITAL_SAT_STRUCTURE.english.module1.count; i++) {
      questions.push({
        id: `eng-m1-q${i}`,
        questionText: '',
        readingPassage: '',
        options: ['', '', '', ''],
        correctAnswer: 0,
        module: 1,
        section: 'english',
        questionType: 'multiple-choice',
      })
    }
    
    // English Module 2: 27 questions
    for (let i = 1; i <= DIGITAL_SAT_STRUCTURE.english.module2.count; i++) {
      questions.push({
        id: `eng-m2-q${i}`,
        questionText: '',
        readingPassage: '',
        options: ['', '', '', ''],
        correctAnswer: 0,
        module: 2,
        section: 'english',
        questionType: 'multiple-choice',
      })
    }
    
    // Math Module 1: 22 questions
    for (let i = 1; i <= DIGITAL_SAT_STRUCTURE.math.module1.count; i++) {
      questions.push({
        id: `math-m1-q${i}`,
        questionText: '',
        options: ['', '', '', ''],
        correctAnswer: 0,
        module: 1,
        section: 'math',
        questionType: 'multiple-choice',
      })
    }
    
    // Math Module 2: 22 questions
    for (let i = 1; i <= DIGITAL_SAT_STRUCTURE.math.module2.count; i++) {
      questions.push({
        id: `math-m2-q${i}`,
        questionText: '',
        options: ['', '', '', ''],
        correctAnswer: 0,
        module: 2,
        section: 'math',
        questionType: 'multiple-choice',
      })
    }
    
    return { ...test, questions }
  }

  const handleSaveTest = async () => {
    if (!db || !editingTest || !editingTest.studentId) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      })
      return
    }

    try {
      // Initialize questions if empty
      let testToSave = editingTest
      if (testToSave.questions.length === 0) {
        testToSave = initializeQuestions(testToSave)
      }

      const testData = {
        title: testToSave.title,
        description: testToSave.description,
        studentId: testToSave.studentId,
        dueDate: testToSave.dueDate || null,
        assignedDate: testToSave.assignedDate || new Date(),
        questions: testToSave.questions,
        timeLimitEnabled: testToSave.timeLimitEnabled,
        englishModule1Time: testToSave.englishModule1Time,
        englishModule2Time: testToSave.englishModule2Time,
        mathModule1Time: testToSave.mathModule1Time,
        mathModule2Time: testToSave.mathModule2Time,
        breakTime: testToSave.breakTime,
        completed: false,
      }

      if (editingTest.id) {
        // Update existing test
        const docRef = doc(db, 'tests', editingTest.id)
        await setDoc(docRef, testData as any)
        toast({
          title: 'Success',
          description: 'Test updated successfully!',
        })
      } else {
        // Create new test
        const testsRef = collection(db, 'tests')
        const newDocRef = doc(testsRef)
        await setDoc(newDocRef, testData as any)
        toast({
          title: 'Success',
          description: 'Test created successfully!',
        })
      }

      await loadData()
      setShowForm(false)
      setSelectedTest(null)
      setEditingTest(null)
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

  const updateQuestion = (questionId: string, updatedQuestion: Question) => {
    if (!editingTest) return
    const updatedQuestions = editingTest.questions.map(q =>
      q.id === questionId ? updatedQuestion : q
    )
    setEditingTest({ ...editingTest, questions: updatedQuestions })
  }

  const deleteQuestion = (questionId: string) => {
    if (!editingTest) return
    const updatedQuestions = editingTest.questions.filter(q => q.id !== questionId)
    setEditingTest({ ...editingTest, questions: updatedQuestions })
  }

  // Group tests by student
  const testsByStudent = new Map<string, Test[]>()
  tests.forEach(test => {
    if (!testsByStudent.has(test.studentId)) {
      testsByStudent.set(test.studentId, [])
    }
    testsByStudent.get(test.studentId)!.push(test)
  })

  if (showForm && editingTest) {
    // Initialize questions if needed
    if (editingTest.questions.length === 0) {
      const initialized = initializeQuestions(editingTest)
      setEditingTest(initialized)
    }

    const englishM1Questions = editingTest.questions.filter(q => q.section === 'english' && q.module === 1)
    const englishM2Questions = editingTest.questions.filter(q => q.section === 'english' && q.module === 2)
    const mathM1Questions = editingTest.questions.filter(q => q.section === 'math' && q.module === 1)
    const mathM2Questions = editingTest.questions.filter(q => q.section === 'math' && q.module === 2)

    return (
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Create/Edit Test</h2>
          <Button variant="outline" onClick={() => {
            setShowForm(false)
            setSelectedTest(null)
            setEditingTest(null)
          }}>
            <X className="w-4 h-4 mr-2" />
            Cancel
          </Button>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Test Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Student</Label>
              <Select
                value={editingTest.studentId}
                onValueChange={(value) => setEditingTest({ ...editingTest, studentId: value })}
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
                value={editingTest.title}
                onChange={(e) => setEditingTest({ ...editingTest, title: e.target.value })}
                className="mt-1"
                placeholder="Test title"
              />
            </div>

            <div>
              <Label>Description</Label>
              <textarea
                value={editingTest.description}
                onChange={(e) => setEditingTest({ ...editingTest, description: e.target.value })}
                className="mt-1 flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                placeholder="Test description..."
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
                        !editingTest.assignedDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {editingTest.assignedDate ? (
                        format(editingTest.assignedDate, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={editingTest.assignedDate || undefined}
                      onSelect={(date) => setEditingTest({ ...editingTest, assignedDate: date || new Date() })}
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
                        !editingTest.dueDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {editingTest.dueDate ? (
                        format(editingTest.dueDate, "PPP")
                      ) : (
                        <span>Pick a date (optional)</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={editingTest.dueDate || undefined}
                      onSelect={(date) => setEditingTest({ ...editingTest, dueDate: date || null })}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* Time Limit Settings */}
            <div className="border-t pt-4">
              <div className="flex items-center justify-between mb-4">
                <Label>Enable Time Limits</Label>
                <Switch
                  checked={editingTest.timeLimitEnabled}
                  onCheckedChange={(checked) => setEditingTest({ ...editingTest, timeLimitEnabled: checked })}
                />
              </div>

              {editingTest.timeLimitEnabled && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <div>
                    <Label>English M1 (min)</Label>
                    <Input
                      type="number"
                      value={editingTest.englishModule1Time}
                      onChange={(e) => setEditingTest({ ...editingTest, englishModule1Time: parseInt(e.target.value) || 0 })}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>English M2 (min)</Label>
                    <Input
                      type="number"
                      value={editingTest.englishModule2Time}
                      onChange={(e) => setEditingTest({ ...editingTest, englishModule2Time: parseInt(e.target.value) || 0 })}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>Math M1 (min)</Label>
                    <Input
                      type="number"
                      value={editingTest.mathModule1Time}
                      onChange={(e) => setEditingTest({ ...editingTest, mathModule1Time: parseInt(e.target.value) || 0 })}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label>Math M2 (min)</Label>
                    <Input
                      type="number"
                      value={editingTest.mathModule2Time}
                      onChange={(e) => setEditingTest({ ...editingTest, mathModule2Time: parseInt(e.target.value) || 0 })}
                      className="mt-1"
                    />
                  </div>
                </div>
              )}
            </div>

            <Button onClick={handleSaveTest} className="w-full bg-blue-600 hover:bg-blue-700">
              <Save className="w-4 h-4 mr-2" />
              Save Test
            </Button>
          </CardContent>
        </Card>

        {/* Questions Editor */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>English Module 1 (27 questions)</CardTitle>
            </CardHeader>
            <CardContent>
              {englishM1Questions.map((question) => (
                <TestQuestionEditor
                  key={question.id}
                  question={question}
                  onUpdate={(updated) => updateQuestion(question.id, updated)}
                  onDelete={() => deleteQuestion(question.id)}
                />
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>English Module 2 (27 questions)</CardTitle>
            </CardHeader>
            <CardContent>
              {englishM2Questions.map((question) => (
                <TestQuestionEditor
                  key={question.id}
                  question={question}
                  onUpdate={(updated) => updateQuestion(question.id, updated)}
                  onDelete={() => deleteQuestion(question.id)}
                />
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Math Module 1 (32 questions)</CardTitle>
            </CardHeader>
            <CardContent>
              {mathM1Questions.map((question) => (
                <TestQuestionEditor
                  key={question.id}
                  question={question}
                  onUpdate={(updated) => updateQuestion(question.id, updated)}
                  onDelete={() => deleteQuestion(question.id)}
                />
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Math Module 2 (32 questions)</CardTitle>
            </CardHeader>
            <CardContent>
              {mathM2Questions.map((question) => (
                <TestQuestionEditor
                  key={question.id}
                  question={question}
                  onUpdate={(updated) => updateQuestion(question.id, updated)}
                  onDelete={() => deleteQuestion(question.id)}
                />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Tests</h2>
          <p className="text-gray-600 text-sm">Create and manage Digital SAT tests</p>
        </div>
        <Button onClick={handleNewTest} className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          New Test
        </Button>
      </div>

      {tests.length === 0 ? (
        <Card className="p-12 text-center">
          <FileText className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <h3 className="text-xl font-semibold mb-2">No tests yet</h3>
          <p className="text-gray-600 mb-6">Create your first Digital SAT test</p>
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
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-semibold text-lg">{test.title}</h3>
                              <Badge>{test.questions.length} questions</Badge>
                              {test.timeLimitEnabled && <Badge variant="secondary">Timed</Badge>}
                            </div>
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
                          <div className="flex gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleEditTest(test)}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
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
