export interface PracticeQuestion {
  id: string
  questionText: string
  options: string[]
  correctAnswer: number
  section: 'english' | 'math'
  questionType: 'multiple-choice' | 'open-ended'
}

export const practiceQuestionsByDifficulty: Record<'easy' | 'medium' | 'hard', PracticeQuestion[]> = {
  easy: [
  ],
  medium: [
  ],
  hard: [
  ],
}
