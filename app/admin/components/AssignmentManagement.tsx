'use client'

import { useState, useEffect } from 'react'
import { collection, doc, getDocs, setDoc, updateDoc, deleteDoc, query, orderBy, where } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Plus, Trash2, CalendarIcon, BookOpen, Folder, X, GripVertical } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'
import { DndContext, DragOverlay, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, useDroppable } from '@dnd-kit/core'
import { arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

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

function DroppableFolder({ id, name, description, children }: { id: string, name: string, description: string, children: React.ReactNode }) {
  const { setNodeRef, isOver } = useDroppable({
    id: id,
  })

  return (
    <Card
      ref={setNodeRef}
      className={cn(
        "transition-colors",
        isOver && "border-blue-500 bg-blue-50"
      )}
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Folder className="w-5 h-5 text-blue-600" />
          {name}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  )
}

function SortableAssignmentItem({ assignment, onDelete }: { assignment: Assignment, onDelete: (id: string) => void }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: assignment.id || '' })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="border-l-4 border-blue-500 pl-4 py-3 bg-gray-50 rounded-r mb-2"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-2 flex-1">
          <div
            {...attributes}
            {...listeners}
            className="cursor-grab active:cursor-grabbing mt-1"
          >
            <GripVertical className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg">{assignment.title}</h3>
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
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => assignment.id && onDelete(assignment.id)}
          className="text-red-600 hover:text-red-700"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}

export default function AssignmentManagement() {
  const [assignments, setAssignments] = useState<Assignment[]>([])
  const [students, setStudents] = useState<Student[]>([])
  const [folders, setFolders] = useState<Folder[]>([])
  const [selectedStudent, setSelectedStudent] = useState<string>('')
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [newFolderName, setNewFolderName] = useState('')
  const [showFolderForm, setShowFolderForm] = useState(false)
  const [activeId, setActiveId] = useState<string | null>(null)
  const { toast } = useToast()

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

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
    if (!selectedStudent) {
      toast({
        title: 'Error',
        description: 'Please select a student first.',
        variant: 'destructive',
      })
      return
    }
    setSelectedAssignment({
      title: '',
      description: '',
      folderId: undefined,
      studentId: selectedStudent,
      dueDate: null,
      assignedDate: new Date(),
    })
    setShowForm(true)
  }

  const handleSaveAssignment = async () => {
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

  const handleCreateFolder = async () => {
    if (!db || !newFolderName.trim()) {
      toast({
        title: 'Error',
        description: 'Please enter a folder name.',
        variant: 'destructive',
      })
      return
    }

    try {
      const foldersRef = collection(db, 'folders')
      const newDocRef = doc(foldersRef)
      await setDoc(newDocRef, { name: newFolderName.trim() })

      toast({
        title: 'Success',
        description: 'Folder created successfully!',
      })

      setNewFolderName('')
      setShowFolderForm(false)
      await loadData()
    } catch (error) {
      console.error('Error creating folder:', error)
      toast({
        title: 'Error',
        description: 'Failed to create folder.',
        variant: 'destructive',
      })
    }
  }

  const handleDragEnd = async (event: any) => {
    const { active, over } = event

    if (!over || active.id === over.id) {
      setActiveId(null)
      return
    }

    const assignmentId = active.id as string
    const targetFolderId = over.id as string

    // Find the assignment
    const assignment = assignments.find(a => a.id === assignmentId)
    if (!assignment || !db) return

    // Update assignment folder
    try {
      const assignmentRef = doc(db, 'assignments', assignmentId)
      await updateDoc(assignmentRef, {
        folderId: targetFolderId === 'unassigned' ? null : targetFolderId,
      } as any)

      toast({
        title: 'Success',
        description: 'Assignment moved successfully!',
      })

      await loadData()
    } catch (error) {
      console.error('Error moving assignment:', error)
      toast({
        title: 'Error',
        description: 'Failed to move assignment.',
        variant: 'destructive',
      })
    }

    setActiveId(null)
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

  // Filter assignments by selected student
  const studentAssignments = selectedStudent
    ? assignments.filter(a => a.studentId === selectedStudent)
    : []

  // Group assignments by folder
  const assignmentsByFolder = new Map<string, Assignment[]>()
  const unassignedAssignments: Assignment[] = []

  studentAssignments.forEach(assignment => {
    if (assignment.folderId) {
      if (!assignmentsByFolder.has(assignment.folderId)) {
        assignmentsByFolder.set(assignment.folderId, [])
      }
      assignmentsByFolder.get(assignment.folderId)!.push(assignment)
    } else {
      unassignedAssignments.push(assignment)
    }
  })

  const activeAssignment = activeId ? assignments.find(a => a.id === activeId) : null

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">Assignments</h2>
          <p className="text-gray-600 text-sm">Create and manage assignments for students</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => setShowFolderForm(true)}
          >
            <Folder className="w-4 h-4 mr-2" />
            New Folder
          </Button>
          <Button onClick={handleNewAssignment} className="bg-blue-600 hover:bg-blue-700" disabled={!selectedStudent}>
            <Plus className="w-4 h-4 mr-2" />
            New Assignment
          </Button>
        </div>
      </div>

      {/* Student Selector */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Select Student</CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={selectedStudent} onValueChange={setSelectedStudent}>
            <SelectTrigger>
              <SelectValue placeholder="Select a student to manage assignments" />
            </SelectTrigger>
            <SelectContent>
              {students.map((student) => (
                <SelectItem key={student.id} value={student.id}>
                  {student.name} ({student.email})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Create Folder Form */}
      {showFolderForm && (
        <Card className="mb-6 border-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Create New Folder</CardTitle>
              <Button variant="ghost" size="icon" onClick={() => {
                setShowFolderForm(false)
                setNewFolderName('')
              }}>
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label>Folder Name</Label>
                <Input
                  value={newFolderName}
                  onChange={(e) => setNewFolderName(e.target.value)}
                  className="mt-1"
                  placeholder="Enter folder name"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleCreateFolder()
                    }
                  }}
                />
              </div>
              <div className="flex gap-4">
                <Button onClick={handleCreateFolder} className="bg-blue-600 hover:bg-blue-700">
                  Create Folder
                </Button>
                <Button variant="outline" onClick={() => {
                  setShowFolderForm(false)
                  setNewFolderName('')
                }}>
                  Cancel
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Create Assignment Form */}
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
                <Button onClick={handleSaveAssignment} className="bg-blue-600 hover:bg-blue-700">
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

      {/* Assignments and Folders with Drag and Drop */}
      {selectedStudent && (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={(event) => setActiveId(event.active.id as string)}
          onDragEnd={handleDragEnd}
        >
          <div className="space-y-6">
            {/* Unassigned Assignments */}
            {unassignedAssignments.length > 0 && (
              <DroppableFolder id="unassigned" name="Unassigned Assignments" description="Drag assignments here or to folders">
                <SortableContext
                  items={unassignedAssignments.map(a => a.id || '')}
                  strategy={verticalListSortingStrategy}
                >
                  {unassignedAssignments.map((assignment) => (
                    <SortableAssignmentItem
                      key={assignment.id}
                      assignment={assignment}
                      onDelete={handleDelete}
                    />
                  ))}
                </SortableContext>
              </DroppableFolder>
            )}

            {/* Folders with Assignments */}
            {Array.from(assignmentsByFolder.entries()).map(([folderId, folderAssignments]) => {
              const folder = folders.find(f => f.id === folderId)
              return (
                <DroppableFolder
                  key={folderId}
                  id={folderId || ''}
                  name={folder?.name || 'Unknown Folder'}
                  description="Drop assignments here to organize them"
                >
                  <SortableContext
                    items={folderAssignments.map(a => a.id || '')}
                    strategy={verticalListSortingStrategy}
                  >
                    {folderAssignments.map((assignment) => (
                      <SortableAssignmentItem
                        key={assignment.id}
                        assignment={assignment}
                        onDelete={handleDelete}
                      />
                    ))}
                  </SortableContext>
                </DroppableFolder>
              )
            })}

            {/* Empty State */}
            {studentAssignments.length === 0 && (
              <Card className="p-12 text-center">
                <BookOpen className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-xl font-semibold mb-2">No assignments yet</h3>
                <p className="text-gray-600 mb-6">Create your first assignment to get started</p>
                <Button onClick={handleNewAssignment} className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Create First Assignment
                </Button>
              </Card>
            )}
          </div>

          <DragOverlay>
            {activeAssignment ? (
              <div className="border-l-4 border-blue-500 pl-4 py-3 bg-white rounded shadow-lg">
                <h3 className="font-semibold text-lg">{activeAssignment.title}</h3>
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>
      )}
    </div>
  )
}
