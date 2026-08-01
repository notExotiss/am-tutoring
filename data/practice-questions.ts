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
    {
      id: 'rw-easy-1',
      questionText: 'The interiors of many temples in the ancient Middle East needed to satisfy a precise set of acoustic demands: the sounds of chants and hymns should travel with clarity, while profound silences should be fully felt and appreciated. Which quotation from a work by a historian would most directly support the student’s claim?',
      options: [
        'Many researchers believe that the central chamber of the temple had a high ceiling, a feature that has since become essential to the acoustic design of modern concert halls.',
        'The innermost room of the temple was likely among the quietest spaces in the interior of the temple.',
        'The acoustic environment of the temple was best suited for music that eschewed ornamentation in favor of simple melodies, harmonies, and rhythms.',
        'During special occasions, curtains were placed inside the temple to minimize reverberation and confine the sound to designated locations.',
      ],
      correctAnswer: 3,
      section: 'english',
      questionType: 'multiple-choice',
    },
    {
      id: 'rw-easy-2',
      questionText: 'Which finding, if true, would most directly support the researchers’ claim regarding the size of Pacific Coast Feeding Group whales?',
      options: [
        'The average body size of PCFG whales has remained relatively steady in recent decades while the average body size of the main ENP group has slightly decreased.',
        'PCFG whales tend to forage in rocky kelp beds at shallow depths inaccessible to larger whales in the main group.',
        'PCFG whales are in closer proximity to major ports and urban populations than ENP whales in the Arctic are.',
        'Certain crustacean prey species available where PCFG whales feed are not available in Arctic waters.',
      ],
      correctAnswer: 1,
      section: 'english',
      questionType: 'multiple-choice',
    },
    {
      id: 'rw-easy-3',
      questionText: 'Based on the text, which finding, if true, would best account for the discrepancy Etta-Nkwelle observed?',
      options: [
        'Most of the currency held in reserves by African countries was foreign currency, whereas most of the currency held in reserves by Asian countries was domestic currency.',
        'Most African countries belonged to international economic unions that set individual foreign-currency accumulation policies for each member, whereas Asian countries were largely free to set their own policies.',
        'The 1997 financial crisis resulted in immediate declines in many African countries’ foreign-currency reserves, whereas the crisis had few short-term effects on most Asian countries’ reserves.',
        'African countries tended to accumulate a variety of foreign currencies for their reserves, whereas Asian countries tended to favor a single foreign currency.',
      ],
      correctAnswer: 1,
      section: 'english',
      questionType: 'multiple-choice',
    },
  ],
  medium: [
    {
      id: 'rw-medium-1',
      questionText: 'Which quotation would most directly support the student’s claim that the temple’s users deliberately shaped sound quality using material knowledge?',
      options: [
        'The central chamber had a high ceiling that now influences modern concert hall design.',
        'The innermost room of the temple was among the quietest spaces in the interior.',
        'Curtains were placed inside the temple to minimize reverberation and confine the sound to designated locations.',
        'The acoustic environment of the temple was best suited for simple melodies and rhythms.',
      ],
      correctAnswer: 2,
      section: 'english',
      questionType: 'multiple-choice',
    },
    {
      id: 'rw-medium-2',
      questionText: 'Which statement would most directly support the researchers’ hypothesis that the smaller size of PCFG whales is an adaptation to their feeding range?',
      options: [
        'PCFG whales remain relatively stable in size while the main ENP group has slightly decreased in size.',
        'PCFG whales forage in shallow kelp beds that are inaccessible to larger whales.',
        'PCFG whales are closer to ports and urban populations than Arctic-foraging whales are.',
        'The prey species in Northern California are not available in Arctic waters.',
      ],
      correctAnswer: 1,
      section: 'english',
      questionType: 'multiple-choice',
    },
    {
      id: 'rw-medium-3',
      questionText: 'Which answer best explains why Asian countries displayed herding while African countries did not?',
      options: [
        'Asian countries used a single foreign currency in reserves, while African countries used multiple currencies.',
        'African countries belonged to international unions that set policy for them, while Asian countries were freer to set their own policies.',
        'The financial crisis affected African reserves immediately while Asian reserves were mostly unaffected.',
        'African reserves were mostly foreign currency while Asian reserves were mostly domestic currency.',
      ],
      correctAnswer: 1,
      section: 'english',
      questionType: 'multiple-choice',
    },
  ],
  hard: [
    {
      id: 'rw-hard-1',
      questionText: 'The student claims that temple users deliberately applied knowledge of materials to influence sound experience. Which quotation most directly supports that claim?',
      options: [
        'The central chamber of the temple had a high ceiling, a feature that later became essential to modern concert halls.',
        'The innermost room was likely among the quietest spaces in the interior of the temple.',
        'The temple’s acoustic environment was best suited for simple melodies, harmonies, and rhythms.',
        'Curtains were placed inside the temple to minimize reverberation and confine the sound to designated locations.',
      ],
      correctAnswer: 3,
      section: 'english',
      questionType: 'multiple-choice',
    },
    {
      id: 'rw-hard-2',
      questionText: 'Which finding would most directly support the hypothesis that differences in PCFG whale size are an adaptation to resource opportunities in their feeding range?',
      options: [
        'PCFG whales remain stable in size while the main ENP group has slightly decreased in size.',
        'PCFG whales forage in rocky kelp beds at shallow depths inaccessible to whales as large as those in the main ENP group.',
        'PCFG whales are closer to major ports and urban populations than Arctic-feeding ENP whales are.',
        'Prey species in Northern California are not available in the Arctic waters where ENP whales forage.',
      ],
      correctAnswer: 1,
      section: 'english',
      questionType: 'multiple-choice',
    },
    {
      id: 'rw-hard-3',
      questionText: 'Which finding would best explain why Etta-Nkwelle observed herding in Asian countries but not in African countries?',
      options: [
        'African countries held mostly foreign currency in reserves whereas Asian countries held mostly domestic currency.',
        'Most African countries belonged to international economic unions that set individual foreign-currency accumulation policies, whereas Asian countries were mostly free to set their own policies.',
        'The 1997 crisis immediately reduced African reserves but had few short-term effects on Asian reserves.',
        'African countries accumulated a variety of foreign currencies, while Asian countries favored a single foreign currency.',
      ],
      correctAnswer: 1,
      section: 'english',
      questionType: 'multiple-choice',
    },
  ],
}
