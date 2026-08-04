'use client'

import { useMemo, useState } from 'react'
import { collection, doc, getDocs, setDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { useToast } from '@/hooks/use-toast'
import { practiceQuestionsByDifficulty } from '@/data/practice-questions'
import { mathPracticeQuestionsByDifficulty } from '@/data/math-practice-questions'

type Subject = 'reading-writing' | 'math'
type Difficulty = 'all' | 'easy' | 'medium' | 'hard'

interface BankQuestion {
  id: string
  questionText: string
  options: string[]
  correctAnswer: number | string
  section: 'english' | 'math'
  questionType: 'multiple-choice' | 'open-ended'
  difficulty: Exclude<Difficulty, 'all'>
}

const shuffle = <T,>(items: T[]) => [...items].sort(() => Math.random() - 0.5)

export default function QuestionBank() {
  const [subject, setSubject] = useState<Subject>('reading-writing')
  const [difficulty, setDifficulty] = useState<Difficulty>('all')
  const [questionCount, setQuestionCount] = useState('10')
  const [search, setSearch] = useState('')
  const [creating, setCreating] = useState(false)
  const { toast } = useToast()

  const questions = useMemo<BankQuestion[]>(() => {
    const source = subject === 'math' ? mathPracticeQuestionsByDifficulty : practiceQuestionsByDifficulty
    const difficulties = difficulty === 'all' ? ['easy', 'medium', 'hard'] : [difficulty]
    return difficulties.flatMap((level) => (source[level as keyof typeof source] || []).map((question) => ({
      ...question,
      difficulty: level as Exclude<Difficulty, 'all'>,
    })))
      .filter((question) => question.questionText.toLowerCase().includes(search.toLowerCase()))
  }, [subject, difficulty, search])

  const createDrill = async () => {
    if (!db) return
    const count = Math.max(1, Math.min(Number(questionCount) || 1, questions.length))
    if (questions.length === 0) {
      toast({ title: 'No questions found', description: 'Adjust the filters and try again.', variant: 'destructive' })
      return
    }

    setCreating(true)
    try {
      const studentsSnapshot = await getDocs(collection(db, 'students'))
      const students = studentsSnapshot.docs.map((student) => ({
        id: student.id,
        email: student.data().email || '',
      }))
      const selectedQuestions = shuffle(questions).slice(0, count).map((question, index) => ({
        id: `drill-${Date.now()}-${index}-${question.id}`,
        questionText: question.questionText,
        options: question.options,
        correctAnswer: question.correctAnswer,
        section: question.section,
        questionType: question.questionType,
      }))
      const subjectLabel = subject === 'math' ? 'Math' : 'Reading & Writing'
      const difficultyLabel = difficulty === 'all' ? 'Mixed' : difficulty.charAt(0).toUpperCase() + difficulty.slice(1)
      const assignmentRef = doc(collection(db, 'assignments'))
      await setDoc(assignmentRef, {
        title: `${subjectLabel} Custom Drill - ${difficultyLabel}`,
        description: `${count}-question custom drill from the question bank.`,
        studentIds: students.map((student) => student.id),
        studentEmails: students.map((student) => student.email).filter(Boolean),
        folderId: null,
        dueDate: null,
        assignedDate: new Date(),
        questions: selectedQuestions,
        timeLimitEnabled: false,
        timeLimit: 0,
        completed: false,
      })
      toast({ title: 'Drill created', description: `${count} questions assigned to all students.` })
    } catch (error) {
      console.error('Error creating drill:', error)
      toast({ title: 'Could not create drill', description: 'Please try again.', variant: 'destructive' })
    } finally {
      setCreating(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Question Bank</h2>
        <p className="text-gray-600 text-sm">Filter the SAT bank and create a drill with an exact question count.</p>
      </div>

      <div className="border border-gray-300 rounded-xl bg-white p-5 shadow-sm space-y-5">
        <div className="grid gap-4 md:grid-cols-4">
          <label className="text-sm font-semibold">Subject
            <select value={subject} onChange={(event) => setSubject(event.target.value as Subject)} className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2">
              <option value="reading-writing">Reading &amp; Writing</option>
              <option value="math">Math</option>
            </select>
          </label>
          <label className="text-sm font-semibold">Difficulty
            <select value={difficulty} onChange={(event) => setDifficulty(event.target.value as Difficulty)} className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2">
              <option value="all">All difficulties</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </label>
          <label className="text-sm font-semibold">Questions in drill
            <input type="number" min="1" max={Math.max(1, questions.length)} value={questionCount} onChange={(event) => setQuestionCount(event.target.value)} className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2" />
          </label>
          <label className="text-sm font-semibold">Search
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search question text" className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2" />
          </label>
        </div>

        <div className="flex items-center justify-between border-t pt-4">
          <div className="text-sm text-gray-600"><strong className="text-gray-900">{questions.length}</strong> questions match these filters</div>
          <button onClick={createDrill} disabled={creating || questions.length === 0} className="rounded-lg bg-[#314dcc] px-5 py-2.5 font-semibold text-white hover:bg-[#263da7] disabled:cursor-not-allowed disabled:opacity-50">
            {creating ? 'Creating…' : 'Create Drill'}
          </button>
        </div>
      </div>

      <div className="grid gap-3">
        {questions.slice(0, 12).map((question, index) => (
          <div key={question.id} className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
              <span>{index + 1}</span><span>{question.difficulty}</span><span>{question.questionType === 'open-ended' ? 'Student-produced response' : 'Multiple choice'}</span>
            </div>
            <p className="line-clamp-3 text-sm text-gray-800">{question.questionText}</p>
          </div>
        ))}
        {questions.length > 12 && <p className="text-center text-sm text-gray-500">Showing the first 12 matching questions.</p>}
      </div>
    </div>
  )
}

