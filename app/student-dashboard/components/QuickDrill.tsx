'use client'

import { useMemo, useState } from 'react'
import { collection, doc, setDoc } from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import { db } from '@/lib/firebase'
import { useToast } from '@/hooks/use-toast'
import { practiceQuestionsByDifficulty } from '@/data/practice-questions'
import { mathPracticeQuestionsByDifficulty } from '@/data/math-practice-questions'

type Subject = 'reading-writing' | 'math'
type Difficulty = 'all' | 'easy' | 'medium' | 'hard'

interface QuickDrillProps {
  studentId: string
  studentEmail: string
}

const shuffle = <T,>(items: T[]) => [...items].sort(() => Math.random() - 0.5)

export default function QuickDrill({ studentId, studentEmail }: QuickDrillProps) {
  const router = useRouter()
  const { toast } = useToast()
  const [subject, setSubject] = useState<Subject>('reading-writing')
  const [difficulty, setDifficulty] = useState<Difficulty>('all')
  const [questionCount, setQuestionCount] = useState(10)
  const [creating, setCreating] = useState(false)

  const questions = useMemo(() => {
    const source = subject === 'math' ? mathPracticeQuestionsByDifficulty : practiceQuestionsByDifficulty
    const levels: Array<'easy' | 'medium' | 'hard'> = difficulty === 'all'
      ? ['easy', 'medium', 'hard']
      : [difficulty]
    return levels.flatMap((level) => source[level] || [])
  }, [subject, difficulty])

  const createDrill = async () => {
    if (!db || !studentId || questions.length === 0) return

    setCreating(true)
    try {
      const count = Math.min(questionCount, questions.length)
      const selectedQuestions = shuffle(questions).slice(0, count).map((question, index) => ({
        id: `quick-drill-${Date.now()}-${index}-${question.id}`,
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
        title: `Quick Drill — ${subjectLabel} — ${difficultyLabel}`,
        description: `${count}-question personal quick drill created from the question bank.`,
        studentIds: [studentId],
        studentEmails: studentEmail ? [studentEmail] : [],
        folderId: null,
        dueDate: null,
        assignedDate: new Date(),
        questions: selectedQuestions,
        timeLimitEnabled: false,
        timeLimit: 0,
        completed: false,
        createdBy: studentId,
        source: 'student-quick-drill',
      })

      toast({ title: 'Quick drill ready', description: `${count} questions selected for your practice.` })
      router.push(`/student-dashboard/take-assignment/${assignmentRef.id}`)
    } catch (error) {
      console.error('Error creating quick drill:', error)
      toast({
        title: 'Could not start drill',
        description: 'Please try again.',
        variant: 'destructive',
      })
    } finally {
      setCreating(false)
    }
  }

  return (
    <section className="border-2 border-[#242424] bg-white px-10 py-9 font-sans shadow-none">
      <div className="mb-10">
        <h2 className="text-[30px] font-extrabold leading-none tracking-[-0.03em] text-[#111111]">QUICK DRILL</h2>
        <p className="mt-5 text-[18px] leading-6 text-[#4b5563]">
          Generate a rapid custom practice session using questions across all available dates.
        </p>
      </div>

      <div className="grid gap-x-8 gap-y-7 lg:grid-cols-[1.05fr_1.8fr_1.8fr_1.8fr]">
        <div>
          <label className="mb-3 block text-[16px] font-bold uppercase text-[#374151]">Subject</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setSubject('reading-writing')}
              className={`h-[60px] rounded-lg border-2 text-[18px] font-bold ${subject === 'reading-writing' ? 'border-[#3b55c9] bg-[#3b55c9] text-white' : 'border-[#b7bdc9] bg-white text-[#4b5563]'}`}
            >
              RW
            </button>
            <button
              type="button"
              onClick={() => setSubject('math')}
              className={`h-[60px] rounded-lg border-2 text-[18px] font-bold ${subject === 'math' ? 'border-[#3b55c9] bg-[#3b55c9] text-white' : 'border-[#b7bdc9] bg-white text-[#4b5563]'}`}
            >
              MATH
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="quick-drill-difficulty" className="mb-3 block text-[16px] font-bold uppercase text-[#374151]">Difficulty</label>
          <select
            id="quick-drill-difficulty"
            value={difficulty}
            onChange={(event) => setDifficulty(event.target.value as Difficulty)}
            className="h-[60px] w-full rounded-lg border-2 border-[#242424] bg-white px-4 text-[17px] font-semibold text-[#111111] outline-none focus:border-[#3b55c9]"
          >
            <option value="all">All Modules</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div>
          <label htmlFor="quick-drill-domain" className="mb-3 block text-[16px] font-bold uppercase text-[#374151]">Domain</label>
          <select id="quick-drill-domain" disabled defaultValue="all" className="h-[60px] w-full cursor-not-allowed rounded-lg border-2 border-[#b7bdc9] bg-white px-4 text-[17px] font-semibold text-[#6b7280]">
            <option value="all">All Domains</option>
          </select>
        </div>

        <div>
          <label htmlFor="quick-drill-skill" className="mb-3 block text-[16px] font-bold uppercase text-[#374151]">Skill</label>
          <select id="quick-drill-skill" disabled defaultValue="all" className="h-[60px] w-full cursor-not-allowed rounded-lg border-2 border-[#b7bdc9] bg-white px-4 text-[17px] font-semibold text-[#9ca3af]">
            <option value="all">All Skills</option>
          </select>
        </div>
      </div>

      <div className="mt-8">
        <label className="mb-3 block text-[16px] font-bold uppercase text-[#374151]">Questions</label>
        <div className="flex gap-3">
          {[5, 10, 25].map((count) => (
            <button
              key={count}
              type="button"
              onClick={() => setQuestionCount(count)}
              className={`h-[60px] w-[142px] rounded-lg border-2 text-[18px] font-bold ${questionCount === count ? 'border-[#3b55c9] bg-[#3b55c9] text-white' : 'border-[#b7bdc9] bg-white text-[#4b5563]'}`}
            >
              {count}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-20 flex items-end justify-between gap-6">
        <p className="text-[18px] font-bold text-[#111111]">{questions.length}+ questions available</p>
        <button
          type="button"
          onClick={createDrill}
          disabled={creating || questions.length === 0}
          className="h-[72px] min-w-[312px] rounded-lg bg-[#3b55c9] px-8 text-[18px] font-extrabold text-white transition-colors hover:bg-[#2d43ad] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {creating ? 'CREATING DRILL…' : 'START DRILL'}
        </button>
      </div>
    </section>
  )
}
