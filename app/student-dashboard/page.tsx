'use client'

import { useState, useEffect } from 'react'
import { User, onAuthStateChanged, signOut } from 'firebase/auth'
import { collection, doc, getDoc, getDocs, query, where, orderBy } from 'firebase/firestore'
import { auth, db } from '@/lib/firebase'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { useToast } from '@/hooks/use-toast'
import { 
  BarChart3, 
  BookOpen, 
  FileText, 
  Folder, 
  LogOut, 
  TrendingUp,
  Calendar,
  CheckCircle2,
  Clock,
  AlertCircle
} from 'lucide-react'
import { format } from 'date-fns'

interface StudentData {
  id: string
  name: string
  email: string
  satTarget: string
  testDate: Date | null
  math: {
    currentScore: string
    accuracy: string
  }
  reading: {
    currentScore: string
    accuracy: string
  }
  writing: {
    currentScore: string
    accuracy: string
  }
}

interface Assignment {
  id: string
  title: string
  description: string
  folderId?: string
  folderName?: string
  dueDate: Date | null
  assignedDate: Date | null
  completed: boolean
  completedDate?: Date | null
  studentId: string
}

interface Test {
  id: string
  title: string
  description: string
  assignedDate: Date | null
  dueDate: Date | null
  completed: boolean
  completedDate?: Date | null
  score?: string
  studentId: string
}

export default function StudentDashboard() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [studentData, setStudentData] = useState<StudentData | null>(null)
  const [assignments, setAssignments] = useState<Assignment[]>([])
  const [tests, setTests] = useState<Test[]>([])
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    if (!auth) {
      setLoading(false)
      router.push('/sign-in')
      return
    }
    
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        router.push('/sign-in')
        return
      }
      setUser(currentUser)
      await loadStudentData(currentUser.email || '')
    })

    return () => unsubscribe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router])

  const loadStudentData = async (email: string) => {
    if (!db || !email) {
      setLoading(false)
      return
    }

    try {
      // Find student by email
      const studentsRef = collection(db, 'students')
      const q = query(studentsRef, where('email', '==', email))
      const querySnapshot = await getDocs(q)

      if (querySnapshot.empty) {
        toast({
          title: 'Student Not Found',
          description: 'No student record found for your email. Please contact your tutor.',
          variant: 'destructive',
        })
        setLoading(false)
        return
      }

      const studentDoc = querySnapshot.docs[0]
      const data = studentDoc.data()
      
      setStudentData({
        id: studentDoc.id,
        name: data.name || '',
        email: data.email || '',
        satTarget: data.satTarget || '',
        testDate: data.testDate ? data.testDate.toDate() : null,
        math: {
          currentScore: data.math?.currentScore || '',
          accuracy: data.math?.accuracy || '',
        },
        reading: {
          currentScore: data.reading?.currentScore || '',
          accuracy: data.reading?.accuracy || '',
        },
        writing: {
          currentScore: data.writing?.currentScore || '',
          accuracy: data.writing?.accuracy || '',
        },
      })

      // Load assignments
      await loadAssignments(studentDoc.id)
      
      // Load tests
      await loadTests(studentDoc.id)

      setLoading(false)
    } catch (error) {
      console.error('Error loading student data:', error)
      toast({
        title: 'Error',
        description: 'Failed to load student data. Please try again.',
        variant: 'destructive',
      })
      setLoading(false)
    }
  }

  const loadAssignments = async (studentId: string) => {
    if (!db) return

    try {
      const assignmentsRef = collection(db, 'assignments')
      // Query for assignments where studentId is in the studentIds array
      // Note: Can't use orderBy with array-contains without an index, so we'll sort in memory
      const q = query(
        assignmentsRef, 
        where('studentIds', 'array-contains', studentId)
      )
      const querySnapshot = await getDocs(q)
      
      const assignmentsList: Assignment[] = []
      const folderMap = new Map<string, string>()

      // Load folders
      if (!db) return
      const foldersRef = collection(db, 'folders')
      const foldersSnapshot = await getDocs(foldersRef)
      foldersSnapshot.forEach((doc) => {
        if (!db) return
        const folderData = doc.data()
        folderMap.set(doc.id, folderData.name || 'Unnamed Folder')
        // Also check if folder is assigned to this student
        if (folderData.studentIds && folderData.studentIds.includes(studentId)) {
          // Load all assignments in this folder
          const folderAssignmentsRef = collection(db, 'assignments')
          const folderQ = query(
            folderAssignmentsRef,
            where('folderId', '==', doc.id)
          )
          getDocs(folderQ).then((folderAssignmentsSnapshot) => {
            folderAssignmentsSnapshot.forEach((assignmentDoc) => {
              const assignmentData = assignmentDoc.data()
              // Only add if not already in list
              if (!assignmentsList.find(a => a.id === assignmentDoc.id)) {
                assignmentsList.push({
                  id: assignmentDoc.id,
                  title: assignmentData.title || '',
                  description: assignmentData.description || '',
                  folderId: assignmentData.folderId || '',
                  folderName: folderData.name || 'Unnamed Folder',
                  dueDate: assignmentData.dueDate ? assignmentData.dueDate.toDate() : null,
                  assignedDate: assignmentData.assignedDate ? assignmentData.assignedDate.toDate() : null,
                  completed: assignmentData.completed || false,
                  completedDate: assignmentData.completedDate ? assignmentData.completedDate.toDate() : null,
                  studentId: studentId,
                })
              }
            })
            setAssignments([...assignmentsList])
          })
        }
      })

      querySnapshot.forEach((doc) => {
        const data = doc.data()
        assignmentsList.push({
          id: doc.id,
          title: data.title || '',
          description: data.description || '',
          folderId: data.folderId || '',
          folderName: data.folderId ? folderMap.get(data.folderId) : undefined,
          dueDate: data.dueDate ? data.dueDate.toDate() : null,
          assignedDate: data.assignedDate ? data.assignedDate.toDate() : null,
          completed: data.completed || false,
          completedDate: data.completedDate ? data.completedDate.toDate() : null,
          studentId: studentId,
        })
      })

      // Sort by assignedDate descending (most recent first)
      assignmentsList.sort((a, b) => {
        if (!a.assignedDate && !b.assignedDate) return 0
        if (!a.assignedDate) return 1
        if (!b.assignedDate) return -1
        return b.assignedDate.getTime() - a.assignedDate.getTime()
      })

      setAssignments(assignmentsList)
    } catch (error) {
      console.error('Error loading assignments:', error)
      // Fallback: try old format
      if (!db) return
      try {
        const assignmentsRef = collection(db, 'assignments')
        const q = query(
          assignmentsRef, 
          where('studentId', '==', studentId)
        )
        const querySnapshot = await getDocs(q)
        
        const assignmentsList: Assignment[] = []
        querySnapshot.forEach((doc) => {
          const data = doc.data()
          assignmentsList.push({
            id: doc.id,
            title: data.title || '',
            description: data.description || '',
            folderId: data.folderId || '',
            folderName: undefined,
            dueDate: data.dueDate ? data.dueDate.toDate() : null,
            assignedDate: data.assignedDate ? data.assignedDate.toDate() : null,
            completed: data.completed || false,
            completedDate: data.completedDate ? data.completedDate.toDate() : null,
            studentId: data.studentId || '',
          })
        })
        // Sort by assignedDate descending (most recent first)
        assignmentsList.sort((a, b) => {
          if (!a.assignedDate && !b.assignedDate) return 0
          if (!a.assignedDate) return 1
          if (!b.assignedDate) return -1
          return b.assignedDate.getTime() - a.assignedDate.getTime()
        })
        setAssignments(assignmentsList)
      } catch (fallbackError) {
        console.error('Error loading assignments (fallback):', fallbackError)
      }
    }
  }

  const loadTests = async (studentId: string) => {
    if (!db) return

    try {
      const testsRef = collection(db, 'tests')
      // Query for tests where studentId is in the studentIds array
      // Note: Can't use orderBy with array-contains without an index, so we'll sort in memory
      const q = query(
        testsRef,
        where('studentIds', 'array-contains', studentId)
      )
      const querySnapshot = await getDocs(q)
      
      const testsList: Test[] = []
      querySnapshot.forEach((doc) => {
        const data = doc.data()
        testsList.push({
          id: doc.id,
          title: data.title || '',
          description: data.description || '',
          assignedDate: data.assignedDate ? data.assignedDate.toDate() : null,
          dueDate: data.dueDate ? data.dueDate.toDate() : null,
          completed: data.completed || false,
          completedDate: data.completedDate ? data.completedDate.toDate() : null,
          score: data.score || '',
          studentId: studentId, // Keep for compatibility
        })
      })

      // Sort by assignedDate descending (most recent first)
      testsList.sort((a, b) => {
        if (!a.assignedDate && !b.assignedDate) return 0
        if (!a.assignedDate) return 1
        if (!b.assignedDate) return -1
        return b.assignedDate.getTime() - a.assignedDate.getTime()
      })

      setTests(testsList)
    } catch (error) {
      console.error('Error loading tests:', error)
      // Fallback: try old format with single studentId
      if (!db) return
      try {
        const testsRef = collection(db, 'tests')
        const q = query(
          testsRef,
          where('studentId', '==', studentId)
        )
        const querySnapshot = await getDocs(q)
        
        const testsList: Test[] = []
        querySnapshot.forEach((doc) => {
          const data = doc.data()
          testsList.push({
            id: doc.id,
            title: data.title || '',
            description: data.description || '',
            assignedDate: data.assignedDate ? data.assignedDate.toDate() : null,
            dueDate: data.dueDate ? data.dueDate.toDate() : null,
            completed: data.completed || false,
            completedDate: data.completedDate ? data.completedDate.toDate() : null,
            score: data.score || '',
            studentId: data.studentId || '',
          })
        })
        // Sort by assignedDate descending (most recent first)
        testsList.sort((a, b) => {
          if (!a.assignedDate && !b.assignedDate) return 0
          if (!a.assignedDate) return 1
          if (!b.assignedDate) return -1
          return b.assignedDate.getTime() - a.assignedDate.getTime()
        })
        setTests(testsList)
      } catch (fallbackError) {
        console.error('Error loading tests (fallback):', fallbackError)
      }
    }
  }

  const handleSignOut = async () => {
    if (!auth) return
    try {
      await signOut(auth)
      router.push('/sign-in')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  if (!studentData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Student Not Found</CardTitle>
            <CardDescription>No student record found for your email.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={handleSignOut} className="w-full">
              Sign Out
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const pendingAssignments = assignments.filter(a => !a.completed)
  const completedAssignments = assignments.filter(a => a.completed)
  const pendingTests = tests.filter(t => !t.completed)
  const completedTests = tests.filter(t => t.completed)

  // Group assignments by folder
  const assignmentsByFolder = new Map<string, Assignment[]>()
  const noFolderAssignments: Assignment[] = []

  assignments.forEach(assignment => {
    if (assignment.folderId && assignment.folderName) {
      if (!assignmentsByFolder.has(assignment.folderId)) {
        assignmentsByFolder.set(assignment.folderId, [])
      }
      assignmentsByFolder.get(assignment.folderId)!.push(assignment)
    } else {
      noFolderAssignments.push(assignment)
    }
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-black text-gray-900">Welcome, {studentData.name || 'Student'}!</h1>
              <p className="text-gray-600 mt-1">{studentData.email}</p>
            </div>
            <Button variant="outline" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="statistics" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="statistics">
              <BarChart3 className="w-4 h-4 mr-2" />
              Statistics
            </TabsTrigger>
            <TabsTrigger value="assignments">
              <BookOpen className="w-4 h-4 mr-2" />
              Assignments
            </TabsTrigger>
            <TabsTrigger value="tests">
              <FileText className="w-4 h-4 mr-2" />
              Tests
            </TabsTrigger>
          </TabsList>

          {/* Statistics Tab */}
          <TabsContent value="statistics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    Math Score
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600">
                    {studentData.math.currentScore || 'N/A'}
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Accuracy: {studentData.math.accuracy || 'N/A'}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-red-600" />
                    Reading Score
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-red-600">
                    {studentData.reading.currentScore || 'N/A'}
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Accuracy: {studentData.reading.accuracy || 'N/A'}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    Writing Score
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600">
                    {studentData.writing.currentScore || 'N/A'}
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Accuracy: {studentData.writing.accuracy || 'N/A'}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>SAT Target</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {studentData.satTarget || 'Not set'}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Test Date</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {studentData.testDate ? format(studentData.testDate, 'PPP') : 'Not set'}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Assignments Tab */}
          <TabsContent value="assignments" className="space-y-6">
            {pendingAssignments.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-orange-600" />
                  Pending Assignments
                </h2>
                <div className="space-y-4">
                  {/* Assignments by folder */}
                  {Array.from(assignmentsByFolder.entries()).map(([folderId, folderAssignments]) => {
                    const pending = folderAssignments.filter(a => !a.completed)
                    if (pending.length === 0) return null
                    return (
                      <Card key={folderId}>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Folder className="w-5 h-5 text-blue-600" />
                            {folderAssignments[0].folderName}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            {pending.map((assignment) => (
                              <div key={assignment.id} className="border-l-4 border-blue-500 pl-4 py-2">
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <h3 className="font-semibold text-lg">{assignment.title}</h3>
                                    <p className="text-gray-600 text-sm mt-1">{assignment.description}</p>
                                    {assignment.dueDate && (
                                      <p className="text-sm text-gray-500 mt-2 flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        Due: {format(assignment.dueDate, 'PPP')}
                                      </p>
                                    )}
                                  </div>
                                  <Badge variant="outline" className="ml-4">
                                    Pending
                                  </Badge>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}

                  {/* Assignments without folder */}
                  {noFolderAssignments.filter(a => !a.completed).map((assignment) => (
                    <Card key={assignment.id}>
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg">{assignment.title}</h3>
                            <p className="text-gray-600 text-sm mt-1">{assignment.description}</p>
                            {assignment.dueDate && (
                              <p className="text-sm text-gray-500 mt-2 flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                Due: {format(assignment.dueDate, 'PPP')}
                              </p>
                            )}
                          </div>
                          <Badge variant="outline" className="ml-4">
                            Pending
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {completedAssignments.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  Completed Assignments
                </h2>
                <div className="space-y-4">
                  {completedAssignments.map((assignment) => (
                    <Card key={assignment.id}>
                      <CardContent className="pt-6">
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
                            <p className="text-gray-600 text-sm">{assignment.description}</p>
                            {assignment.completedDate && (
                              <p className="text-sm text-gray-500 mt-2 flex items-center gap-1">
                                <CheckCircle2 className="w-4 h-4 text-green-600" />
                                Completed: {format(assignment.completedDate, 'PPP')}
                              </p>
                            )}
                          </div>
                          <Badge className="ml-4 bg-green-600">
                            Completed
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {assignments.length === 0 && (
              <Card>
                <CardContent className="pt-6 text-center py-12">
                  <BookOpen className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600">No assignments yet.</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Tests Tab */}
          <TabsContent value="tests" className="space-y-6">
            {pendingTests.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-orange-600" />
                  Pending Tests
                </h2>
                <div className="space-y-4">
                  {pendingTests.map((test) => (
                    <Card key={test.id}>
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg">{test.title}</h3>
                            <p className="text-gray-600 text-sm mt-1">{test.description}</p>
                            <div className="flex gap-4 mt-2 text-sm text-gray-500">
                              {test.assignedDate && (
                                <p className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  Assigned: {format(test.assignedDate, 'PPP')}
                                </p>
                              )}
                              {test.dueDate && (
                                <p className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  Due: {format(test.dueDate, 'PPP')}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              onClick={() => router.push(`/student-dashboard/take-test/${test.id}`)}
                              className="bg-blue-600 hover:bg-blue-700"
                            >
                              Start Test
                            </Button>
                            <Badge variant="outline" className="ml-4">
                              Pending
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {completedTests.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  Completed Tests
                </h2>
                <div className="space-y-4">
                  {completedTests.map((test) => (
                    <Card key={test.id}>
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg">{test.title}</h3>
                            <p className="text-gray-600 text-sm mt-1">{test.description}</p>
                            <div className="flex gap-4 mt-2 text-sm">
                              {test.score && (
                                <p className="font-semibold text-blue-600">
                                  Score: {test.score}
                                </p>
                              )}
                              {test.completedDate && (
                                <p className="text-gray-500 flex items-center gap-1">
                                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                                  Completed: {format(test.completedDate, 'PPP')}
                                </p>
                              )}
                            </div>
                          </div>
                          <Badge className="ml-4 bg-green-600">
                            Completed
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {tests.length === 0 && (
              <Card>
                <CardContent className="pt-6 text-center py-12">
                  <FileText className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600">No tests yet.</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

