'use client'

import { useState, useEffect, useRef } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import { db, auth } from '@/lib/firebase'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { 
  Pause, Play, ArrowLeft, ArrowRight, CheckCircle2, X, 
  ChevronDown, ChevronUp, Bookmark, BookmarkCheck, Highlighter,
  Calculator, FileText, MoreVertical, GripVertical
} from 'lucide-react'
import { format } from 'date-fns'
import 'katex/dist/katex.min.css'
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable'

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
  studentAnswer?: number | string
  crossedOut?: number[] // For English - crossed out options
  highlighted?: { start: number, end: number }[] // For English - highlighted text ranges
  bookmarked?: boolean
}

interface Test {
  id: string
  title: string
  questions: Question[]
  timeLimitEnabled: boolean
  englishModule1Time?: number
  englishModule2Time?: number
  mathModule1Time?: number
  mathModule2Time?: number
  breakTime?: number
}

type TestState = 'not-started' | 'english-m1' | 'english-m2' | 'break' | 'math-m1' | 'math-m2' | 'completed'

export default function TakeTestPage() {
  const params = useParams()
  const router = useRouter()
  const { toast } = useToast()
  const [test, setTest] = useState<Test | null>(null)
  const [loading, setLoading] = useState(true)
  const [testState, setTestState] = useState<TestState>('not-started')
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number | string>>({})
  const [timeRemaining, setTimeRemaining] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [showTimer, setShowTimer] = useState(true)
  const [showDirections, setShowDirections] = useState(false)
  const [showQuestionMenu, setShowQuestionMenu] = useState(false)
  const [highlightMode, setHighlightMode] = useState(false)
  const [showReferenceSheet, setShowReferenceSheet] = useState(false)
  const [showCalculator, setShowCalculator] = useState(false)
  const [showHighlightsNotes, setShowHighlightsNotes] = useState(false)
  const [dividerPosition, setDividerPosition] = useState(50) // Percentage
  const [isDraggingDivider, setIsDraggingDivider] = useState(false)
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState<Set<string>>(new Set())
  const [crossedOutOptions, setCrossedOutOptions] = useState<Record<string, Set<number>>>({})
  const [openEndedAnswers, setOpenEndedAnswers] = useState<Record<string, string>>({})
  const [showMoreMenu, setShowMoreMenu] = useState(false)
  const [studentName, setStudentName] = useState('Student')
  const dividerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    loadTest()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.testId])

  useEffect(() => {
    // Timer runs for active test sections and break
    if (testState !== 'not-started' && testState !== 'completed' && !isPaused && timeRemaining > 0) {
      const interval = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            if (testState === 'break') {
              // Break time is up, allow continuing
              return 0
            } else {
              // Test section time is up
              handleTimeUp()
              return 0
            }
          }
          return prev - 1
        })
      }, 1000)

      return () => clearInterval(interval)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [testState, isPaused, timeRemaining])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDraggingDivider && dividerRef.current) {
        const container = dividerRef.current.parentElement
        if (container) {
          const rect = container.getBoundingClientRect()
          const newPosition = ((e.clientX - rect.left) / rect.width) * 100
          setDividerPosition(Math.max(20, Math.min(80, newPosition)))
        }
      }
    }

    const handleMouseUp = () => {
      setIsDraggingDivider(false)
    }

    if (isDraggingDivider) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDraggingDivider])

  const loadTest = async () => {
    if (!db || !params.testId) return

    try {
      const testDoc = await getDoc(doc(db, 'tests', params.testId as string))
      if (testDoc.exists()) {
        const data = testDoc.data()
        setTest({
          id: testDoc.id,
          title: data.title || '',
          questions: data.questions || [],
          timeLimitEnabled: data.timeLimitEnabled !== false,
          englishModule1Time: data.englishModule1Time || 32,
          englishModule2Time: data.englishModule2Time || 32,
          mathModule1Time: data.mathModule1Time || 35,
          mathModule2Time: data.mathModule2Time || 35,
          breakTime: data.breakTime || 10,
        })
      }
    } catch (error) {
      console.error('Error loading test:', error)
      toast({
        title: 'Error',
        description: 'Failed to load test.',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  const getCurrentQuestions = () => {
    if (!test) return []
    switch (testState) {
      case 'english-m1':
        return test.questions.filter(q => q.section === 'english' && q.module === 1)
      case 'english-m2':
        return test.questions.filter(q => q.section === 'english' && q.module === 2)
      case 'math-m1':
        return test.questions.filter(q => q.section === 'math' && q.module === 1)
      case 'math-m2':
        return test.questions.filter(q => q.section === 'math' && q.module === 2)
      default:
        return []
    }
  }

  const getTimeLimit = () => {
    if (!test || !test.timeLimitEnabled) return null
    switch (testState) {
      case 'english-m1':
        return test.englishModule1Time || 32
      case 'english-m2':
        return test.englishModule2Time || 32
      case 'math-m1':
        return test.mathModule1Time || 35
      case 'math-m2':
        return test.mathModule2Time || 35
      default:
        return null
    }
  }

  const startTest = () => {
    // Set state and timer together - don't rely on async state update
    const newState: TestState = 'english-m1'
    setTestState(newState)
    if (test?.timeLimitEnabled && test.englishModule1Time) {
      setTimeRemaining(test.englishModule1Time * 60)
    }
  }

  const handlePause = () => {
    setIsPaused(!isPaused)
  }

  const handleTimeUp = () => {
    toast({
      title: 'Time Up',
      description: 'Time has run out for this section.',
      variant: 'destructive',
    })
    handleNextSection()
  }

  const handleNextSection = () => {
    switch (testState) {
      case 'english-m1':
        setTestState('english-m2')
        const m2Time = test?.englishModule2Time || 32
        if (test?.timeLimitEnabled) setTimeRemaining(m2Time * 60)
        setCurrentQuestionIndex(0)
        setIsPaused(false)
        break
      case 'english-m2':
        setTestState('break')
        if (test?.timeLimitEnabled) setTimeRemaining((test.breakTime || 10) * 60)
        setIsPaused(false)
        break
      case 'break':
        setTestState('math-m1')
        const mathM1Time = test?.mathModule1Time || 35
        if (test?.timeLimitEnabled) setTimeRemaining(mathM1Time * 60)
        setCurrentQuestionIndex(0)
        setIsPaused(false)
        break
      case 'math-m1':
        setTestState('math-m2')
        const mathM2Time = test?.mathModule2Time || 35
        if (test?.timeLimitEnabled) setTimeRemaining(mathM2Time * 60)
        setCurrentQuestionIndex(0)
        setIsPaused(false)
        break
      case 'math-m2':
        handleSubmitTest()
        break
    }
  }

  const handleSubmitTest = async () => {
    if (!test || !db) return

    try {
      let correct = 0
      let total = test.questions.length
      test.questions.forEach(question => {
        if (question.questionType === 'open-ended') {
          // For open-ended, we'd need to check manually
        } else {
          if (answers[question.id] === question.correctAnswer) {
            correct++
          }
        }
      })

      const score = `${correct}/${total} (${Math.round((correct / total) * 100)}%)`

      await updateDoc(doc(db, 'tests', test.id), {
        completed: true,
        completedDate: new Date(),
        score: score,
        answers: answers,
        openEndedAnswers: openEndedAnswers,
      } as any)

      setTestState('completed')
      toast({
        title: 'Test Submitted',
        description: `Your score: ${score}`,
      })
    } catch (error) {
      console.error('Error submitting test:', error)
      toast({
        title: 'Error',
        description: 'Failed to submit test.',
        variant: 'destructive',
      })
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const toggleBookmark = (questionId: string) => {
    setBookmarkedQuestions(prev => {
      const newSet = new Set(prev)
      if (newSet.has(questionId)) {
        newSet.delete(questionId)
      } else {
        newSet.add(questionId)
      }
      return newSet
    })
  }

  const toggleCrossOut = (questionId: string, optionIndex: number) => {
    setCrossedOutOptions(prev => {
      const newMap = { ...prev }
      if (!newMap[questionId]) {
        newMap[questionId] = new Set()
      }
      const optionSet = new Set(newMap[questionId])
      if (optionSet.has(optionIndex)) {
        optionSet.delete(optionIndex)
      } else {
        optionSet.add(optionIndex)
      }
      newMap[questionId] = optionSet
      return newMap
    })
  }

  // Get student name from auth
  useEffect(() => {
    if (!auth) return
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user?.displayName) {
        setStudentName(user.displayName)
      } else if (user?.email) {
        const emailParts = user.email.split('@')[0].split(/[._-]/)
        const formattedName = emailParts.map((part: string) => 
          part.charAt(0).toUpperCase() + part.slice(1)
        ).join(' ')
        setStudentName(formattedName || 'Student')
      }
    })
    
    return () => unsubscribe()
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showMoreMenu && !(event.target as Element).closest('.more-menu-container')) {
        setShowMoreMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showMoreMenu])

  const currentQuestions = getCurrentQuestions()
  const currentQuestion = currentQuestions[currentQuestionIndex]
  const isEnglish = testState === 'english-m1' || testState === 'english-m2'
  const isMath = testState === 'math-m1' || testState === 'math-m2'
  const isOpenEnded = currentQuestion?.questionType === 'open-ended'

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-xl">Loading test...</div>
      </div>
    )
  }

  if (!test) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Test not found.</p>
          <Button onClick={() => router.push('/student-dashboard')}>
            Back to Dashboard
          </Button>
        </div>
      </div>
    )
  }

  if (testState === 'not-started') {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold mb-4">{test.title}</h1>
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Test Structure:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>English Module 1: 27 questions {test.timeLimitEnabled && `(${test.englishModule1Time} minutes)`}</li>
                <li>English Module 2: 27 questions {test.timeLimitEnabled && `(${test.englishModule2Time} minutes)`}</li>
                <li>Break: {test.breakTime || 10} minutes</li>
                  <li>Math Module 1: 22 questions {test.timeLimitEnabled && `(${test.mathModule1Time} minutes)`}</li>
                  <li>Math Module 2: 22 questions {test.timeLimitEnabled && `(${test.mathModule2Time} minutes)`}</li>
              </ul>
            </div>
            <div className="flex gap-4">
              <Button onClick={startTest} className="bg-blue-600 hover:bg-blue-700">
                Start Test
              </Button>
              <Button variant="outline" onClick={() => router.push('/student-dashboard')}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (testState === 'break') {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        {/* Header */}
        <header className="bg-[#1a1f3a] text-white px-6 py-3">
          <h2 className="text-sm font-semibold">Break</h2>
        </header>
        
        {/* Break Content */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="max-w-2xl w-full text-center">
            <h1 className="text-3xl font-bold mb-4 text-gray-900">Break Time</h1>
            <p className="text-lg mb-6 text-gray-600">
              Take a {test.breakTime || 10} minute break before starting the Math section.
            </p>
            {test.timeLimitEnabled && (
              <div className="text-2xl font-bold text-blue-600 mb-6">
                Time Remaining: {formatTime(timeRemaining)}
              </div>
            )}
            <Button 
              onClick={handleNextSection} 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              disabled={test.timeLimitEnabled && timeRemaining > 0}
            >
              Start Math Section
            </Button>
            {test.timeLimitEnabled && timeRemaining > 0 && (
              <p className="text-sm text-gray-500 mt-4">
                Please wait for the break to finish before continuing.
              </p>
            )}
          </div>
        </div>
      </div>
    )
  }

  if (testState === 'completed') {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
              <h1 className="text-3xl font-bold">Test Completed</h1>
            </div>
            <p className="text-lg mb-6">You have successfully completed the test!</p>
            <Button onClick={() => router.push('/student-dashboard')} className="bg-blue-600 hover:bg-blue-700">
              Back to Dashboard
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Header - Bluebook Style - EXACT MATCH */}
      <header className="bg-[#1a1f3a] text-white px-6 py-3 flex items-center justify-between" style={{ backgroundColor: '#1a1f3a' }}>
        {/* Left: Section Title */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="text-sm font-semibold leading-tight">
              {isEnglish ? 'Section 1: Reading and Writing' : 'Section 2: Math'}
            </h2>
            <button
              onClick={() => setShowDirections(!showDirections)}
              className="text-xs text-blue-300 hover:text-blue-200 flex items-center gap-1 mt-0.5"
            >
              Directions {showDirections ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
          </div>
        </div>
        
        {/* Center: Timer */}
        <div className="flex-1 flex justify-center">
          {test.timeLimitEnabled && showTimer && (
            <div className="text-center">
              <h1 className="text-2xl font-bold leading-tight">{formatTime(timeRemaining)}</h1>
              <button
                onClick={() => setShowTimer(false)}
                className="text-xs text-blue-300 hover:text-blue-200 mt-0.5"
              >
                Hide
              </button>
            </div>
          )}
          {!showTimer && test.timeLimitEnabled && (
            <button
              onClick={() => setShowTimer(true)}
              className="text-xs text-blue-300 hover:text-blue-200 px-2 py-1 border border-blue-300 rounded"
            >
              Show Timer
            </button>
          )}
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-3">
          {isEnglish && (
            <button
              onClick={() => setHighlightMode(!highlightMode)}
              className={`p-2 rounded ${highlightMode ? 'bg-blue-600' : 'hover:bg-blue-800'}`}
              title="Highlights & Notes"
            >
              <Highlighter className="w-5 h-5" />
            </button>
          )}
          
          {isMath && (
            <>
              <button
                onClick={() => setShowCalculator(!showCalculator)}
                className={`p-2 rounded ${showCalculator ? 'bg-blue-600' : 'hover:bg-blue-800'}`}
                title="Calculator"
              >
                <Calculator className="w-5 h-5" />
              </button>
              <button
                onClick={() => setShowReferenceSheet(!showReferenceSheet)}
                className={`p-2 rounded ${showReferenceSheet ? 'bg-blue-600' : 'hover:bg-blue-800'}`}
                title="Reference"
              >
                <FileText className="w-5 h-5" />
              </button>
            </>
          )}
          
          {/* Three Dots Menu */}
          <div className="relative more-menu-container">
            <button 
              onClick={() => setShowMoreMenu(!showMoreMenu)}
              className="p-2 rounded hover:bg-blue-800"
              title="More"
            >
              <MoreVertical className="w-5 h-5" />
            </button>
            {showMoreMenu && (
              <div className="absolute right-0 top-full mt-2 bg-white border border-gray-300 rounded-lg shadow-xl z-50 min-w-[200px]">
                <div className="py-1">
                  <button
                    onClick={() => {
                      setShowHighlightsNotes(!showHighlightsNotes)
                      setShowMoreMenu(false)
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Highlights & Notes
                  </button>
                  <button
                    onClick={() => {
                      handlePause()
                      setShowMoreMenu(false)
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {isPaused ? 'Resume' : 'Pause'}
                  </button>
                  <button
                    onClick={() => {
                      if (confirm('Are you sure you want to exit? Your progress will be saved.')) {
                        router.push('/student-dashboard')
                      }
                      setShowMoreMenu(false)
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Exit Test
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Directions Dropdown */}
      {showDirections && (
        <div className="bg-gray-100 border-b px-6 py-4">
          <div className="max-w-4xl mx-auto text-sm text-gray-700">
            {isEnglish ? (
              <div>
                <p className="mb-2">Each passage or pair of passages below is followed by a number of questions. After reading each passage or pair, choose the best answer to each question based on what is stated or implied in the passage or passages and in any accompanying graphics (such as a table or graph).</p>
                <p>Questions provide four answer choices. Select the best answer for each question.</p>
              </div>
            ) : (
              <div>
                <p className="mb-2">For questions 1-27, solve each problem, choose the best answer from the choices provided, and fill in the corresponding circle on your answer sheet. For questions 28-32, solve the problem and enter your answer in the grid on the answer sheet.</p>
                <p>You may use a calculator on all questions in this section.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Reading Passage (English only) or Instructions (Math open-ended) */}
        {isEnglish && currentQuestion?.readingPassage && (
          <>
            <div 
              className="overflow-y-auto p-6 border-r"
              style={{ width: `${dividerPosition}%` }}
            >
              <div 
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: currentQuestion.readingPassage }}
                style={{ 
                  userSelect: highlightMode ? 'text' : 'auto',
                  cursor: highlightMode ? 'text' : 'default'
                }}
              />
            </div>
            
            {/* Resizable Divider */}
            <div
              ref={dividerRef}
              className="w-1 bg-gray-300 cursor-col-resize hover:bg-gray-400 relative group"
              onMouseDown={() => setIsDraggingDivider(true)}
            >
              <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 flex items-center">
                <GripVertical className="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100" />
              </div>
            </div>
          </>
        )}

        {isMath && isOpenEnded && (
          <div className="w-80 overflow-y-auto p-6 border-r bg-gray-50">
            <h3 className="font-semibold mb-4">Student-produced response directions</h3>
            <ul className="text-sm space-y-2 mb-6">
              <li>• If you find more than one correct answer, enter only one of them.</li>
              <li>• Positive answers can be up to 5 characters; negative answers can be up to 6 characters (including the negative sign).</li>
              <li>• If your answer is a fraction that doesn&apos;t fit in the provided space, enter the decimal equivalent.</li>
              <li>• If your answer is a decimal, truncate or round at the fourth digit.</li>
              <li>• If your answer is a mixed number (such as 3 1/2), enter it as an improper fraction (7/2) or its decimal equivalent (3.5).</li>
              <li>• Do not enter symbols such as a percent sign or comma.</li>
            </ul>
            
            <div className="text-sm">
              <p className="font-semibold mb-2">Examples:</p>
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Answer</th>
                    <th className="text-left p-2">Acceptable</th>
                    <th className="text-left p-2">Unacceptable</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">3.5</td>
                    <td className="p-2">3.5, 3.50, 7/2</td>
                    <td className="p-2">3 1/2</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">2/3</td>
                    <td className="p-2">2/3, .6666, .6667, 0.666, 0.667</td>
                    <td className="p-2">0.66, .66, 0.67, .67</td>
                  </tr>
                  <tr>
                    <td className="p-2">-1/3</td>
                    <td className="p-2">-1/3, -.3333, -0.333</td>
                    <td className="p-2">-.33, -0.33</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Question Area */}
        <div 
          className="flex-1 overflow-y-auto p-6"
          style={isEnglish && currentQuestion?.readingPassage ? {} : { width: '100%' }}
        >
          {!currentQuestion ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No questions available for this section.</p>
            </div>
          ) : currentQuestion && (
            <div>
              {/* Question Header - Bluebook Style */}
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-black text-white w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {currentQuestionIndex + 1}
                </div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 cursor-pointer"
                  />
                  <span className="text-sm">Mark for Review</span>
                </label>
                <button
                  onClick={() => toggleBookmark(currentQuestion.id)}
                  className="p-1 hover:bg-gray-100 rounded ml-auto"
                  title="Bookmark"
                >
                  {bookmarkedQuestions.has(currentQuestion.id) ? (
                    <BookmarkCheck className="w-5 h-5 text-blue-600 fill-blue-600" />
                  ) : (
                    <Bookmark className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {isEnglish && (
                  <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 text-sm font-semibold">
                    ABC
                  </button>
                )}
              </div>

              {/* Question Text */}
              <div
                className="prose max-w-none mb-6"
                dangerouslySetInnerHTML={{ __html: currentQuestion.questionText }}
              />

              {/* Question Image */}
              {currentQuestion.questionImage && (
                <div className="mb-6">
                  <img
                    src={currentQuestion.questionImage}
                    alt="Question"
                    className="max-w-full h-auto rounded"
                  />
                </div>
              )}

              {/* Answer Options (Multiple Choice) */}
              {!isOpenEnded && (
                <div className="space-y-2">
                  {currentQuestion.options.map((option, index) => {
                    const isCrossedOut = crossedOutOptions[currentQuestion.id]?.has(index)
                    return (
                      <label
                        key={index}
                        className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-colors relative ${
                          answers[currentQuestion.id] === index
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        } ${isCrossedOut ? 'opacity-50' : ''}`}
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                            answers[currentQuestion.id] === index
                              ? 'border-blue-600 bg-blue-600'
                              : 'border-gray-400'
                          }`}>
                            {answers[currentQuestion.id] === index && (
                              <div className="w-3 h-3 rounded-full bg-white"></div>
                            )}
                          </div>
                          <input
                            type="radio"
                            name={`question-${currentQuestion.id}`}
                            checked={answers[currentQuestion.id] === index}
                            onChange={() => setAnswers({ ...answers, [currentQuestion.id]: index })}
                            className="sr-only"
                          />
                          <span className="font-semibold w-8 text-lg flex-shrink-0">{String.fromCharCode(65 + index)}</span>
                          <span className={`flex-1 ${isCrossedOut ? 'line-through' : ''}`}>{option}</span>
                        </div>
                        {isEnglish && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              e.preventDefault()
                              toggleCrossOut(currentQuestion.id, index)
                            }}
                            className="p-2 hover:bg-gray-200 rounded text-gray-500 ml-2 flex-shrink-0"
                            title="Cross out option"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        )}
                      </label>
                    )
                  })}
                </div>
              )}

              {/* Open-Ended Answer Input */}
              {isOpenEnded && (
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      value={openEndedAnswers[currentQuestion.id] || ''}
                      onChange={(e) => setOpenEndedAnswers({
                        ...openEndedAnswers,
                        [currentQuestion.id]: e.target.value
                      })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-lg focus:border-blue-600 focus:outline-none"
                      placeholder="Enter your answer"
                      maxLength={6}
                    />
                  </div>
                  <div className="text-sm text-gray-600">
                    <p className="font-semibold mb-1">Answer Preview:</p>
                    <p className="font-mono text-lg">{openEndedAnswers[currentQuestion.id] || '(empty)'}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Footer - Bluebook Style - EXACT MATCH */}
      <footer className="bg-[#e6f2ff] text-gray-900 px-6 py-3 flex items-center justify-between border-t border-gray-300" style={{ backgroundColor: '#e6f2ff' }}>
        {/* Left: Student Name */}
        <div className="text-sm font-medium">{studentName}</div>
        
        {/* Center: Question Navigation */}
        <div className="flex-1 flex justify-center">
          <button
            onClick={() => setShowQuestionMenu(!showQuestionMenu)}
            className="flex items-center gap-2 hover:bg-blue-100 px-3 py-1 rounded"
          >
            <span className="text-sm">Question <span className="font-semibold">{currentQuestionIndex + 1}</span> of {currentQuestions.length}</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>

        {/* Right: Navigation Buttons */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
            disabled={currentQuestionIndex === 0}
            className="text-gray-900 hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button
            onClick={() => {
              if (currentQuestionIndex < currentQuestions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1)
              } else {
                handleNextSection()
              }
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            {currentQuestionIndex < currentQuestions.length - 1 ? (
              <>
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            ) : (
              'Next Section'
            )}
          </Button>
        </div>
      </footer>

      {/* Question Navigation Menu - Bluebook Style */}
      {showQuestionMenu && (
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-white border-2 border-gray-300 rounded-lg shadow-xl p-6 z-50 max-w-4xl w-[90%]">
          <div className="mb-4 text-sm font-semibold text-gray-700">Select a question:</div>
          <div className="grid grid-cols-10 gap-2">
            {currentQuestions.map((q, index) => {
              const hasAnswer = answers[q.id] !== undefined || openEndedAnswers[q.id]
              const isBookmarked = bookmarkedQuestions.has(q.id)
              const isCurrent = index === currentQuestionIndex
              
              return (
                <button
                  key={q.id}
                  onClick={() => {
                    setCurrentQuestionIndex(index)
                    setShowQuestionMenu(false)
                  }}
                  className={`w-10 h-10 rounded border-2 flex items-center justify-center font-semibold text-sm transition-colors ${
                    isCurrent
                      ? 'border-blue-600 bg-blue-50 text-blue-600'
                      : hasAnswer
                      ? 'border-green-500 bg-green-50 text-green-600'
                      : isBookmarked
                      ? 'border-yellow-500 bg-yellow-50 text-yellow-600'
                      : 'border-gray-300 hover:border-gray-400 bg-white'
                  }`}
                  title={`Question ${index + 1}${isBookmarked ? ' (Bookmarked)' : ''}${hasAnswer ? ' (Answered)' : ''}`}
                >
                  {index + 1}
                </button>
              )
            })}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 flex items-center gap-4 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-blue-600 bg-blue-50 rounded"></div>
              <span>Current</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-green-500 bg-green-50 rounded"></div>
              <span>Answered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-yellow-500 bg-yellow-50 rounded"></div>
              <span>Bookmarked</span>
            </div>
          </div>
        </div>
      )}

      {/* Reference Sheet Popup */}
      {showReferenceSheet && (
        <Draggable handle=".drag-handle" bounds="parent">
          <div className="fixed top-20 right-20 bg-white border-2 border-gray-300 rounded-lg shadow-2xl z-50 w-96 max-h-[80vh] overflow-hidden flex flex-col">
            <div className="bg-gray-100 px-4 py-2 flex items-center justify-between drag-handle cursor-move border-b">
              <span className="font-semibold text-sm">REFERENCE</span>
              <button
                onClick={() => setShowReferenceSheet(false)}
                className="p-1 hover:bg-gray-200 rounded"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="overflow-y-auto p-4">
              <img
                src="/referencesheet.jpg"
                alt="Reference Sheet"
                className="w-full h-auto"
              />
            </div>
          </div>
        </Draggable>
      )}

      {/* Calculator Popup (Desmos) */}
      {showCalculator && (
        <Draggable handle=".drag-handle" bounds="parent">
          <div className="fixed top-20 right-20 bg-white border-2 border-gray-300 rounded-lg shadow-2xl z-50 w-[600px] h-[500px] flex flex-col">
            <div className="bg-gray-100 px-4 py-2 flex items-center justify-between drag-handle cursor-move border-b">
              <span className="font-semibold text-sm">Calculator</span>
              <button
                onClick={() => setShowCalculator(false)}
                className="p-1 hover:bg-gray-200 rounded"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1 min-h-0">
              <iframe
                src="https://www.desmos.com/testing/cb-sat-ap/graphing"
                className="w-full h-full border-0"
                title="Desmos Calculator"
                allow="clipboard-read; clipboard-write"
              />
            </div>
          </div>
        </Draggable>
      )}
    </div>
  )
}
