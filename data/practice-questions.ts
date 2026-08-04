export interface PracticeQuestion {
  id: string
  questionText: string
  options: string[]
  correctAnswer: number
  section: 'english' | 'math'
  questionType: 'multiple-choice' | 'open-ended'
}

export const practiceQuestionsByDifficulty: Record<'easy' | 'medium' | 'hard', PracticeQuestion[]> = {
  "easy": [
    {
      "id": "rw-easy-1",
      "questionText": "Four Studies of Food Choices in Various Contexts Location Food choices related to... Study population Number of participants Canada sports adults 17 United States school children 44 India community adolescents and adults 94 Ghana and Kenya food shops adolescents 142 The table shows information from four studies about food choices people make in different contexts. According to the table, the study with the smallest number of participants involved only adults, and the study with the greatest number of participants involved ______ Which choice most effectively uses data from the table to complete the text?",
      "options": [
        "only children.",
        "both adolescents and adults.",
        "only adolescents.",
        "only adults."
      ],
      "correctAnswer": 2,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-easy-2",
      "questionText": "Stores often play background music to create a pleasant shopping experience. Based on a survey, Amir Manzoor found that such music was linked to reduced enjoyment among customers. Manzoor thinks that one explanation for this result is that the surveyed customers may have wanted to finish their shopping as quickly as possible. They therefore weren’t focused on enjoying the experience. It’s possible that background music could improve the experience of other customers whose main goal is to have a good time while they shop. Based on the text, which research question was Manzoor’s study most likely intended to answer?",
      "options": [
        "Does the volume of a store’s background music affect how much time customers spend in the store?",
        "How does the use of background music in stores affect customers’ shopping experience?",
        "Do customers spend more money when shopping for music in stores or online?",
        "What genres of music do customers prefer to listen to while they are shopping?"
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-easy-3",
      "questionText": "100 80 60 40 20 0 )%( sgnitar ’stnednopseR Percent of UK Survey Respondents Who Trust People At Least Somewhat 2005 2018 2022 Year of study meet for the first time know personally Social scientists distinguish two different categories of social trust: bonding trust and bridging trust. Bonding trust refers to trust within already existing relationships (e.g., within a family), whereas bridging trust refers to trust between different groups, often involving interactions beyond one’s immediate social circle (e.g., meeting someone at a networking event). In order to evaluate these two aspects of social trust in the United Kingdom, researchers asked participants in 2005, 2018, and 2022 to rate the level of trust they felt for people they know personally and for people they are meeting for the first time. After analyzing the data from the survey responses, the researchers concluded that the level of bonding trust in the UK ______ Which choice most effectively uses data from the graph to complete the statement?",
      "options": [
        "remained largely consistent from 2005 to 2022, whereas the level of bridging trust showed more variability from 2005 to 2022.",
        "consistently grew from 2005 to 2022, whereas the level of bridging trust largely declined from 2005 to 2022.",
        "was the same in 2018 as it was in 2022 but remained lower than the level of bridging trust in 2018 and 2022.",
        "declined from 2005 to 2022 but remained higher than the level of bridging trust from 2005 to 2018."
      ],
      "correctAnswer": 0,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-easy-4",
      "questionText": "Individuals with visual impairments who want to experience a solar eclipse may be able to make use of a device that converts light into sound. The device is made up of a microcontroller board and a light sensor that measures the brightness of light shining onto the device. It also has a component called a MIDI, which allows the device to play different sounds. The device plays a high-pitched flute sound in bright light, a neutral- pitched clarinet sound in mid-range light, and a soft clicking sound in low light. After a solar eclipse starts, the sun becomes more covered and the amount of light slowly reduces. Therefore, during a solar eclipse the device will ______ Which choice most logically completes the text?",
      "options": [
        "play a flute sound, then a clarinet sound, and then a clicking sound.",
        "play a clicking sound, then a flute sound, and then a clarinet sound.",
        "start with fast clarinet sounds that become steadily slower.",
        "start with a soft flute sound that becomes steadily louder."
      ],
      "correctAnswer": 0,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-easy-5",
      "questionText": "“Banking Coal” is a 1922 poem by Jean Toomer. The poem describes a fire being lit and maintained. In the poem, the speaker praises the person who built the fire: ______ Which quotation from “Banking Coal” most effectively illustrates the claim?",
      "options": [
        "“I’ve seen them set to work, each in his way, / Though all with shovels and with ashes.”",
        "“Whoever it was who brought the first wood and coal / To start the Fire, did his part well.”",
        "“Sometimes the fire left alone / Would die...”",
        "“Whereupon they’d crawl in hooded night-caps / Contentedly to bed.”"
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-easy-6",
      "questionText": "Zygomorphic (bilaterally symmetric) flowers remain open and functional on average 1.1 days longer than actinomorphic (radially symmetric) flowers do. Ruby E. Stephens and colleagues claim that this extended period could be ______ the relatively small pool of potential pollinators available to zygomorphic flowers and the greater chance at successful pollination that remaining open affords them. Which choice completes the text with the most logical and precise word or phrase?",
      "options": [
        "analogous to",
        "converted by",
        "attributed to",
        "magnified by"
      ],
      "correctAnswer": 2,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-easy-7",
      "questionText": "Bing Xie and her team have discovered that plains zebras make at least four types of vocalizations: “snorts,” “soft snorts,” “squeals,” and “quagga quagga” calls. The researchers used machine-learning algorithms to ______ recorded vocalizations according to type, finding that snorts vary across individual zebras, while squeals are more uniform across zebra populations. Which choice completes the text with the most logical and precise word or phrase?",
      "options": [
        "categorize",
        "extend",
        "collapse",
        "suppress"
      ],
      "correctAnswer": 0,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-easy-8",
      "questionText": "Researchers studying how consumers develop their attitudes toward brands have found that the shapes of the logos used to present brand names are ______. Brand names presented using rounded logos, for example, were found to lead consumers to view brands as significantly more approachable than the same names did when presented using angular logos. Which choice completes the text with the most logical and precise phrase?",
      "options": [
        "a contributing factor",
        "an analogous case",
        "an overlooked effect",
        "a surprising paradox"
      ],
      "correctAnswer": 0,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-easy-9",
      "questionText": "Understanding juvenile sea turtles’ migratory patterns is crucial for conservation efforts. While adult sea turtles are well studied, little is known about juveniles during their oceanic stage, when they spend most of their time in the open ocean. To learn about this stage, researchers tagged and released six juvenile green sea turtles (Chelonia mydas) into the eastern Caribbean Sea. Their findings revealed that the majority of the turtles passively drifted with ocean currents throughout the region. However, two individuals swam against the currents, possibly in search of foraging grounds off the coast of South America. Which choice best states the main purpose of the text?",
      "options": [
        "To describe successful conservation efforts for sea turtles",
        "To summarize research on an understudied stage of sea turtle development",
        "To compare the behavior of adult and juvenile sea turtles during migration",
        "To suggest reasons why some juvenile sea turtles swim against the ocean currents"
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-easy-10",
      "questionText": "In 1845, the United States District Court for the state of Iowa was established. Initially, the court’s jurisdiction was a single district that encompassed the entire state, but as Iowa’s population grew, this single district began to struggle to serve the needs of everyone in the state. ______ the court’s jurisdiction was subdivided into two districts, each with its own district court. Which choice completes the text with the most logical transition?",
      "options": [
        "Nevertheless,",
        "Ultimately,",
        "Additionally,",
        "For example,"
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-easy-11",
      "questionText": "Denali National Park and Preserve is an important tourist destination in Alaska. Many visitors assume that its $15 entry fee is charged per vehicle. ______ that fee is charged per person. Which choice completes the text with the most logical transition?",
      "options": [
        "Consequently,",
        "Second,",
        "Moreover,",
        "Actually,"
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-easy-12",
      "questionText": "In ArtMed inSight, a series of art-based medical education classes taught by Anne Willieme, medical students learn to use techniques more often associated with the arts, such as slowing down interpretation and considering multiple perspectives. ______ Willieme’s students develop better observational skills, enhancing their ability to understand and diagnose patients effectively. Which choice completes the text with the most logical transition?",
      "options": [
        "By contrast,",
        "In doing so,",
        "For example,",
        "Nevertheless,"
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-easy-13",
      "questionText": "Giant dust plumes from the Sahara Desert that blow across the Atlantic Ocean can have complex and opposing effects on tropical cyclones. On one hand, the dust can enhance the formation of ice clouds in the cyclone’s core, increasing precipitation. ______ the dust can lower sea surface temperatures around the cyclone’s core, weakening the storm. Which choice completes the text with the most logical transition?",
      "options": [
        "Previously,",
        "In other words,",
        "For example,",
        "On the other hand,"
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-easy-14",
      "questionText": "Mary Anning (1799–1847), one of the world’s first paleontologists, lived in Lyme Regis along the Jurassic Coast of southern England. ______ she made several important discoveries, including some of the first documented ichthyosaur and plesiosaur skeletons. Indeed, Anning’s groundbreaking work secured the Jurassic Coast a place in the annals of paleontology. Which choice completes the text with the most logical transition?",
      "options": [
        "For example,",
        "Likewise,",
        "There,",
        "Later,"
      ],
      "correctAnswer": 2,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-easy-15",
      "questionText": "While researching a topic, a student has taken the following notes: Spiders are classified as arachnids. There are other types of arachnids besides spiders. Harvestmen are a type of arachnid. Harvestmen are also known as daddy longlegs. Harvestmen are not spiders. The student wants to explain what harvestmen are. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      "options": [
        "Spiders, also known as harvestmen, are classified as arachnids.",
        "There are other types of arachnids besides spiders, such as daddy longlegs.",
        "The spiders known as daddy longlegs are classified as harvestmen.",
        "Harvestmen, also known as daddy longlegs, are arachnids but not spiders."
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-easy-16",
      "questionText": "For millennia, acorns were a staple food for the Tongva people, the Indigenous inhabitants of what is now the Los Angeles basin. Raw acorns have an extremely bitter taste, though, due to their high tannin levels. ______ it was necessary to process the acorns—which involved grinding, rinsing, and shaping the nuts into a dough—before eating them. Which choice completes the text with the most logical transition?",
      "options": [
        "Therefore,",
        "Similarly,",
        "Afterward,",
        "However,"
      ],
      "correctAnswer": 0,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-easy-17",
      "questionText": "Paleontologists Jordan C. Mallon and David W.E. Hone used computer models to produce detailed Tyrannosaurus rex size estimates, incorporating factors such as growth rate, lifespan, and the size of available fossils. ______ the researchers determined that the largest T. rex possible could have been 70% heavier than the current largest-known specimens. Which choice completes the text with the most logical transition?",
      "options": [
        "In addition to these factors,",
        "Despite these estimates,",
        "Further complicating these issues,",
        "Based on these models,"
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-easy-18",
      "questionText": "Resins play several important roles in maintaining the health of conifers and many other kinds of trees. ______ resins quickly seal wounds, which helps prevent harmful insects and fungi from entering trees. These sticky substances also help trees retain water that is needed for them to survive. Which choice completes the text with the most logical transition?",
      "options": [
        "However,",
        "Regardless,",
        "Next,",
        "For example,"
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-easy-19",
      "questionText": "An imposing spire of igneous rock rising high above the Belle Fourche River in eastern Wyoming, Devils Tower (also known as Bear Lodge) is one of the most prominent examples of columnar jointing, a pattern of fracturing in rocks that ______ in parallel arrays of long polygonal prisms. Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "resulting",
        "were resulting",
        "results",
        "to result"
      ],
      "correctAnswer": 2,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-easy-20",
      "questionText": "Cycads are palmlike plants with cones. ______ plants were abundant throughout the Mesozoic Era (66 to 252 million years ago). Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "These",
        "That",
        "Each",
        "This"
      ],
      "correctAnswer": 0,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-easy-21",
      "questionText": "Water is constantly moving and changing forms on Earth and in the atmosphere. This process is called the water cycle, and it is typically thought to consist of evaporation, condensation, and precipitation. However, the National Oceanic and Atmospheric Administration seeks ______ understanding of the water cycle to include transpiration, sublimation, and other types of water movement. Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "is expanding",
        "to expand",
        "has expanded",
        "expands"
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-easy-22",
      "questionText": "For decades after World War II, the women who had worked for the US military as wartime codebreakers ______ their vital efforts a secret. Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "to keep",
        "having kept",
        "keeping",
        "kept"
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-easy-23",
      "questionText": "“What stories like this do for us is make the world just a smidge bigger,” writes Stephen Graham Jones in the foreword to Never Whistle at Night: An Indigenous Dark Fiction Anthology. For Jones, dark fiction does more than entertain readers: ______ horror tropes to challenge familiar ways of knowing, blurring the “borders of the real.” Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "one uses",
        "we use",
        "they use",
        "it uses"
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-easy-24",
      "questionText": "The Kaiparowits Formation is a fossil-rich layer of sedimentary rock in the Grand Staircase, a colossal sequence of rock layers stretching from Utah’s Bryce Canyon to Arizona’s Grand Canyon. The sandstones and mudstones of the Kaiparowits Formation were deposited ______ the Late Cretaceous, preserving many species from that time. Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "during:",
        "during;",
        "during,",
        "during"
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-easy-25",
      "questionText": "In 2019, New Zealand produced 88,465 hectograms per hectare (hg/ha) of wheat, and Portugal produced 23,298 hg/ha. This is the type of information on global food production that the United Nations’ Food and Agriculture Organization ______ since 1945. Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "is collecting",
        "has collected",
        "will collect",
        "collects"
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-easy-26",
      "questionText": "Mia Heavener’s 2019 novel Under Nushagak Bluff, which takes place in a mid-twentieth-century rural Alaskan fishing ______ the story of three Yup’ik women who grapple with the rise of commercial fisheries and other changes affecting their community. Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "village. Tells",
        "village tells",
        "village: tells",
        "village, tells"
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-easy-27",
      "questionText": "In the 1980s, Latino filmmakers Luis Valdez, Gregory Nava, and Ramón Menéndez helped expand on-screen representation of Latino Americans with the films Zoot Suit ______ and Stand and Deliver (1988), respectively. Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "(1981) El Norte (1983),",
        "(1981)—El Norte (1983)—",
        "(1981), El Norte (1983),",
        "(1981) El Norte (1983)"
      ],
      "correctAnswer": 2,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-easy-28",
      "questionText": "The capital city of the Aztec empire, Tenochtitlan, was built on an island in a lake. Because of the marshy conditions, the Aztec people ______ floating farms called “chinampas.” Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "created",
        "created:",
        "created,",
        "created;"
      ],
      "correctAnswer": 0,
      "section": "english",
      "questionType": "multiple-choice"
    }
  ],
  "medium": [
    {
      "id": "rw-medium-1",
      "questionText": "Studies have demonstrated that positive feedback enhances real-world exercise performance and exercisers’ psychological experience of physical activity. Nicole Trewick and team tested their prediction that positive feedback would produce analogous results among participants cycling on a stationary bike in a virtual reality environment. After monitoring participants’ pedaling rate and heart rate to determine the effects on their physical endurance (e.g., their ability to sustain a certain target pedaling and heart rate) of feedback (positive, negative, or neutral) delivered at regular intervals, the researchers used participants’ questionnaire responses to assess their psychological experience of the task. Assuming participants had similar baseline fitness levels, which finding from the study, if true, would most strongly suggest that positive feedback had the predicted psychological effect but not the predicted physical effect?",
      "options": [
        "Compared with participants who received positive feedback, participants who received neutral feedback reported lower enjoyment of the activity on average but maintained their heart and pedaling rates for longer durations than participants who received negative feedback.",
        "Compared with participants who received positive or neutral feedback, participants who received negative feedback reported lower enjoyment of the activity on average but maintained their heart and pedaling rates for longer durations.",
        "Compared with participants who received negative feedback, participants who received neutral feedback reported similar levels of enjoyment of the activity on average but maintained their heart and pedaling rates for shorter durations than participants who received positive feedback.",
        "Compared with participants who received negative or neutral feedback, participants who received positive feedback reported greater enjoyment of the activity on average but maintained their heart and pedaling rates for approximately similar durations."
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-medium-2",
      "questionText": "Archaeologists have observed similarities in the tools, such as bidirectional blades, uncovered at the Neolithic-period Mesopotamian settlement of Çayönü Tepesi and those uncovered at roughly contemporaneous settlements elsewhere in Southwest Asia, including those in the South Levant, Central Anatolia, and Central Zagros. Although similarities in tools could be attributed to imitative behavior or trade, Nefize Ezgi Altınışık et al. found evidence of genetic affinity among the populations of Çayönü Tepesi, Central Anatolia, the South Levant, and—to a lesser extent— Central Zagros. Information in the text best supports which statement about the finding made by Altınışık et al.?",
      "options": [
        "It implies that people and tools likely arrived in Çayönü Tepesi from settlements in Central Anatolia and the South Levant at an earlier time than they did from settlements in Central Zagros.",
        "It raises the possibility that similarities in the design of tools found at Neolithic settlements in Southwest Asia emerged due to population blending between those settlements.",
        "It suggests that in the Neolithic period, people in the South Levant and Central Anatolia imitated tool designs originating in Çayönü Tepesi more frequently than people in Central Zagros did.",
        "It helps explain why contemporaneous Neolithic peoples in Southwest Asia had similar tools but lacked other obvious cultural similarities."
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-medium-3",
      "questionText": "Readers sometimes divide the works of twentieth-century English author Evelyn Waugh into two periods: one consisting of his early satirical novels and the other consisting of his later, more serious—even ponderous—books. Critic Seamus Perry, however, challenges that strict division. Perry argues that Waugh’s writing didn’t change over time as much as some readers have suggested. For instance, Perry contends that some of Waugh’s earliest works, notably his biography of artist Dante Gabriel Rossetti, exhibit the earnest romanticism that would characterize Waugh’s later fiction. Based on the text, which statement about Waugh’s works would Perry most likely agree with?",
      "options": [
        "Waugh’s works can appropriately be separated into two periods by their subject matter and tone.",
        "Regardless of when they were written, Waugh’s works have important similarities that transcend their differences.",
        "The earliest of Waugh’s works exhibit a satirical tone, even if that tone is more apparent in Waugh’s later works.",
        "Over time, Waugh’s works became less humorous and more focused on weightier topics."
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-medium-4",
      "questionText": "Pablo Picasso famously subverted the norms of traditional painting: in his cubist paintings he refused to let his expression be constrained, fragmenting objects and figures to present multiple perspectives simultaneously. Though less widely known, Picasso—who once lamented that writers of his time had “limited themselves to moving around words somewhat while respecting the syntax”—also wrote poetry that defied conventional grammar, semantic relationships, and text structure. Thus, the paintings and poems are linked in that ______ Which choice most logically completes the text?",
      "options": [
        "the poems present many of the same subjects as the paintings but with different thematic approaches.",
        "the poems are intended to be understood as explanations of the artistic inclinations reflected in the paintings.",
        "both types of work are characterized by the simultaneous representation of multiple points of view that Picasso is known for.",
        "both exhibit Picasso’s prioritization of creative expression over the standard rules of the art forms."
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-medium-5",
      "questionText": "Given the immense scope of space, the search for extraterrestrial life is almost necessarily concentrated on the exoplanets deemed to have the most plausible chance of success—typically, atmosphere-bearing terrestrial planets orbiting within a certain range of their stars (termed the habitable zone). Claiming that Earth experienced a long transition from single-lid to plate tectonics that accelerated the emergence and evolution of complex organisms, researchers Robert J. Stern and Taras V. Gerya hold that consideration of tectonics, an often overlooked factor, could help further narrow the search for advanced extraterrestrial species. Based on the text, what do Stern and Gerya most likely believe about the development of complex life on exoplanets?",
      "options": [
        "It is more likely to occur on habitable zone planets with atmospheres and plate tectonics than on otherwise similar planets that lack plate tectonics.",
        "It is more likely to occur if habitable zone planets with atmospheres transition from single-lid to plate tectonics late in their history than if they transition early in their history.",
        "It is unlikely unless the transition from single-lid to plate tectonics occurs before the acquisition of a lasting atmosphere.",
        "It is probably more dependent on the presence of plate tectonics than on orbital distance from a host star or the presence of an atmosphere."
      ],
      "correctAnswer": 0,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-medium-6",
      "questionText": "In the early 1970s, art historian Michael Baxandall created an approach to viewing art called the “period eye,” which explains how to look at art through the lens of its historical period. Baxandall argued that it is critical that art historians understand and communicate the original social and cultural contexts of older works of art so that it is clear what the artists intended and how the pieces would have been understood by their original viewers. Since it was first introduced, Baxandall’s period eye has significantly influenced the practice of art history. Which statement, if true, would most strongly support the claim in the underlined sentence?",
      "options": [
        "Art historians working today have largely rejected the idea, common among Baxandall’s predecessors, that artists’ intentions should influence how artworks are interpreted.",
        "For some historical periods, it is difficult for art historians to reconstruct how the original viewers of artworks understood what artists’ intentions for their works were.",
        "Numerous art historians of the late twentieth century and twenty-first century have focused their scholarship on how various artworks were interpreted at the time of their creation.",
        "Many art historians working before the 1970s produced detailed analyses of the social and cultural contexts of older artworks, though few extended that approach to artworks produced in their own lifetimes."
      ],
      "correctAnswer": 2,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-medium-7",
      "questionText": "Many linguists have claimed that the lyricism of Alexander Pushkin’s Russian novel in verse Eugene Onegin makes the work incapable of being faithfully translated, especially into English. The original work is written much like a long poem, featuring linguistic patterns and flourishes specific to the Russian language. Rather than striving to portray each scene of the novel literally, John Cranko, in his ballet adaptation of Eugene Onegin, opted to let the essence of the work’s emotions inspire the passion of the dancers. Critic Emma Golden writes that Cranko’s “choreography uses the poetry of the human body to summon the parts of Pushkin’s novel that were deemed untranslatable—its commitments to rhythm, cadence, symmetry.” It seems, then, that ______ Which choice most logically completes the text?",
      "options": [
        "Cranko’s loose adaptation of Eugene Onegin into a different medium may have preserved fundamental elements of the source material better than a strictly literal written translation of the text would have.",
        "though written works are frequently adapted into other formats, ballets are rarely considered to be faithful adaptations of texts.",
        "English is a particularly difficult language into which to translate poetic works, as its rhythms differ from those of many other languages.",
        "most critics believe that, like other English translations of Eugene Onegin, Cranko’s ballet adaptation fails to capture the essence of the original’s meaning."
      ],
      "correctAnswer": 0,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-medium-8",
      "questionText": "Zooarchaeologist Ophélie Lebrasseur and her team examined a fox skeleton discovered in 1991 at an archaeological site alongside artifacts of human habitation (like spear points) in central Argentina. Lebrasseur et al. determined that the fox was Dusicyon avus, an extinct species resembling a jackal, and radiocarbon dating placed the fox at the site at the same time as human inhabitants. (Indeed, the inhabitants may have deliberately buried the fox.) In addition, while wild foxes have a diet entirely made of meat, isotopic signatures of the skeleton’s teeth indicated that the fox’s diet, like that of the humans, was partly composed of plant material. Lebrasseur et al. therefore concluded that ______ Which choice most logically completes the text?",
      "options": [
        "the humans who were alive at the same time as the fox most likely ate more meat than the fox did.",
        "the fox may have been a companion animal of the humans who inhabited the site at the same time.",
        "the fox had a diet more similar to that of jackals than to that of wild foxes.",
        "the humans who were alive at the same time as the fox hunted using the spears whose points were also found at the site."
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-medium-9",
      "questionText": "Online surveys are a common tool researchers use to collect information. These surveys are usually designed for use on personal computers (PCs), but more people are using smartphones to complete them than they are PCs. This shift in device usage may change how participants interact with online surveys. When researchers Jean Philippe Décieux and Philipp E. Sischka investigated, they found that PC users were more likely to multitask while taking surveys than smartphone users were, but PC users were also more likely to complete the surveys. Which choice best states the main idea of the text?",
      "options": [
        "People are choosing to take online surveys on smartphones more often than they are on PCs because smartphones are convenient.",
        "Researchers are investigating why survey completion rates are higher on PCs than they are on smartphones, despite increased multitasking on PCs.",
        "Researchers prefer online surveys to other ways of collecting information because they think online survey results are more reliable.",
        "A study shows that the type of device people use to complete online surveys affects how they interact with these surveys."
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-medium-10",
      "questionText": "Science fiction has long served as a ______ real-world technological advancements. Indeed, from Jules Verne’s 1865 novel From the Earth to the Moon inspiring developments in aerospace engineering to the television show Star Trek sparking the design of the ancestor of today’s smartphones, these narratives have spurred many actual innovations. Which choice completes the text with the most logical and precise word or phrase?",
      "options": [
        "constraint to",
        "sponsor of",
        "catalyst of",
        "diversion from"
      ],
      "correctAnswer": 2,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-medium-11",
      "questionText": "Scientists studying marine ecosystems were surprised by the extent of internal carbon recycling by red coralline algae. While some ______ of carbon was expected, the scientists found that the algae reabsorb nearly 40% of the carbon dioxide they produce during calcification processes and harness it for photosynthesis. Which choice completes the text with the most logical and precise word or phrase?",
      "options": [
        "imitation",
        "supply",
        "examination",
        "reuse"
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-medium-12",
      "questionText": "Alternative-history fiction is a subgenre of science fiction in which plots center on “what if?” questions. What if India had started the Industrial Revolution? What if Soviet cosmonauts had been first to land on the moon? Speculative counterfactuals like these can be great fodder for stories, but they’re also commonly deployed by academic historians to better understand factors influencing historical events. Well-realized and coherent alternative-history stories can thus complement historians’ speculations about the past. Which choice best describes the function of the underlined portion in the text as a whole?",
      "options": [
        "It illustrates how academic historians have influenced writers of alternative-history fiction.",
        "It acknowledges counterfactual questions that academic historians have largely overlooked.",
        "It provides examples of the types of scenarios addressed in alternative-history fiction.",
        "It indicates specific ideas that were first raised by writers of alternative-history fiction and that subsequently inspired scholarship by academic historians."
      ],
      "correctAnswer": 2,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-medium-13",
      "questionText": "Though Chloé Zhao’s films are fictional, she incorporates real events into them in a documentary-like style and casts nonprofessional actors who reside in the places that she aims to portray. She also encourages these actors, whether they are teenagers living on the Pine Ridge Indian Reservation or adults who travel the country for work, to put as much of themselves into their roles as possible. Her approach adds powerful resonance to films that explore the highly personal experiences of place and home, and often the difficult decision to stay or leave. Which choice best states the main purpose of the text?",
      "options": [
        "To argue that Chloé Zhao’s films are best understood as documentaries",
        "To discuss how Chloé Zhao’s background in documentary filmmaking has influenced her storytelling style in films",
        "To emphasize that Chloé Zhao’s decisions during the filmmaking process reinforce the themes of her films",
        "To summarize how Chloé Zhao’s style of filmmaking changed over the course of her career"
      ],
      "correctAnswer": 2,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-medium-14",
      "questionText": "People tend to assume that being happy is the ideal emotional state and should be an ongoing aspiration; recently, however, research has suggested that it is at times beneficial to embrace negative emotions. To test whether anger can contribute to problem-solving abilities, researcher Heather Lench led an experiment in which participants were randomly assigned to view images designed to create an emotional condition—either neutral or one of anger, amusement, desire, or sadness. When asked to then solve a series of challenging puzzles, the participants in the anger condition had greater success than those in the other conditions. Which choice best describes the function of the underlined portion in the text as a whole?",
      "options": [
        "It describes a general psychological tendency that the study discussed in the text was designed to explain.",
        "It explains an assumption underlying the hypothesis investigated in the study discussed in the text.",
        "It notes a generally accepted belief that is called into question by a finding of the experiment outlined in the text.",
        "It suggests a psychological basis for the behaviors of the participants in the experiment reported in the text."
      ],
      "correctAnswer": 2,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-medium-15",
      "questionText": "In Habitat Threshold, Chamoru (Chamorro) poet Craig Santos Perez practices what he calls “recycling,” in which he preserves the syntactical and rhetorical structures of canonical poems but replaces their content to evoke current environmental issues. The form of these poems is thus ______ to their meaning, inviting readers to consider how climate change alters ostensibly familiar experiences. Which choice completes the text with the most logical and precise word or phrase?",
      "options": [
        "antithetical",
        "resigned",
        "invulnerable",
        "integral"
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-medium-16",
      "questionText": "The following text is adapted from Henry James’s 1881 novel The Portrait of a Lady. Everything Osmond did was pose—pose so subtly considered that if one were not on the lookout one mistook it for impulse. Ralph had never met a man who lived so much in the land of consideration. His tastes, his studies, his accomplishments, his collections, were all for a purpose. As used in the text, what does the word “consideration” most nearly mean?",
      "options": [
        "Deference",
        "Courtesy",
        "Calculation",
        "Indecision"
      ],
      "correctAnswer": 2,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-medium-17",
      "questionText": "A team investigating frugivorous (fruit-eating) birds found that their feeding patterns vary depending on where they live within their habitat range. At the geographic boundaries of their natural range, these birds become highly selective, choosing fruits that closely match their beak size to maximize energy intake while minimizing effort. However, this fruit-selection strategy doesn’t occur at elevation boundaries (the highest and lowest altitudes of their range). In these areas, other factors, such as territorial competition among species, have a stronger influence on feeding patterns. Which choice best states the main purpose of the text?",
      "options": [
        "To describe research methods that can be used to study the habitat preferences of frugivorous birds",
        "To present research findings concerning how location within a habitat affects the feeding patterns of frugivorous birds",
        "To discuss how competition among frugivorous bird species influences their habitat boundaries",
        "To explain why habitat boundaries are more important than beak size in determining the feeding patterns of frugivorous birds"
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-medium-18",
      "questionText": "In the search for new impact craters on Mars, the roles of seismic monitoring and orbital imaging as data sources are ______: when vibrations detected with seismic monitoring indicate roughly where an impact has occurred, researchers can use orbital images of that relatively limited area of the rocky surface to precisely locate a new crater. Which choice completes the text with the most logical and precise word or phrase?",
      "options": [
        "interchangeable",
        "complementary",
        "exhaustive",
        "redundant"
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-medium-19",
      "questionText": "A research team led by Gal Badihi has discovered that chimpanzees communicate through exchanges of gestures occurring at a pace similar to that of human conversations. ______ chimpanzee gesture exchanges have short pauses of about 120 milliseconds between communications, comparable to the 200-millisecond average pause between turns in human speech. Which choice completes the text with the most logical transition?",
      "options": [
        "As a result,",
        "Specifically,",
        "By contrast,",
        "Nevertheless,"
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-medium-20",
      "questionText": "Brain imaging research led by neuroscientist Dwaynica Greaves found that actors showed suppressed responses in the left anterior prefrontal cortex (the portion of the brain associated with self-awareness) when their names were called during performances; ______ the actors’ responses were normal in nonacting contexts. These findings suggest that when embodying characters, performers may temporarily set aside their personal identities. Which choice completes the text with the most logical transition?",
      "options": [
        "specifically,",
        "conversely,",
        "likewise,",
        "thus,"
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-medium-21",
      "questionText": "While researching a topic, a student has taken the following notes: Ukiyo-e woodblock prints were a popular artistic form in Japan from the 1600s through the 1800s. Ukiyo-e prints were produced by teams of artisans that included artists, wood-carvers, printers, and publishers. Sōsaku-hanga was a popular Japanese printmaking movement that emerged in the early 1900s. Sōsaku-hanga prioritized individual artistic expression. An artist working in this style typically handled all aspects of print creation, from drawing to wood carving to printing. The student wants to contrast ukiyo-e and sōsaku-hanga production methods. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      "options": [
        "One notable distinction between ukiyo-e and sōsaku-hanga prints is sōsaku-hanga’s emphasis on individual artistic expression.",
        "Ukiyo-e prints were popular in Japan from the 1600s through the 1800s, while sōsaku-hanga prints emerged later, in the early 1900s.",
        "Teams of artisans produced ukiyo-e prints, whereas individual artists typically handled all aspects of sōsaku-hanga printmaking themselves.",
        "In contrast to ukiyo-e prints, sōsaku-hanga prints were produced using methods such as drawing and wood carving."
      ],
      "correctAnswer": 2,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-medium-22",
      "questionText": "As the Proto-Indo-European language split into different languages, many words evolved to sound very different than they had in their proto- language—but this wasn’t always the case. ______ words retained much of their original sound. The word “father,” for instance, sounds similar in Italian (padre), Latin (pater), and Sanskrit (pitar), three Proto-Indo-European descendants. Which choice completes the text with the most logical transition?",
      "options": [
        "However,",
        "Moreover,",
        "Thus,",
        "Sometimes,"
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-medium-23",
      "questionText": "Despite its great distance from Earth—it is 570 light-years away—the star Shaula is one of the brightest stars in the sky, ranking 23rd. Although not as bright as Shaula, the star Alkaid also ranks among the 50 brightest stars (40th, to be exact). ______ Alkaid’s brightness is likely due to the star’s relative proximity: Alkaid is only 100 light-years from Earth. Which choice completes the text with the most logical transition?",
      "options": [
        "Indeed,",
        "As a result,",
        "Granted,",
        "Similarly,"
      ],
      "correctAnswer": 2,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-medium-24",
      "questionText": "Karel Čapek’s 1920 play R.U.R. (Rossum’s Universal Robots), in which artificial workers overthrow their masters, left an indelible mark on the science fiction genre, and the English language, by introducing the term “robot” (derived from the Czech word robota, meaning “indentured labor” or “drudgery”). ______ Čapek’s play also contributed to a venerable literary and mythological tradition: using artificial beings as mirrors and foils for humanity. Which choice completes the text with the most logical transition?",
      "options": [
        "Beyond the simple coining of a term,",
        "By achieving such a lofty goal,",
        "Ultimately limited in its lasting influence,",
        "Despite its creation of such an iconic trope,"
      ],
      "correctAnswer": 0,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-medium-25",
      "questionText": "While researching a topic, a student has taken the following notes: Researchers Gwangsu Kim et al. sought to explore the relationship between the brain’s ability to process natural sounds and its ability to process music. They used an artificial deep neural network (DNN) that models how the brain processes auditory information. The DNN had been trained to detect natural sounds (excluding music). Finding: The DNN spontaneously developed neurons that responded to music but not to other auditory stimuli. Conclusion: The brain’s ability to process music may arise as a by-product of natural sound processing. The student wants to present the aim of the study. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      "options": [
        "In their study, the researchers evaluated whether an artificial deep neural network could model how the brain processes auditory information.",
        "By training an artificial deep neural network, the researchers aimed to establish that the brain’s ability to process natural sounds arises as a by- product of processing music.",
        "The researchers used an artificial deep neural network, which spontaneously developed neurons that responded to music but not to other auditory stimuli.",
        "Using an artificial deep neural network, the researchers sought to explore the relationship between the brain’s ability to process natural sounds and its ability to process music."
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-medium-26",
      "questionText": "Introduced in 2001, Luis von Ahn’s reCAPTCHA security software distinguished human users from autonomous spamming programs, or bots, by prompting a website’s visitors to read distorted text and type it in a box. Over time, though, bots became capable of deciphering distorted text. ______ a version of reCAPTCHA that could detect humans by analyzing cursor movements was released in 2014. Which choice completes the text with the most logical transition?",
      "options": [
        "For example,",
        "In other words,",
        "In response,",
        "Indeed,"
      ],
      "correctAnswer": 2,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-medium-27",
      "questionText": "While researching a topic, a student has taken the following notes: Jacob Lawrence was a US painter best known for The Migration Series (1940–41). The Migration Series portrays scenes from the Great Migration of African Americans from the rural South to cities in the North and Midwest. The series consists of 60 colorful semiabstract paintings, numbered 1 through 60. The odd-numbered paintings are on display at the Phillips Collection in Washington, DC. The even-numbered paintings are on display at the Museum of Modern Art in New York City. Painting #12 depicts people buying tickets in a crowded train station. The student wants to indicate where to go to view Painting #12 from Lawrence’s Migration Series. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      "options": [
        "Depicting a crowded train station, Painting #12 from The Migration Series is on display at the Museum of Modern Art in New York City.",
        "In Painting #12 and the other works of The Migration Series, Lawrence painted African Americans going from the rural South to cities in the North and Midwest.",
        "To view an even-numbered painting from Lawrence’s Migration Series, such as the one that depicts people buying train tickets, one must go to Washington, DC.",
        "The 60 colorful semiabstract paintings of Lawrence’s series can be viewed in two places: the Phillips Collection in Washington, DC, and the Museum of Modern Art in New York City."
      ],
      "correctAnswer": 0,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-medium-28",
      "questionText": "As Iestyn Barr and his team of researchers discovered when establishing the glacial timeline of Antarctica, the Transantarctic Mountains—a 3,500-km mountain range spanning the continent—are home to glaciers of at least 60 million years in age. ______ the researchers concluded, Antarctica had glaciers long before the formation of its continent-wide ice sheet 34 million years ago. Which choice completes the text with the most logical transition?",
      "options": [
        "By contrast,",
        "Thus,",
        "Nevertheless,",
        "Even so,"
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-medium-29",
      "questionText": "On a chilly spring morning in a Virginia park, as sunlight crested the treetops, Kathrin Swoboda raised her Nikon D500 camera and captured an image that would win the Grand Prize in the 2019 Audubon Photography Awards: a red-winged blackbird, exhaling what appeared to be rings of smoke. ______ the “smoke” was actually the blackbird’s breath hitting the cold morning air as the bird sang. Which choice completes the text with the most logical transition?",
      "options": [
        "Furthermore,",
        "For example,",
        "Therefore,",
        "Of course,"
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-medium-30",
      "questionText": "While researching a topic, a student has taken the following notes: Albert Einstein’s theory of general relativity allows for potential shortcuts through spacetime. These hypothetical spacetime tunnels are known as wormholes. For matter to travel through a wormhole, it would need to have negative energy density. Negative energy density means that the matter would have less energy than empty space. Such matter has not been shown to exist. The student wants to acknowledge a complication affecting travel through wormholes. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      "options": [
        "Einstein’s theory of general relativity allows for potential spacetime shortcuts called wormholes but does not explain how matter with negative energy density could travel through them.",
        "For matter to travel through a wormhole, the matter would need to have less energy than empty space; such matter has not been shown to exist.",
        "The hypothetical tunnels known as wormholes would be potential shortcuts through spacetime were it not for one complication: they have less energy than empty space.",
        "For wormholes to be possible, according to Einstein’s theory of general relativity, they would have to allow for potential shortcuts through spacetime."
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-medium-31",
      "questionText": "While researching a topic, a student has taken the following notes: Brass is a metal alloy composed primarily of zinc and copper. Alpha brass contains less than 35% zinc. It is more malleable than beta brass and can be manipulated at room temperature. Beta brass contains more than 45% zinc. It is harder and stronger than alpha brass but is more difficult to work with because it requires heat to manipulate. The student wants to specify an advantage of alpha brass. Which choice most effectively uses information from the notes to accomplish this goal?",
      "options": [
        "As a metal alloy composed primarily of zinc and copper, alpha brass has a notable advantage over beta brass.",
        "Unlike beta brass, which requires heat to manipulate, alpha brass can be shaped at room temperature.",
        "Alpha brass contains less than 35% zinc, whereas beta brass contains more than 45% zinc.",
        "With its higher zinc content, alpha brass is a stronger material than beta brass."
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-medium-32",
      "questionText": "Since the nineteenth century, Egyptologists have commonly divided ancient Egyptian history into three primary ______ Old Kingdom (2700–2200 BCE), the Middle Kingdom (2050–1800 BCE), and the New Kingdom (1550–1100 BCE). Some historians, however, criticize the names of these periods for revealing more about the culture of the mainly European Egyptologists than that of ancient Egypt itself. Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "periods. The",
        "periods: the",
        "periods; the",
        "periods, the"
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-medium-33",
      "questionText": "That Chaucer’s Canterbury Tales inspired imitators is evident from the existence of three near-contemporary “continuations” of the collection: The Siege of Thebes, which purports to be a new tale told during the pilgrims’ ______ The Tale of Beryn, which depicts the pilgrims as tourists; and The Ploughman’s Tale, which features a minor character from the original work. Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "return.",
        "return",
        "return;",
        "return,"
      ],
      "correctAnswer": 2,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-medium-34",
      "questionText": "In October of 1648, representatives from 96 different parties convened to sign the final treaties of the Peace of Westphalia. The treaties, which brought an end to the Thirty Years’ War, ______ signed in the cities of Osnabrück and Münster, both located in the Holy Roman Empire–controlled region of Westphalia. Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "were",
        "is",
        "was",
        "has been"
      ],
      "correctAnswer": 0,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-medium-35",
      "questionText": "Choreographers George Balanchine and Martha Graham both contributed sections to the dance piece Episodes, which premiered at New York’s City Center of Music and Drama in 1959. This cross-genre collaboration brought together the distinct features of Balanchine’s neoclassical ballet and Graham’s modern ______ the stylistic diversity and creative innovation within the dance world. Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "dance, it showcased",
        "dance. Which showcased",
        "dance, showcasing",
        "dance. Showcasing"
      ],
      "correctAnswer": 2,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-medium-36",
      "questionText": "A worker cooperative is a business that is owned and operated by its workers. This model stands in contrast to traditional models in which a smaller group of owners controls a company. Because the profits made by a cooperative are shared by all workers—who are also owners—the workers ______ directly from its success. Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "benefit",
        "benefited",
        "were benefiting",
        "had benefited"
      ],
      "correctAnswer": 0,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-medium-37",
      "questionText": "Both Arteaga, in the state of Coahuila, and Lagos de Moreno, in the state of Jalisco, have been designated by Mexico as pueblos mágicos (magical villages) to celebrate these ______ natural beauty and unique cultural traditions. Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "town",
        "town’s",
        "towns",
        "towns’"
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    }
  ],
  "hard": [
    {
      "id": "rw-hard-1",
      "questionText": "The interiors of many temples in the ancient Middle East needed to satisfy a precise set of acoustic demands: the sounds of chants and hymns should travel with clarity, while profound silences should be fully felt and appreciated. In a research paper, a student claims that the users of one such temple were aware of how the materials that were used within the structure could affect sound quality and that they deliberately applied this knowledge to influence how sound was experienced in the space. Which quotation from a work by a historian would most directly support the student’s claim?",
      "options": [
        "“Many researchers believe that the central chamber of the temple had a high ceiling, a feature that has since become essential to the acoustic design of modern concert halls.”",
        "“The innermost room of the temple was likely among the quietest spaces in the interior of the temple.”",
        "“The acoustic environment of the temple was best suited for music that eschewed ornamentation in favor of simple melodies, harmonies, and rhythms.”",
        "“During special occasions, curtains were placed inside the temple to minimize reverberation and confine the sound to designated locations.”"
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-2",
      "questionText": "Although Eastern North Pacific (ENP) gray whales generally migrate between their wintering waters along the coast of Mexico and their foraging waters in the Arctic, a subset of this population—known as the Pacific Coast Feeding Group (PCFG)—forages along the coastlines of Northern California (USA) and British Columbia (Canada) instead. Interestingly, individuals in this subset reach smaller maximum sizes than other ENP whales do, despite having similar pre-maximum growth rates. Researchers hypothesize that this difference may be an adaptation to distinct resource opportunities in the PCFG foraging range. Which finding, if true, would most directly support the researchers’ claim regarding the size of PCFG whales?",
      "options": [
        "The average body size of PCFG whales observed along the coasts of Northern California and British Columbia has remained relatively steady in recent decades, while the average body size of ENP whales in the main group has slightly decreased.",
        "When present along the coasts of Northern California and British Columbia, PCFG whales tend to forage in rocky kelp beds at shallow depths inaccessible to whales as large as those in the ENP main group.",
        "When foraging along the coasts of Northern California and British Columbia, PCFG whales are in closer proximity to major ports and urban populations than ENP whales in the main group are when foraging in Arctic waters.",
        "Certain crustacean prey species available along the coasts of Northern California and British Columbia where PCFG whales tend to forage are not available in the Arctic waters where ENP whales in the main group forage."
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-3",
      "questionText": "Economists have demonstrated that herding—in which individuals converge on the same action by imitating the economic decisions of one or more peers—occurs among investors. Investigating whether herding also occurs among nations in matters of economic policy, Maru Etta- Nkwelle examined changes in the foreign currency reserves of emerging economies in various world regions in the years following the widespread financial crisis of 1997. Etta-Nkwelle posited that herding would manifest in regional peer countries converging on the same foreign currency accumulation rate regardless of each country’s observable circumstances. She found that Asian countries showed evidence of herding but African countries did not. Based on the text, which finding, if true, would best account for the discrepancy Etta-Nkwelle observed?",
      "options": [
        "The majority of the currency held in reserves by the African countries was foreign currency, whereas the majority of the currency held in reserves by the Asian countries was domestic currency.",
        "Most of the African countries belonged to international economic unions that set individual foreign-currency accumulation policies for each member, whereas the Asian countries were largely free to set their own policies.",
        "The 1997 financial crisis resulted in immediate declines in many of the African countries’ foreign currency reserves, whereas the crisis had few short-term effects on the foreign currency reserves of most of the Asian countries.",
        "The African countries tended to accumulate a variety of foreign currencies for their reserves, whereas the Asian countries tended to favor a single foreign currency for their reserves."
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-4",
      "questionText": "Some geologists have proposed designating the period from 1950 to the present as a new geological epoch (the Anthropocene) characterized by human impact on Earth, but they have struggled to identify reliable stratigraphic markers of the epoch’s onset. Inta Dimante-Deimantovica and a research team investigated whether the initial appearance of primary microplastics—invented and mass-produced for industrial and other purposes, beginning around the middle of the twentieth century—in sedimentary layers could serve this role. The researchers analyzed European lake sediment profiles from the late eighteenth century to the present. Microplastics were present in all layers, likely because certain microplastic shapes enabled rapid downward migration. The researchers therefore concluded that ______ Which choice most logically completes the text?",
      "options": [
        "the lowest sedimentary layer in which microplastics are found cannot be treated as indicative of the chronological beginning of the Anthropocene.",
        "the presence of microplastics in sediment dating to the late eighteenth century casts doubt on the appropriateness of designating 1950 as the onset of the Anthropocene.",
        "microplastics are not prevalent enough in sediment to serve as a reliable sign of the human impact characteristic of the Anthropocene.",
        "using the earliest presence of microplastics as a stratigraphic marker of the beginning of the Anthropocene is likely to be viable in some locations but is not viable in Europe."
      ],
      "correctAnswer": 0,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-5",
      "questionText": "Duckweed is a small freshwater plant that is often exposed to zinc pollution. Sofia Vámos and colleagues collected samples of four duckweed ecotypes (genetically and geographically distinct populations within a species), along with water from each ecotype’s habitat. Hypothesizing that each ecotype is adapted to its local conditions in ways that bolster its growth and resistance to pollutants, the researchers grew each ecotype in all four water samples and with three levels of zinc (none, low, high). (The researchers did not replicate local differences in light or temperature.) They found that the ecotypes grew equally well in all four water samples and that adding zinc consistently enhanced growth, regardless of concentration, suggesting that ______ Which choice most logically completes the text?",
      "options": [
        "while the ecotypes are genetically and geographically distinct, those differences do not represent adaptations to local environmental conditions.",
        "there may not be significant differences in the water that each ecotype inhabits, but there are significant differences in each ecotype’s resistance to zinc pollution.",
        "if each ecotype is indeed locally adapted as the researchers hypothesized, those adaptations are to other environmental conditions than the water each ecotype inhabits.",
        "although the researchers’ hypothesis does not appear to be supported, this may be because the levels of zinc exposure the plants in the experiment received did not match their exposure in their natural environments."
      ],
      "correctAnswer": 2,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-6",
      "questionText": "Born in Chile in 1917, artist and ethnomusicologist Violeta Parra was a pioneer in the nueva canción chilena (Chilean New Song) movement that emerged in the late 1950s and then spread throughout Latin America, Portugal, and Spain as nueva canción. Parra traveled all over Chile compiling extensive records of authentic folk music as well as recipes, proverbs, and other facets of cultural history. These records formed the foundation for the early movement’s revival of traditional Chilean folk forms in new songs that represented modern realities of the working class and strongly advocated for social change. As the movement spread beyond Chile, the breadth of musical traditions incorporated into its foundation also expanded. Which detail about songs associated with nueva canción, if true, would best illustrate the underlined claim?",
      "options": [
        "Many feature political commentary addressing contemporary issues that stemmed from shared experiences of European colonization in Latin American countries.",
        "Many demonstrate the stylistic influence of corrido, a genre of narrative songs from Mexico that had come to be characterized by political themes in the early 1800s.",
        "Many were written with parts meant to be played on the quena, a traditional flute used across Andean countries, including Chile.",
        "Many were produced by Argentinian artists in the late 1950s, with others by artists in additional Latin American countries first emerging soon after."
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-7",
      "questionText": "Within higher education, studying philosophy requires that students be conversant with the field’s foundational texts and historical figures. By contrast, doing philosophy within or beyond the academy demands the creative, self-directed application of acquired expertise to enduring questions about the nature of existence and knowledge. While both approaches engage with influential figures, those who do philosophy treat such figures as vital interlocutors who facilitate new insights rather than as ossified authorities who, though relevant to the present, primarily represent the discipline’s past. Based on the text, which choice best describes the relationship between doing philosophy and studying philosophy?",
      "options": [
        "Doing philosophy helps students formulate concrete solutions to practical issues, whereas studying philosophy prioritizes engagement with historical arguments in the field.",
        "Doing philosophy involves developing novel ideas through imagined dialogue with past philosophers based on knowledge of those philosophers’ views acquired by studying philosophy.",
        "Doing philosophy requires students to challenge the ideas articulated by past philosophers, especially when these ideas are broadly accepted by other people studying philosophy.",
        "Doing philosophy represents a departure from the norms that govern scholarly inquiry, whereas studying philosophy requires conforming to these norms."
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-8",
      "questionText": "Having demonstrated that the power conversion efficiency of new perovskite photovoltaic cells is nearly indistinguishable from that of cells recycled multiple times, Xun Xiao and colleagues evaluated the levelized cost of electricity (LCOE)—a measure of cost per produced electricity unit that incorporates materials acquisition costs as well as operating costs—for power plants utilizing each type of cell. With a modeled 15-year cell lifetime, the LCOE of plants using new cells was 4.99 cents per kilowatt-hour, whereas that of plants using cells recycled three times was 4.05 cents per kilowatt-hour. Moreover, the LCOE differential grew from 18.8% to 31.3% when the modeled cell lifetime was reduced by two- thirds. Based on the text, which choice, if true, most coherently and directly accounts for the observation presented in the underlined sentence?",
      "options": [
        "Cells can be recycled multiple times without a significant decrease in power conversion efficiency, and thus recycling cells more frequently does not change the LCOE for plants using recycled cells.",
        "Although potentially less expensive than producing new cells, recycling cells does incur costs, and thus reducing cell lifetimes entails greater cumulative costs.",
        "Securing new cell materials is more expensive than recycling cell materials, and thus more frequent cell replacement entails greater disparity in cumulative costs.",
        "As the modeled cell lifetime decreases, plant operating costs increase, and thus the LCOE for plants using new cells diverges from that of plants using recycled cells."
      ],
      "correctAnswer": 2,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-9",
      "questionText": "A social species, chickens will cry out to one another in warning if they sense a hawk or other predator nearby. But if alone, a chicken will remain silent so as not to attract the predator’s attention. Sonja Hillemacher decided to use this behavior to determine whether individual chickens possess a capacity to recognize themselves visually when reflected in a mirror (a common standard for animal intelligence). In the first condition of her study, the subject could see its reflection, but no other chickens were present. In a second condition, another chicken was visible to the subject. Hillemacher presented an image of a hawk to the subject in both conditions, reasoning that if chickens lacked a capacity for visual self- recognition, then ______ Which choice most logically completes the text?",
      "options": [
        "neither study condition would elicit an audible response from the subject.",
        "the subject likely would cry out a warning in both study conditions.",
        "only the first study condition would elicit an audible response from the subject.",
        "the subject would fail to distinguish its reflection from the image of the hawk."
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-10",
      "questionText": "In episodes of high heat, corals expel symbiotic zooxanthellae from their tissues, leading to coral bleaching and heightened coral mortality. Some researchers have proposed a mitigation strategy of identifying, rearing, and disseminating corals that have evolved strong resistance to heat, but as Nia S. Walker et al. note, if genes conferring such resistance were exclusively advantageous, they should have already propagated through coral populations. Indeed, Walker et al. show that strongly heat-resistant corals display much less growth after heat stress than do moderately heat-resistant corals. Based on the text, Walker et al. would most likely agree with which statement about the strategy some researchers have proposed?",
      "options": [
        "It would involve promoting a trait that protects corals against high heat but that is associated with reduced thriving after episodes of high heat.",
        "It would favor a trait that is advantageous now but would be disadvantageous if episodes of high heat become as infrequent as has been predicted.",
        "It would benefit corals that are frequently exposed to episodes of high heat but would harm corals that are frequently exposed to episodes of moderate heat.",
        "It would require manipulating a trait that is poorly understood and that may be linked to increased coral mortality during episodes of high heat."
      ],
      "correctAnswer": 0,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-11",
      "questionText": "In classical Greek and Roman mythology, female characters are typically cast as either villains lacking in psychological depth or passive victims who are marginal to these stories, which usually focus on the exploits of male characters. Recently, a subgenre has emerged in which writers reimagine these stories from the perspectives of their female characters, giving them agency and complex motivations. Purists argue that such efforts represent a distinctively modern tendency to impose our own values on past civilizations, obscuring those civilizations’ beliefs. Defenders of the subgenre counter that reimaginings of the myths for new cultural contexts are almost as old as the myths themselves, suggesting that ______ Which choice most logically completes the text?",
      "options": [
        "bringing female perspectives to the forefront is not indicative of a novel attitude regarding fidelity to Greek and Roman myths’ ideologies.",
        "modern writers’ foregrounding of female characters is chiefly motivated by a desire to counterbalance the primacy of male perspectives among earlier adaptations of Greek and Roman myths.",
        "purists are overlooking a long tradition of adapting Greek and Roman myths to focus on female characters.",
        "the complex motivations given to female characters in modern retellings of Greek and Roman myths reflect a recent shift toward psychological depth in fictional representation."
      ],
      "correctAnswer": 0,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-12",
      "questionText": "Sir Gawain and the Green Knight is a circa 1400 poem written in Middle English—an archaic form of the English spoken today. Over the last several centuries, the English language has undergone such transformations in vocabulary, spelling, and grammar that most readers now rely on translations to read Sir Gawain. In the introduction to his 2007 translation, Simon Armitage remarks that the sonic patterns of the poem, which was written in alliterative verse (a verse form featuring extensive repetition of initial consonant sounds), are essential to its structure. Because many Modern English words begin with different sounds than their Middle English equivalents do, a strictly literal translation of Sir Gawain would therefore likely ______ Which choice most logically completes the text?",
      "options": [
        "preserve much of the original text’s meaning at the expense of other qualities that are also integral to the experience of reading the poem.",
        "appeal more to modern readers than would translations like Armitage’s that instead prioritize the original text’s sonic and structural qualities.",
        "be more faithful to the original intentions of the poem than most strictly literal translations of alliterative Middle English poems are to their originals.",
        "be preferable to modern readers who are primarily interested in learning what the poem reveals about historical conditions during the time it was originally written."
      ],
      "correctAnswer": 0,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-13",
      "questionText": "The following text is adapted from William Shakespeare’s 1597 play The Tragedy of King Richard III. Richard is reflecting on the recent arrest of his brother, the Duke of Clarence, on suspicion of treason against King Edward IV. Derby, Hastings, Buckingham, Rivers, Dorset, and Grey are also members of the English nobility. RICHARD: I do the wrong, and first begin to brawl. The secret mischiefs that I set [flowing] I lay unto the grievous charge of others. Clarence, whom I indeed have cast in darkness, I do beweep to many simple [gullible people], Namely, to Derby, Hastings, Buckingham; And tell them ’tis the Queen and her allies That stir the King against the Duke my brother. Now they believe it, and withal whet me To be revenged on Rivers, Dorset, Grey. Which choice best describes what happens in the text?",
      "options": [
        "Richard describes having wept as he informed Derby, Hastings, and Buckingham that the queen and her allies convinced the king to act against Clarence, and says that the earnestness of his grief caused them to accept his version of events.",
        "Richard attributes Clarence’s troubles to both his own secret plotting and the distrust of Clarence that the queen and her allies Derby, Hastings, and Buckingham have planted in the king’s mind.",
        "Richard indicates that he has pretended to be aggrieved about Clarence’s situation and has proclaimed it to be the fault of the queen and her allies, but in reality, he has caused the hostility the king feels toward Clarence.",
        "Richard acknowledges that his mischievous nature has spurred him to commit misdeeds in the past, including instigating enmity between the king and Clarence, but he reports that he has hitherto not lost the trust of the queen and her allies."
      ],
      "correctAnswer": 2,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-14",
      "questionText": "Whistler waves are low-frequency plasma waves that on Earth are typically generated by lightning. Numerous recordings of whistler waves on Venus have led many scientists to suggest that the planet’s atmosphere is host to extensive amounts of lightning, and, in fact, Venusian whistler waves have similar energy signatures to those of whistler waves generated by lightning on Earth. The majority of Venusian whistler wave data come from two spacecraft missions—the Pioneer Venus Orbiter (PVO) and the Venus Express (VEX)—which have included few observations of other phenomena consistent with lightning occurrences (such as flashes of light), leading other scientists to suggest that ______ Which choice most logically completes the text?",
      "options": [
        "similarities in the energy signatures of Venusian and Earth whistler waves may reflect imprecisions in the PVO and VEX data.",
        "the purported Venusian whistler waves must actually be some other type of atmospheric activity than whistler waves.",
        "Venusian lightning has properties that make it unlikely to generate whistler waves.",
        "there are geophysical characteristics of Venus not shared with Earth that promote the generation of whistler waves."
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-15",
      "questionText": "Across brown bears—omnivores with high dietary plasticity—there is wide variety in dietary mix, which may reflect genetics, local resource availability, or social learning (cubs stay with their mothers for two years or more). Evaluating these possibilities, Anne Hertel et al. analyzed 30 years of data on trophic position (indicative of dietary mix) for female brown bears. After separation, daughters, who tended to settle near their mothers, occupied the same trophic positions as their mothers for two years, but the correlation disappeared by year five. Trophic correlation with unrelated individuals in similar habitats was modest, while habitat-independent correlation with nonmaternal relatives (e.g., cousins) was no different than with unrelated individuals. These findings suggest that ______ Which choice most logically completes the text?",
      "options": [
        "growing dissimilarity between mothers and their daughters with regard to dietary mix may reflect changes in the resources available in maternal habitats, though social learning could also contribute to the trend.",
        "dietary mix among females may reflect a social learning effect that eventually diminishes, though environmental constraints cannot be ruled out as a contributing factor.",
        "female dietary mix is best understood as changeable and contingent on fluctuating environmental conditions rather than as the result of social learning or genetic factors.",
        "social learning and resource fluctuations may both play a role in dietary mix among females, at least temporarily, though genetic factors appear to make a significant contribution as well."
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-16",
      "questionText": "The following text is adapted from William Shakespeare’s 1598 play Henry IV, Part 1. King Henry is addressing several noblemen who are rumored to have been disloyal to him. KING HENRY: My blood hath been too cold and temperate, Unapt to stir at these indignities, And you have found me, for accordingly You tread upon my patience; but be sure I will from henceforth rather be myself, Mighty and to be fear’d, than my [disposition], Which hath been smooth as oil, soft as young down, And therefore lost that title of respect Which the proud soul ne’er pays but to the proud. Which statement best describes how King Henry presents himself in the text?",
      "options": [
        "He declares that he has judged the noblemen’s conduct in an impartial manner, and that despite their attempts to regain his trust through professions of submissiveness, they have irrevocably lost his respect.",
        "He acknowledges to the noblemen that his tolerance of their conduct has undermined their respect for him, and he resolves to display his genuine nature, which is more forceful and compels deference.",
        "He defends his calm disposition, which he sees as fundamental to his personality, and vows to maintain his tranquil demeanor even if it causes him to lose the respect of overly proud noblemen.",
        "He concedes that he has treated the noblemen with indifference, which in part explains why they have defied him, but he asserts that their disrespectful behavior is primarily driven by their excessive pride."
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-17",
      "questionText": "Richard II is a play from the 1590s by William Shakespeare. Although King Richard has been vanquished by his cousin Henry Bolingbroke, he intimates that he is not entirely ready to show subservience to his cousin, saying, ______ Which quotation from Richard II most effectively illustrates the claim?",
      "options": [
        "“I have no name, no title,— / No, not that name was given me at the font,— / But ’tis usurp’d:— Alack the heavy day, / That I have worn so many winters out, / And know not now what name to call myself!”",
        "“Alack, why am I sent for to a king, / Before I have shook off the regal thoughts / Wherewith I reign’d? I hardly yet have learn’d / To insinuate, flatter, bow, and bend my knee.”",
        "“Still my griefs are mine. / You may my glories and my state depose, / But not my griefs; still am I king of those.”",
        "“Am I both priest and clerk? Well then, amen. / God save the King! although I be not he; / And yet, amen, if heaven do think him me.”"
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-18",
      "questionText": "In subtropical Asia, Apis dorsata (giant honeybee) plays an essential role in pollinating a wide variety of crops and wild plants. To study how different agricultural land covers affect the species, Rika Raffiudin and colleagues monitored the foraging activity of the bees as well as the pollen content of the honey from A. dorsata colonies at two sites in Indonesia: Kampar, characterized by its surrounding monoculture farms (growing a single crop), and Kerinci, a forest-agriculture site where multiple crops, including hot peppers and coffee, are grown nearby. The researchers concluded that a lack of crop variety may reduce total pollen collection by A. dorsata. Which finding, if true, would most directly support the researchers’ conclusion?",
      "options": [
        "Pollen in honey samples from Kampar bee colonies was predominantly sourced from a single plant species, whereas pollen in honey samples from Kerinci bee colonies was sourced from multiple different plant species.",
        "In one Kerinci bee colony, a greater proportion of bees returned to their nests with pollen than returned without pollen, whereas the inverse was observed in a second Kerinci bee colony.",
        "Significantly fewer bees were observed engaging in foraging activities with the crops surrounding Kerinci than with the crops surrounding Kampar.",
        "Honey samples from Kerinci bee colonies contained significantly higher concentrations of pollen than honey samples from Kampar bee colonies did."
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-19",
      "questionText": "Belonging to neither the minimalist nor the abstract art movements but heavily influencing both, Constantin Brâncuşi spent his sculpting career returning to the same few themes—a kiss, a sleeping head, and a bird in flight—each rendered in pristine, simple, almost abstract forms. Perhaps the most famous example is Bird in Space (1923), a tall, slender bronze sculpture that arcs upward in a manner suggestive of flight but that otherwise lacks any identifiable characteristics of a bird. Despite the seeming simplicity of his works, the exacting standards to which Brâncuşi held his work meant that he produced relatively few pieces over his career. There is thus something of a disparity between ______ Which choice most logically completes the text?",
      "options": [
        "the nature of much of Brâncuşi’s work and the abstraction of Bird in Space.",
        "Brâncuşi’s relatively limited productivity and the diversity of his sculptures.",
        "the themes Brâncuşi explored and the themes favored by artists he inspired.",
        "Brâncuşi’s importance to the history of art and his total artistic output."
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-20",
      "questionText": "Archaeologist Weiwei Wang and her colleagues analyzed footed grinding slabs and other food-preparation tools excavated from Óc Eo, a Southeast Asian port city that flourished between the first and sixth centuries CE. Wang and colleagues recovered microscopic remnants of turmeric and other spices from the surfaces of the tools. Turmeric is native to South Asia, more than a thousand miles west of Óc Eo, and the researchers showed that the footed grinding slabs at Óc Eo are very similar to footed grinding slabs common throughout South Asia from around 500 BCE to 300 CE. Wang and colleagues’ findings therefore indicate that there must have been a trade link, whether direct or indirect, between the two regions. Which finding, if true, would directly weaken the conclusion about Wang and her colleagues’ findings that is presented in the text?",
      "options": [
        "Some of the spices recovered from Óc Eo are native to the Maluku Islands, which are located approximately 2,000 miles southeast of Óc Eo.",
        "In the first through third centuries CE, there was a significant migration of people from South Asia to Southeast Asia.",
        "Other types of artifacts originating in South Asia and dating to the first through sixth centuries CE have been found throughout Southeast Asia.",
        "The people of Óc Eo and several communities in South Asia regularly traded with people in the region that is now the Southeast Asian country of Malaysia no later than the first century CE."
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-21",
      "questionText": "30 25 20 15 10 5 0 )slacsapagem( htgnerts evisserpmoC Compressive Strength of Mortar Mixtures After Curing % S S A) % S S A % S S A % S S A ol ( 0 1 0 2 0 4 0 ntr o c Mixture day 7 day 28 Mollusk shells are mainly composed of calcium carbonate, a chemical compound used in mortar and other construction materials. A research team led by Ariane da Silva Cardoso investigated pulverizing discarded Sururu mussel shells to create a substitute for fine aggregates (such as sand) in mortar mixtures. The team prepared mixtures with Sururu shell aggregate (SSA) replacing varying percentages of sand and then tested the mortars’ compressive strength on days 7 and 28 of curing. Based on their findings, the team recommended SSA substitution in relatively small proportions to avoid compromising strength. Which choice most effectively uses data from the graph to support the researchers’ recommendation?",
      "options": [
        "The 10% SSA mixture’s compressive strength was greater than or approximately equal to that of the control mixture on day 7 and on day 28, but on both days the 20% and 40% SSA mixtures had less compressive strength than the control mixture did.",
        "The compressive strength of the 10% SSA mixture remained nearly the same from day 7 to day 28, while that of the 20% and 40% SSA mixtures changed substantially.",
        "The 10% SSA mixture’s compressive strength was greater than that of the control mixture on day 7, but by day 28 the 10% SSA mixture’s compressive strength had decreased while that of the control mixture had increased.",
        "The compressive strength of the 10% SSA mixture never surpassed the compressive strength measured for the control mixture on day 28."
      ],
      "correctAnswer": 0,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-22",
      "questionText": "Percentages of New Year’s Resolution Makers Who Make Certain Kinds of Resolutions Type of resolution Age 18-29 Age 30-49 Age 50-64 Age 65+ Health and exercise 79 80 79 76 Finances 68 63 56 47 Personal relationships 63 53 58 52 Hobbies 65 53 51 45 A Pew Research Center survey conducted in January 2024 found that three out of ten US adults make at least one New Year’s resolution (a promise for the year ahead), while half of those who make a resolution make more than one. The survey asked participants what kinds of resolutions they made and separated them into several categories. The table presents percentages of people who make particular kinds of New Year’s resolutions among those who choose to make them, indexed by age bracket. Which choice best presents a conclusion about the habits of New Year’s resolution makers that is best supported by information in the text and the table?",
      "options": [
        "Resolution makers between the ages of 50 and 64 are more likely to make resolutions related to personal relationships and less likely to make resolutions related to finances than resolution makers between the ages of 30 and 49 are.",
        "Resolution makers between the ages of 18 and 29 are more likely to make resolutions about health and exercise than resolution makers between the ages of 30 and 49 are.",
        "The majority of US adults who make resolutions related to health and exercise also make resolutions in multiple additional categories.",
        "Among all US adults, people become less likely to make New Year’s resolutions as they age, regardless of the type of resolution."
      ],
      "correctAnswer": 0,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-23",
      "questionText": "In their meta-analysis of research on advergames (video games developed to promote products or services), Zeph M.C. van Berlo et al. confirm that such games, though they can elicit player interest, may not facilitate subsequent recall of product and brand information. This phenomenon can be explained by the finite nature of cognitive capacity as it is articulated in Annie Lang’s limited capacity model of motivated mediated message processing. In this case, players’ cognitive resources are directed foremost toward the advergame’s mechanics, leaving little or no capacity for encoding and storing the information the advertiser intends to be salient. Which choice best states the main idea of the text?",
      "options": [
        "The limited capacity model of motivated mediated message processing developed by Lang provides a means of explaining the finding by van Berlo et al. that players may not readily recollect the brand and product information embedded in advergames.",
        "Research by van Berlo et al. corroborates Lang’s conclusion that because people predominantly focus on game mechanics when playing video games, it is difficult for advergames to communicate brand and product information in ways that are highly memorable.",
        "The meta-analysis by van Berlo et al. reveals that higher engagement in advergame mechanics is linked to lower effectiveness in persuading players to purchase particular brands and products.",
        "Although the limited capacity model of motivated mediated message processing developed by Lang suggests otherwise, advergames can succeed as marketing tools, provided that they achieve a balance between game mechanics and the promotion of a brand or product."
      ],
      "correctAnswer": 0,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-24",
      "questionText": "Microbial fuel cells (MFCs) capitalize on the ability of some species of bacteria to oxidize organic matter and transfer electrons extracellularly. The bacteria form a dense biofilm on the surface of an electron-collecting anode, but moving the electrons from the bacterial cytoplasm to an external electrode requires that the electrons pass through a series of inefficient oxidation-reduction (redox) reactions. Accordingly, MFC power 2 output rarely exceeds a density of 0.30 milliwatts per square centimeter (mW/cm ). In an experiment, researchers added silver nanoparticles to 2 carbon paper covering the anode in an MFC. The resulting power density was 0.66 mW/cm . Since metals such as silver exhibit high electrical conductivity, the researchers hypothesized that ______ Which choice most logically completes the text?",
      "options": [
        "silver nanoparticles may allow electrons to bypass the series of redox reactions and transfer directly to the electrode.",
        "electrons may be conducted directly to the electrode before the silver nanoparticles catalyze the redox reactions.",
        "silver nanoparticles may increase the metabolic processes of the bacteria, thereby increasing the number of free electrons available to transfer to the electrode.",
        "as the density of the biofilm increases, the series of redox reactions may accelerate independent of the presence of the silver nanoparticles."
      ],
      "correctAnswer": 0,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-25",
      "questionText": "Through adaptive radiation, multiple species of Tetragnatha—a genus of orb-weaving spiders—have significantly diversified their web architecture over a relatively short timescale. To investigate whether the material properties of Tetragnatha silk have been similarly affected by this evolutionary process, Angela M. Alicea-Serrano et al. examined the chemical composition of both the radial (non-sticky threads extending from the center) and capture (sticky threads that hold prey) silks that form the web as well as tested the tensile strength and viscosity of samples collected from three Tetragnatha species at two sites in the Hawaiian archipelago. The team found significant interspecies variation in these biomaterials. Which choice best states the main idea of the text?",
      "options": [
        "Research reveals that web architecture among species of Tetragnatha spiders has likely diversified more rapidly than the material properties of Tetragnatha’s silk have.",
        "Research suggests that the material properties of silk from species of Tetragnatha spiders have diversified during adaptive radiation.",
        "A study indicates that variations in web architecture among species of Tetragnatha spiders can likely be explained by corresponding variations in the material properties of their silks.",
        "A study shows that adaptive radiation can explain interspecies variation in the web architecture of Tetragnatha spiders but not in the material properties of the spiders’ silk."
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-26",
      "questionText": "In a study of perceptions of listening ability, participants explained their position on a sociopolitical issue and then received a listener’s written summary that expressed agreement or disagreement. Within selected summaries, researchers embedded markers of attentive listening (e.g., references to specific details), hypothesizing that such indications would positively influence perceptions of listening skill even in the context of disagreement. Instead, participants consistently rated listeners who expressed disagreement as less skilled, regardless of the other traits of the listeners’ summaries. What does the text most strongly imply about how participants responded to expressions of disagreement?",
      "options": [
        "When participants felt personally invested in the topics they discussed, they were less likely to perceive listeners who expressed disagreement as attentive, regardless of evidence to the contrary in these listeners’ summaries.",
        "When participants encountered summaries from listeners who expressed disagreement with their views, participants tended to disregard evidence that the listeners had in fact been attentive.",
        "Although participants maintained their positions regardless of a summary’s level of detail, they tended to regard listeners who expressed disagreement as more attentive when these listeners provided more detailed summaries.",
        "Although participants were critical of expressions of disagreement, they gave higher ratings to listeners whose summaries included markers of attentiveness than to listeners whose summaries did not include these markers."
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-27",
      "questionText": "Hypothesizing that reliance on smartphones for information retrieval will lead a person to incorrectly remember instances of phone-assisted retrieval as instances of retrieval from memory, researchers asked participants general-knowledge trivia questions, instructing them to answer certain questions using only their smartphone and other questions using only their memory. When surveyed a week later, participants exhibited higher levels of misattribution for answers retrieved in the smartphone condition than for those retrieved in the memory condition, a finding that the researchers claimed supported their hypothesis. Which question would be most useful to answer in determining the validity of the researchers’ claim as it is presented in the text?",
      "options": [
        "Were participants as likely to remember the source of their information when asked a week later as they would have been if asked immediately after answering the trivia questions?",
        "Were participants less confident about the accuracy of information they were instructed to retrieve from a smartphone than they were of that retrieved from their own memory?",
        "How likely were participants to answer all the trivia questions correctly in both the smartphone and the memory conditions?",
        "How did participants attribute information they were instructed to retrieve from a smartphone in instances when they already knew that information independently of their phone?"
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-28",
      "questionText": "Global Strontium Seawater Curve 87 86 Sr/ Sr Age (Ma) 0.708980 6.20 0.709000 5.86 0.709020 5.40 0.709040 4.75 0.709060 3.00 The late Hemphillian (Hh) North American Land Mammal Age includes the subdivisions Hh3, 6.8 million years ago (Ma) to 6 Ma, and Hh4, 6 Ma to 4.75 Ma. While mammalian fossils have indicated that Florida’s Montbrook Fossil Site (MFS) and Palmetto Fauna of the Bone Valley Region (PFBV) date to Hh4, a more precise determination of the sites’ ages has proved challenging. Stephanie R. Killingsworth et al. compared average ratios of strontium-87 to strontium-86 ( 87 Sr/ 86 Sr) in fossil shark teeth from MFS and PFBV—0.709000 and 0.709028, respectively—to 87 Sr/ 86 Sr 87 86 ratios in the global strontium seawater curve, a record that shows how Sr/ Sr ratios in seawater correspond to numerical ages and that is used to date fossils and, by extension, fossil sites. The researchers concluded that ______ Which choice most effectively uses data from the table to complete the statement?",
      "options": [
        "mammalian fossil evidence offers less dating precision than do Sr/ Sr ratios in fossil shark teeth and that PFBV likely was deposited closer to the Hh3-Hh4 boundary than was MFS. 87 86",
        "the average Sr/ Sr ratios in the fossil shark teeth from MFS and PFBV only partially support the site age estimates previously established through mammalian fossil evidence.",
        "the average 87 Sr/ 86 Sr ratios in the fossil shark teeth from MFS and PFBV resolve previous uncertainty about the sites’ relative ages by indicating that both sites were deposited contemporaneously during the late Hh. 87 86",
        "the average Sr/ Sr ratios in the fossil shark teeth from MFS and PFBV corroborate that both MFS and PFBV fall within Hh4 but suggest that PFBV was likely deposited more recently than MFS."
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-29",
      "questionText": "60 50 40 30 20 10 0 noitubirtnoc fo egatnecreP Relative Contributions of Processes to Prokaryotic and Fungal Community Assembly in Qinghai-Tibetan Lakes v ari a bl e s e o l g e e c n ti e o o n u s s e d l i e s c p t e i o r n s al li m o i g t e a n ti i o z n i n g d n i s d p o e m r s i a n l a nt pr o c e s s m m o o o n h h fungal community prokaryotic community In a 2020 study, Jian Yang et al. examined prokaryotic and fungal microbial communities in Qinghai-Tibetan Plateau lake sediment to understand the relative contributions of various factors to community assembly, or formation. They quantified the contributions of environmental pressures (variable and homogeneous selection), dispersal limitation, homogenizing dispersal, and nondominant processes. Tolerance of environmental pressures is known to be higher in fungi than in prokaryotes, which the researchers hypothesize accounts for the finding that ______ Which choice most effectively uses data from the graph to complete the statement?",
      "options": [
        "homogenizing dispersal contributed substantially less to fungal community assembly than variable selection did.",
        "the total number of factors that contributed to community assembly was greater for prokaryotes than for fungi.",
        "variable selection contributed substantially less to fungal community assembly than to prokaryote community assembly.",
        "the contribution of homogeneous selection to community assembly was negligible for both fungi and prokaryotes."
      ],
      "correctAnswer": 2,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-30",
      "questionText": "The single origin hypothesis of iron metallurgy posits that the craft originated in Anatolia (West Asia) circa 2200–2000 BCE before diffusing to other parts of the world, including Africa. Some proponents of the hypothesis argue that iron production technologies first arrived in North Africa through Carthage, where the earliest evidence of ironworking dates to approximately 800–600 BCE, before these technologies spread to sub- Saharan Africa over the following centuries. However, excavation of multiple sites on the Adamawa plateau in Central Africa conducted by Étienne Zangato and Augustin Holl uncovered evidence of iron workshops that may have been in operation as late as 900–750 BCE in Gbabari and as early as 2300–1900 BCE in Ôboui and Gbatoro. These findings suggest that ______ Which choice most logically completes the text?",
      "options": [
        "iron production may have developed independently and relatively simultaneously in Anatolia and parts of Central Africa.",
        "iron production technologies found in Gbabari likely derived directly from technologies transmitted from Anatolia, but those found in Ôboui and Gbatoro did not.",
        "iron production technologies were likely transmitted from Anatolia to Central Africa via an alternate route than the one suggested by some proponents of the single origin hypothesis.",
        "iron production may have originated in Anatolia much earlier than the available evidence currently indicates."
      ],
      "correctAnswer": 0,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-31",
      "questionText": "While mammals collectively exhibit the highest ratio of brain size to body size among vertebrates, a team led by paleontologist Ornella Bertrand demonstrates that for ten million years following the extinction of dinosaurs, that ratio in fact shrank for mammals as they evolved to fill newly vacated ecological niches and their bodies increased in size more rapidly than their brains. Competition for resources tends to favor intelligence and thus large, complex brains, but during this period, the abundance of resources relative to mammalian population numbers likely moderated competition and facilitated an increase in body size. Bertrand and her team reason that as population numbers swelled, competition intensified, creating conditions that ______ Which choice most logically completes the text?",
      "options": [
        "heightened the advantage that large body size conferred on mammals in certain ecological niches.",
        "restricted resources so drastically that mammals struggled to secure enough food to maintain large brain sizes.",
        "favored an evolutionary increase in brain size relative to body size among mammals.",
        "encouraged mammals with large brain sizes to adapt to a range of ecological niches."
      ],
      "correctAnswer": 2,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-32",
      "questionText": "The presence of other individuals of the same species has been observed to mitigate stress in highly social mammals. To investigate whether this phenomenon, known as social buffering, also occurs in reptiles, researchers led by Chelsea E. Martin monitored stress responses in wild southern Pacific rattlesnakes (Crotalus helleri) in three experimental treatments: when alone, with a rope, and with a companion C. helleri. The researchers compared the percent change between baseline and peak heart rate in response to a (harmless) disturbance, with higher values indicating higher stress levels. Which finding, if true, would most directly support the idea that social buffering occurs among C. helleri?",
      "options": [
        "The average percent change in heart rate was lower among C. helleri with a companion than among solitary C. helleri and C. helleri with a rope.",
        "Average peak heart rates were highest among solitary C. helleri, but no differences were observed in average peak heart rates between C. helleri with a companion and C. helleri with a rope.",
        "C. helleri with a companion displayed a lower average baseline heart rate and lower average peak heart rate than did solitary C. helleri or C. helleri with a rope.",
        "Solitary C. helleri had higher average baseline heart rates than did C. helleri in the other treatments, but the average percent change in heart rate was smaller among solitary C. helleri than among C. helleri with a companion."
      ],
      "correctAnswer": 0,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-33",
      "questionText": "As juveniles, all white-necked jacobin hummingbirds display vibrantly blue head plumage; when they enter adulthood, males retain these blue feathers and most females molt to a drab green hue. However, 28% of adult female jacobins remain identical in coloration to juveniles and adult males. Based on field observations in Panama, a team of researchers reports that while adult males show a clear preference in mate selection for adult females with drab green feathers, they also engage in more antagonistic behavior toward those adult females than toward blue- feathered adult females when competing for resources. Therefore, the team hypothesizes that ______ Which choice most logically completes the text?",
      "options": [
        "adult male jacobins do not act antagonistically toward juvenile jacobins with blue head plumage when competing for resources.",
        "the percentage of blue-feathered females will increase until fewer than half of adult female jacobins are green-feathered.",
        "the occurrence of blue head plumage in adult female jacobins is driven by one or more factors not associated with mate attraction.",
        "coloration prevents green-feathered adult female jacobins from distinguishing between adult males and blue-feathered adult females."
      ],
      "correctAnswer": 2,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-34",
      "questionText": "Text 1 Many teleost fish species are protogynous, meaning that fertile females can become fertile males. One model holds that protogyny occurs when body size confers a greater reproductive advantage on males than on females. In teleost fish, body size is irrelevant to female reproduction, but among males (which tend to be larger than females), only individuals comparatively large enough to defend territory reproduce. An individual could thus maximize its lifetime reproductive success by staying female when small and becoming male upon reaching a critical size threshold. Text 2 Investigating protogyny in teleost fish, Alexander Goikoetxea and colleagues placed captured spotty wrasses of typical size distributions into two mixed-sex tanks. During the breeding season, they removed all males from tank 1 but none from tank 2. They observed that sexual change began in 81 percent of females in tank 1 but in no females in tank 2. Based on the texts, which choice best explains the difference in the outcomes of the two tanks in Goikoetxea and colleagues’ experiment (Text 2) using the model presented in Text 1?",
      "options": [
        "Once the males were removed from tank 1, territories in the tank were undefended and thus even small females could maximize their reproductive success by becoming male and taking over those territories, whereas only the largest females in tank 2 could successfully take over territories due to the ongoing presence of males in the tank.",
        "With no males left in tank 1, females were potentially large enough to defend territory as males and thus could gain an advantage by becoming male at their current size, whereas females in tank 2 may not have been large enough to outcompete the males in the tank and thus would have greater reproductive success by remaining female.",
        "Differences in body size among the females in tank 1 became irrelevant to reproductive success once the males were removed, thereby eliminating any advantage to becoming male, whereas the ongoing presence of males in tank 2 made differences in body size among the females in that tank relevant to their reproductive success.",
        "Since all males were removed from tank 1, the females in the tank could not reproduce regardless of their size and thus some became male, whereas the presence of males in tank 2 meant that females in that tank could reproduce without first becoming male and thus they remained female."
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-35",
      "questionText": "Before the Mariner 2 mission completed a successful flyby of Venus in 1962, astronomers’ ideas about the planet were little more than ______. Venus’s atmosphere is so thick that Earth-based observations had yielded very little information about the planet. Which choice completes the text with the most logical and precise word or phrase?",
      "options": [
        "summations",
        "conjectures",
        "conclusions",
        "exemplifications"
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-36",
      "questionText": "Guadalupe Romero Villanueva et al. conducted radiocarbon analysis of paint used in rock art at the Patagonian archaeological site Cueva Huenul 1, revealing that images of a comblike motif date to as early as 8,000 years ago, predating other paintings in the region by several millennia. The motif was subsequently reproduced multiple times at the site over the next 3,000 years, a period coinciding with extremely arid conditions and slightly negative population growth. The motif may therefore have functioned to help preserve cultural knowledge during a time of ecological and demographic stress. Which choice best describes the function of the underlined portion in the text as a whole?",
      "options": [
        "It identifies a consideration that factored into an interpretation of the rock art at Cueva Huenul 1 that is presented in the text.",
        "It provides context that informs the text’s claim about why the peoples of Patagonia chose Cueva Huenul 1 as a culturally significant site.",
        "It emphasizes the historical conditions that explain why production of the painted motif described in the text abruptly ceased after 3,000 years of continued use.",
        "It explains the environmental circumstances that account for the rarity of rock art dating to the same period as the motif discussed in the text."
      ],
      "correctAnswer": 0,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-37",
      "questionText": "The following text is from Rachel Heng’s 2023 novel The Great Reclamation. Ah Boon is fishing off the coast of Singapore. When he pulled up the nets, they contained only one kind of fish—black pomfrets, the flat diamonds of their bodies slick in the morning light. This uniformity did not surprise him; over the years, he’d learned that the waters here were temperamental. They could be relied upon for a good catch, but from time to time threw up only prawns or squid, and other times colorful varieties of fish that weren’t even supposed to be found in this region. He’d grown to accept the unpredictability, embracing it as a game to be played, like the reading of tea leaves or the grooves of a palm. ©2023 by Rachel Heng Taken together, the three underlined portions most clearly serve which function in the text as a whole?",
      "options": [
        "They provide examples of what Ah Boon most frequently catches in the area.",
        "They illustrate the changeable nature of the fishing grounds where Ah Boon is.",
        "They emphasize the wide variety of sea creatures that Ah Boon has caught on this particular fishing trip.",
        "They underscore Ah Boon’s lack of surprise at seeing sea creatures that aren’t usually found in the region."
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-38",
      "questionText": "Among stock-market investors, the practice of diversification, or distributing investment funds across many different companies in many different industries, is regarded as ______ since it protects investors from major losses if the value of one particular company or industry sector falls. Which choice completes the text with the most logical and precise word or phrase?",
      "options": [
        "contentious",
        "prudent",
        "unworkable",
        "optimistic"
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-39",
      "questionText": "Among saltwater fish species, there is a clear association between habitat latitude and morphological variety. While tropical species are ______ deep-bodied physical forms (body shapes that are laterally compressed but vertically extended), polar and temperate species are highly dispersed across the morphological spectrum. Which choice completes the text with the most logical and precise word or phrase?",
      "options": [
        "authenticated by",
        "habituated to",
        "contemporary with",
        "concentrated among"
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-40",
      "questionText": "Despite potential independent confirmation, the apparent detection in 2020 of phosphine (PH3)—a gas that on Earth almost exclusively derives from biological sources—in Venus’s cloud deck remains controversial, in part because Venus is thought to be uninhabitable. To evaluate such a finding’s plausibility, William Bains et al. modeled multiple abiotic PH3 pathways, including geochemical, atmospheric, and photochemical reactions, but none adequately explain the observed levels of PH3. If Venusian PH3 does exist, it would indicate insufficiencies in the current consensus on Venus’s chemistry. Which choice best describes the overall structure of the text?",
      "options": [
        "It outlines recent efforts to confirm the presence of a particular gas in Venus’s atmosphere, summarizes a research team’s evaluations of those efforts’ methodological shortcomings, and then explains why that team remains skeptical of the gas’s future detection.",
        "It explains why the consensus view of a particular gas in Venus’s atmosphere has recently become controversial, expands on a scientific team’s reasons for questioning that consensus, and then suggests that future observations of Venus’s atmosphere will likely be needed to settle the controversy.",
        "It introduces an unexpected observation of a particular gas in Venus’s atmosphere, presents an effort to investigate possible mechanisms that could explain that observation, and then notes an implication of that investigation’s findings.",
        "It compares the levels of a particular gas on Venus and Earth, sketches the chemical processes that account for differences in these levels, and then addresses some of the practical challenges of studying the presence of this gas on Venus more closely."
      ],
      "correctAnswer": 2,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-41",
      "questionText": "To produce batik, an Indonesian textile that originated as early as the 6th century CE, an artist creates patterns on fabric by skillfully applying wax to the surface and then dyeing it. Traditionally, the artist draws on the cloth using a canting, a pen-shaped tool that applies wax in fine lines or dots. To expedite this laborious process, the cap, a copper stamp that applies preset wax patterns, was introduced. Although the cap made the process of producing batiks much quicker, the canting is often preferred because it results in unique pieces. Which choice best describes the overall structure of the text?",
      "options": [
        "It introduces a traditional type of textile, suggests that it is a variation of an even older type of textile, and then explains a significant difference in how those types of textiles are produced.",
        "It establishes how a textile production technique originated, indicates how the technique has changed over time, and then suggests that renewed interest in the original technique is growing.",
        "It presents a method of textile production, identifies two approaches to that method, and then addresses the relative advantage of each approach.",
        "It conveys admiration of a certain style of textile, emphasizes the level of skill needed to produce the textile, and then urges broader recognition of the skill involved in producing the textile."
      ],
      "correctAnswer": 2,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-42",
      "questionText": "The following text is adapted from Edith Wharton’s 1911 novella Ethan Frome. The narrator has asked the woman he rents a room from about Ethan Frome, a town resident he encountered recently. Her mind was a store-house of innocuous anecdote and any question about her acquaintances brought forth a volume of detail; but on the subject of Ethan Frome I found her unexpectedly reticent. There was no hint of disapproval in her reserve; I merely felt in her an insurmountable reluctance to speak of him. As used in the text, what does the word “reserve” most nearly mean?",
      "options": [
        "Modesty",
        "Misgiving",
        "Constraint",
        "Composure"
      ],
      "correctAnswer": 2,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-43",
      "questionText": "The subscription model in which consumers who do not deliberately cancel their subscriptions automatically pay recurring fees for access to products and services benefits retailers when consumer ______ is high. Many of the 8.5 percent of subscribers who canceled their food and beverage subscriptions in January 2022 had stopped valuing their subscriptions long before then, but sellers profited from those customers’ passivity in the interim. Which choice completes the text with the most logical and precise word or phrase?",
      "options": [
        "inertia",
        "decisiveness",
        "evasion",
        "turnover"
      ],
      "correctAnswer": 0,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-44",
      "questionText": "Technological advances have prompted companies to increasingly rely on automation to streamline production. Armin Granulo and colleagues, however, found that for products with higher symbolic value (those viewed as contributing to individual self-expression), consumers prefer products made by humans rather than by robots, likely because human-made products are more strongly associated with uniqueness. When considering automation, therefore, companies—especially those specializing in products of symbolic value—should weigh trade-offs between efficiency gains and consumer preferences. Which choice best describes the function of the underlined sentence in the text as a whole?",
      "options": [
        "It presents evidence supporting the text’s argument that consumers prefer products with high symbolic value over products with low symbolic value.",
        "It refers to a finding presented in the previous sentence to recommend that companies that value product quality reconsider automating their production processes.",
        "It illustrates the need for additional research to evaluate the claim in the previous sentence that automation affects how consumers rate product uniqueness.",
        "It emphasizes that a research finding discussed in the text has practical implications that are particularly relevant for businesses making a certain class of product."
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-45",
      "questionText": "Though copies of The Adventures of Indiana Jones in Wenceslas Square in Prague on January 16, 1989—an underground computer game that was created anonymously in 1989 as an act of political protest against the authoritarian regime of what was then Czechoslovakia—were originally distributed ______, the game is now readily available online for anyone to play. Which choice completes the text with the most logical and precise word or phrase?",
      "options": [
        "succinctly",
        "dispassionately",
        "disingenuously",
        "surreptitiously"
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-46",
      "questionText": "To entice study participants, psychology researchers commonly offer a gift card or other compensation. However, this practice may undercut the applicability of the study’s results: people who join a study in response to ______ may differ in important ways from a representative sample of the population of interest. Which choice completes the text with the most logical and precise word or phrase?",
      "options": [
        "a propensity",
        "an inducement",
        "a paradigm",
        "an appeasement"
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-47",
      "questionText": "The work of Tobias Gerstenberg et al. on tracking eye movements supports a theory that people envision ______ scenarios when making causal judgments: when subjects were asked to look at two colliding billiard balls and judge whether one caused or prevented the other’s movement through a gate, their eyes looked at where the target ball would have gone if the ball that altered its path did not exist. Which choice completes the text with the most logical and precise word or phrase?",
      "options": [
        "ambivalent",
        "retrospective",
        "counterfactual",
        "analogical"
      ],
      "correctAnswer": 2,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-48",
      "questionText": "Typically, synthetic leather is petroleum based, but materials scientists searching for an ecologically sustainable alternative have used various bacteria that secrete linear chains of glucose, forming a dense mesh of cellulose called a pellicle, which is leatherlike except in color. The standard process for dyeing leather generates substantial wastewater and other undesirable byproducts, so adopting such a regimen would run counter to the ecological promise of the pellicle approach. To address this, Kenneth T. Walker and colleagues worked to modify Komagataeibacter rhaeticus bacteria to produce a pellicle with embedded pigmentation cells, thereby allowing the pellicle to “dye” itself from the inside. Which choice best describes the function of the underlined portion in the text as a whole?",
      "options": [
        "To concede that the researchers’ main goal as described in the text will be challenging to achieve due to the standard coloring approach being impractical for use on a pellicle",
        "To indicate the characteristic of conventional synthetic leathers that makes those leathers poorly suited to achieve the researchers’ main goal as presented in the text",
        "To describe a consideration that led the researchers to employ an alternative approach to coloring a pellicle that allowed them to achieve their main goal as presented in the text",
        "To illustrate how the researchers adapted the pellicle approach to overcome a potential impediment to their main goal as presented in the text"
      ],
      "correctAnswer": 2,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-49",
      "questionText": "In a 2020 paper, Arya Udry et al. cautioned that although similarities in the isotopic signatures of elements detected in Mars’s atmosphere and in Martian meteorites recovered on Earth make it tempting to treat the geochemical properties of the meteorites as ______ those of Mars’s interiors, Mars’s geology cannot be ascertained based solely on meteorite-sample analyses. Which choice completes the text with the most logical and precise word or phrase?",
      "options": [
        "contrivances of",
        "proxies for",
        "catalysts of",
        "deterrents to"
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-50",
      "questionText": "Text 1 Hycean planets are a class of exoplanets (planets outside our solar system) with oceans of liquid water—critical to supporting life—and atmospheres rich in hydrogen. Computer models have determined that for potential hycean planets, the range of the habitable zone (HZ), the distance from a star that allows a planet to retain liquid water on its surface, begins at about 1 astronomical unit (AU). In 2021, Nikku Madhusudhan et al. identified K2-18 b as a hycean candidate, noting that the planet is located right on the inner edge of the HZ. Text 2 In a 2023 paper, Shang-Min Tsai et al. claimed that the hydrogen-rich atmospheres of K2-18 b and other hycean candidates admit wavelengths of light that cause elevated surface temperatures and increased water evaporation. Unlike earlier assessments, Tsai et al.’s calculations therefore placed the inner edge for these planets’ HZ as far out as 3.85 AU. Based on the texts, how would Tsai et al. (Text 2) most likely respond to Madhusudhan et al.’s research, as presented in Text 1?",
      "options": [
        "By stating that the chemical composition of the atmosphere of the hycean candidate Madhusudhan et al. identified suggests that this planet’s surface is unlikely to harbor liquid water",
        "By maintaining that Madhusudhan et al. relied on a model whose estimates of surface temperatures on hycean candidates are likely too high",
        "By observing that unlike the hycean candidate Madhusudhan et al. discovered, most other types of planets with hydrogen-rich atmospheres are likely located within the HZ",
        "By arguing that K2-18 b and other hycean candidates are unlikely to support life because these planets are located too far from the stars they orbit"
      ],
      "correctAnswer": 0,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-51",
      "questionText": "Players of online games are largely aware that the games collect their data, and they’re often willing to trade some privacy for a fun experience. But the games are often quite ______ about what data they collect and why. Because of this, data-privacy advocates are seeking to expand online players’ knowledge of data collection practices and improve their ability to navigate privacy-setting features in games. Which choice completes the text with the most logical and precise word or phrase?",
      "options": [
        "opaque",
        "abrasive",
        "ambivalent",
        "outspoken"
      ],
      "correctAnswer": 0,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-52",
      "questionText": "Text 1 is adapted from E.M. Forster’s 1910 novel Howards End. Text 2 discusses Howards End. King’s Cross and St. Pancras are adjacent railway terminals in London from which trains travel to the countryside. Text 1 To Margaret the station of King’s Cross had always suggested Infinity. Its very situation—withdrawn a little behind the facile splendours of St. Pancras—implied a comment on the materialism of life. Those two great arches, colourless, indifferent, shouldering between them an unlovely clock, were fit portals for some eternal adventure, whose issue might be prosperous, but would certainly not be expressed in the ordinary language of prosperity. Text 2 The interplay between opposing ideological positions in Howards End is broadly articulated in the novel’s organization of geographic space. On the one hand, the modern metropolis of London represents capitalism’s emphasis on pragmatism and the accumulation of material wealth; on the other, the English countryside, accessible via King’s Cross, fosters an idealism that values tradition, authentic personal connection, and the aesthetic—what the novel calls “the infinite.” Based on the texts, the author of Text 2 would most likely agree with which statement about King’s Cross, as it is depicted in Text 1?",
      "options": [
        "King’s Cross has a relatively unassuming appearance whose sharp contrast with the more aesthetically pleasing appearance of St. Pancras suggests to Margaret the ascendancy of the pragmatic capitalistic outlook among London’s inhabitants.",
        "Because it is situated at the beginning of Margaret’s journey from the city to the country, King’s Cross emblematizes the intrusion of the forces of materialism and modernity into the rural spaces that the novel associates with idealism and tradition.",
        "The austerity conveyed by King’s Cross’s appearance mirrors Margaret’s disillusionment with the prospect of having authentic connections with other people in a world that chiefly values more conventional forms of prosperity.",
        "As a point of connection between London and the countryside, King’s Cross suggests to Margaret the possibility of experiencing the intangible abundance promised by the kinds of authentic engagements that the novel’s rural spaces seem to offer."
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-53",
      "questionText": "While researching a topic, a student has taken the following notes: Suzanne K. Birner led a study analyzing rocks on the seafloor to better understand the history of Earth’s mantle. Rock samples were collected from two seafloor ridges. The researchers determined the samples’ period of formation (the Archean eon) and oxidation level (extremely low). High temperatures in the Archean likely caused the rocks’ low oxidation. Birner’s team suggests the oxidation of Earth’s mantle has remained stable over time, contrary to previous theories. The findings help explain the unique conditions that allowed life to develop on Earth. The student wants to present the study’s research methods. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      "options": [
        "Birner led a study to better understand the history of Earth’s mantle and explain the conditions that allowed life to develop.",
        "To further analyze the origins of Earth’s unique conditions, researchers focused on rocks from the Archean eon, when Earth’s temperatures were extremely high.",
        "By studying these ancient rocks, the team aimed to challenge previous theories about changes in Earth’s mantle over time.",
        "Birner’s team analyzed the age and oxidation levels of rock samples collected from two seafloor ridges."
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-54",
      "questionText": "While researching a topic, a student has taken the following notes: A 2024 study analyzed the facial expressions of wolves and domestic dogs. In the study, facial expressions were coded under 46 different facial actions. The “ears rotator” facial action is seen in wolves. Dog breeds with erect (wolf-like) ears can produce the “ears rotator” facial action. Dog breeds with flopped or semi-flopped (non-wolf-like) ears cannot produce the “ears rotator” facial action. The student wants to compare dog breeds with wolf-like ears to dog breeds with non-wolf-like ears. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      "options": [
        "In a 2024 study, dog breeds with non-wolf-like ears were able to produce the same facial movements that wolves could.",
        "One difference between dog breeds with wolf-like ears and dog breeds without them is that wolf-like breeds cannot produce the “ears rotator” facial action.",
        "Non-wolf-like ears are flopped or semi-flopped, but wolf-like ears are different: they are erect and can produce the “ears rotator” facial action.",
        "Like wolves, dog breeds with erect ears can produce the “ears rotator” facial action, while those with flopped or semi-flopped ears cannot."
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-55",
      "questionText": "In his 2023 collection The Diaspora Sonnets, Filipino American poet Oliver de la Paz leverages the sonnet form’s “diamond-like quality of precision,” as he describes it. The poems often adhere scrupulously to the form’s centuries-old conventions, such as its characteristic fourteen- line length. In the twelve-line poem “Diaspora Sonnet at the Feeders Before the Freeze,” ______ de la Paz playfully subverts sonnet conventions, the poem’s truncated length conveying a sense of abruptness. Which choice completes the text with the most logical transition?",
      "options": [
        "fittingly,",
        "similarly,",
        "for example,",
        "by contrast,"
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-56",
      "questionText": "While researching a topic, a student has taken the following notes: The nautical mile (6,076 feet) is the measure of distance used in seafaring navigation. A nautical mile directly correlates to one minute (1/60th of a degree) of latitude. The curvature of Earth affects the accurate measurement of long distances when using flat maps. Measuring distances with latitude and longitude coordinates takes into account Earth’s curvature. Mariners use nautical charts marked with latitude and longitude to quickly calculate distances and positions. The student wants to explain why nautical miles are used to measure distances in seafaring navigation. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      "options": [
        "Nautical miles are a measure of distance equal to one minute of latitude, which is a feature nautical charts use to calculate distances and positions.",
        "Since they directly correlate to the coordinates on nautical charts, which take into account Earth’s curvature, nautical miles are an efficient way to calculate distances at sea.",
        "Using nautical miles for navigation at sea takes Earth’s curvature into account, whereas measuring distances with latitude and longitude coordinates does not.",
        "Nautical charts use latitude and longitude to measure long distances; these charts are more accurate than flat maps for measuring distances in seafaring navigation because they account for Earth’s curvature."
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-57",
      "questionText": "A team of ornithologists documented patterns of conspecific brood parasitism among wood ducks (Aix sponsa) in California. The researchers observed several female wood ducks visiting dozens of nesting sites and laying eggs to be incubated by other nesting A. sponsa. Subject 7F64B, ______ visited a select few nesting sites before laying and incubating her eggs herself. Which choice completes the text with the most logical transition?",
      "options": [
        "in particular,",
        "alternatively,",
        "for example,",
        "similarly,"
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-58",
      "questionText": "One proposed boundary between Earth’s atmosphere and outer space is the Kármán line, 100 km above sea level. Based on the work of physicist Theodore von Kármán, this line marks the theoretical height at which an aircraft no longer remains aloft using the force of lift. ______ an aircraft sustains flight past this altitude primarily by its velocity, reaching a speed sufficient to maintain an orbit but not to generate enough lift from the thin air. Which choice completes the text with the most logical transition?",
      "options": [
        "For instance,",
        "Instead,",
        "Granted,",
        "Regardless,"
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-59",
      "questionText": "While researching a topic, a student has taken the following notes: Producing the nutrient-rich cyanobacterium L. maxima at industrial scale requires high-quality samples of L. maxima DNA. Yirlis Yadeth Pineda-Rodriguez and a team of researchers at the University of Córdoba, Colombia, evaluated the quantity and purity of L. maxima DNA extracted using three different DNA extraction kits. CTAB 2X (kit 1) had a DNA yield of 2,134 nanograms per microliter (ng/µL) and a purity ratio of 2.2. Pbact (kit 2) had a DNA yield of 157 ng/µL and a purity ratio of 1.6. Pplant (kit 3) had a DNA yield of 12.5 ng/µL and a purity ratio of 1.5. According to the researchers, Pbact was the most effective because it was the only one with both a sufficiently high yield and a purity rate close to the ideal of 1.8. The student wants to emphasize the significance of a similarity between two of the kits. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      "options": [
        "Due to their insufficient yield or purity, CTAB 2X and Pplant were deemed by the researchers to be less effective than Pbact.",
        "Compared to CTAB 2X, which had a DNA yield of 2,134 ng/µL, both Pbact and Pplant had insufficient yields; Pplant, in particular, was ineffective due to its low yield.",
        "CTAB 2X and Pplant both had a DNA yield above 10 and a purity ratio above 1.4.",
        "With the ideal purity ratio being 1.8, CTAB 2X and Pbact were equal in purity, according to the researchers."
      ],
      "correctAnswer": 0,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-60",
      "questionText": "In Color Charts: A History (2024), anthropologist Anne Varichon uses vivid prose to describe various systems and tools that have been used over the past few centuries for categorizing colors. ______ Varichon’s book features many high-quality images of these color presentation tools—from fanlike arrangements of hued fabric swatches to clusters of dyed feathers. Which choice completes the text with the most logical transition?",
      "options": [
        "Consequently,",
        "Additionally,",
        "That said,",
        "Specifically,"
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-61",
      "questionText": "While researching a topic, a student has taken the following notes: The farm-size transition hypothesis predicts that economic pressures associated with modernization result in smaller farms amalgamating into larger-scale commercial farms. Masters et al. (2013): The average farm size in Asia “already has or will soon begin to rise.” Promkhambut et al. (2023) argue that small rice farms in Thailand have adopted modern farming methods without a significant scaling- up of farm size. Promkhambut et al.: “The persistence of [small] rice farms [in Thailand] does not represent a ‘failure’ to modernize...or a ‘truncated’ transition—it is a response to modernization.” The student wants to make and support a claim regarding the applicability of the farm-size transition hypothesis to Thailand. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      "options": [
        "Taken together, the studies by Masters et al. and Promkhambut et al. suggest that rice farms in Thailand have responded to the economic pressures associated with modernization by expanding in size.",
        "Masters et al. report that the average farm size “already has or will soon begin to rise” in Asia, a finding that is consistent with the farm-size transition hypothesis.",
        "The predicted shift to large-scale commercial farming may not hold true for rice farms in Thailand, where, according to Promkhambut et al., rice farms have remained small as they’ve modernized.",
        "Although the farm-size transition hypothesis may be applicable to some countries in Asia, it is inconsistent with the development of rice farming in Thailand."
      ],
      "correctAnswer": 2,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-62",
      "questionText": "While researching a topic, a student has taken the following notes: Shanawdithit (1801–1829) was a Beothuk cartographer (mapmaker). Her maps of Newfoundland’s Beothuk Lake outline both the lake and various points around the lake where encounters between the Indigenous Beothuk people and British colonists occurred. Her maps are notable for depicting the experiences the Beothuk had within the landscape. Contemporary Potawatomi cartographer Margaret Pearce: Indigenous cartography emphasizes “experienced space, or place, as opposed to the Western convention of depicting space as universal, homogenized, and devoid of human experience.” Pearce: “Indigenous cartographies are as diverse as Indigenous cultures, from Hawaiian performative cartographies to Navajo verbal maps and sand paintings.” The student wants to describe Shanawdithit’s approach and explain its significance. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      "options": [
        "Shanawdithit’s maps are part of a broader tradition of Indigenous cartography that, according to Pearce, ranges from “Hawaiian performative cartographies to Navajo verbal maps and sand paintings.”",
        "Shanawdithit mapped Beothuk Lake through significant encounters that occurred there, an approach described as “depicting space as universal [and] homogenized.”",
        "According to Pearce, Indigenous cartography, such as Shanawdithit’s maps of Beothuk Lake, emphasizes “experienced space, or place,” with a variety of approaches that reflect the diversity of Indigenous cultures.",
        "By depicting experiences of the Beothuk that occurred around Beothuk Lake, Shanawdithit’s maps reflect Indigenous cartography’s emphasis on “experienced space, or place” rather than the landscape alone."
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-63",
      "questionText": "Charles Demuth’s 1931 painting Chimney and Water Tower is a classic Precisionist work. The Precisionists strove for cold, machine-like perfection, with crisp lines, geometric shapes, and smooth, brushstroke-free surfaces. ______ Precisionist works often feature skyscrapers, bridges, and factories, highlighting these angular structures’ engineered symmetry. Which choice completes the text with the most logical transition?",
      "options": [
        "Accordingly,",
        "In the end,",
        "That said,",
        "However,"
      ],
      "correctAnswer": 0,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-64",
      "questionText": "Star actress Kiki Omeili, who has appeared in 47 Nollywood films, is one of numerous luminaries to be pictured in Nigerian portraitist Iké Udé’s exhibition Nollywood Portraits. ______ referred to Nollywood—Nigeria’s $3 billion film industry—as “Africa’s vivid mirror par excellence,” honors its legacy with his vivid classical portraits of Omeili and her peers. Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "Udé, has",
        "Udé has",
        "Udé",
        "Udé, having"
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-65",
      "questionText": "At the Chicxulub asteroid impact crater in Mexico, the presence of many fossilized microbacteria, which seem to have thrived there despite the extreme heat that persisted after the Chicxulub impact, ______ claims that bacteria are among the planet’s most resilient organisms. Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "have reinforced",
        "reinforces",
        "are reinforcing",
        "reinforce"
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-66",
      "questionText": "During a 2022 expedition led by research zoologist Andrea Quattrini, scientists discovered a new species of black coral off the coast of Puerto Rico. Like other black corals, the newly discovered species, which they named Aphanipathes puertoricoensis, has coiled branching structures that ______ it survive in the deep sea. Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "has helped",
        "helps",
        "helping",
        "help"
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-67",
      "questionText": "In biology, many initially disordered systems will naturally move toward greater order according to the principle of self-organization, a conceptual framework for pattern ______ biologists believe can be used to explain a range of organic phenomena, from population dynamics to the sociality of bees and ants. Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "formation, that some",
        "formation. Some",
        "formation that some",
        "formation; some"
      ],
      "correctAnswer": 2,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-68",
      "questionText": "For her film I Am Somebody (1970), a documentary about a successful months-long strike held by Black female hospital workers in Charleston, South Carolina, director Madeline Anderson chose a narrator who had participated in the ______ by allowing the narrative to be shaped by one of their own, amplified the agency and power the workers possessed. Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "protest. A decision that",
        "protest; a decision that,",
        "protest, a decision that,",
        "protest a decision that,"
      ],
      "correctAnswer": 2,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-69",
      "questionText": "In 1977, legendary Puerto Rican performer Rita Moreno won an Emmy Award, making her one of the rare talents to earn the highest honors in television, music, film, and stage entertainment—the Emmy, Grammy, Oscar, and Tony ______ the achievement is known as “winning the EGOT.” Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "awards, respectively;",
        "awards; respectively",
        "awards, respectively—",
        "awards, respectively,"
      ],
      "correctAnswer": 0,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-70",
      "questionText": "Fernando Palma Rodríguez creates robotic sculptures that combine mechanical elements with materials like feathers, soil, and seeds. The artist is from a rural farming community outside Mexico City, and he studied engineering in college. The natural and mechanical ______ highlight these two aspects of his background. Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "materials that Palma Rodríguez uses in his art,",
        "materials that Palma Rodríguez uses in his art",
        "materials, that Palma Rodríguez uses in his art,",
        "materials, that Palma Rodríguez uses in his art"
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-71",
      "questionText": "In a US national election, one might expect major-party campaigns to focus on the most populous states. However, if polls and past voting data suggest that the outcome in a given state is a foregone conclusion, a campaign will not invest its resources there. Ultimately, a state’s voting record and polling data, not its population size, ______ its importance to campaigns. Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "determines",
        "determining",
        "has determined",
        "determine"
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-72",
      "questionText": "That the expansionist appetites of colonial European powers had their sights set on his country was evident to Siam’s King ______ deterring those ambitions through international diplomacy and domestic reform was perhaps his foremost achievement. Though his reign ended roughly twenty years before Siam became known by its modern name of Thailand, King Chulalongkorn is often credited with ushering the nation into modernity. Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "Chulalongkorn;",
        "Chulalongkorn that",
        "Chulalongkorn,",
        "Chulalongkorn"
      ],
      "correctAnswer": 0,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-73",
      "questionText": "Scala is referred to as a compiled programming language because it typically incorporates a compiler—a tool that translates lines of code into executable commands. Compiling isn’t exclusive to certain programming ______ any language can incorporate this tool. Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "languages. However,",
        "languages; however,",
        "languages, however,",
        "languages, however;"
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-74",
      "questionText": "While the ancient Celts—Iron Age peoples who inhabited parts of western and central Europe—weren’t a single unified group, their art often featured common elements. These included intricate patterns of interlocking spiral lines, which often held symbolic ______ of birds, horses, and other animals; and inlaid enamel accents. Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "significance; depictions",
        "significance, depictions",
        "significance: depictions",
        "significance. Depictions"
      ],
      "correctAnswer": 0,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-75",
      "questionText": "When a given term—“self-fulfilling prophecies” and “role models” are two well-known examples—is generally accepted and frequently used, ______ susceptible to obliteration by incorporation (OBI). In cases of OBI, widely used terms are rarely, if at all, attributed to the individuals who coined them. Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "they often become",
        "these often become",
        "this often becomes",
        "it often becomes"
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-76",
      "questionText": "In premodern Europe, one could sail from the east coast of England to the Netherlands or France faster than one could travel by land to England’s capital, London. In that era, historian Michael Pye argues in his 2015 book The Edge of the World: A Cultural History of the North Sea and the Transformation of Europe, the North Sea did more to link the various peoples, cultures, and economies on ______ shores than to divide them. Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "its",
        "it’s",
        "they’re",
        "their"
      ],
      "correctAnswer": 0,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-77",
      "questionText": "The radial velocity method, a means of indirect planetary discovery, has detected previously unknown exoplanets at vast distances from ______ the gas giant 55 Cancri d; at 60 light-years away, the Neptune-like planet Pi Mensae d; and, as of 2023, over 1,000 other exoplanets that are too far away and dim to be observed directly. Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "Earth at 41 light-years away:",
        "Earth: at 41 light-years away,",
        "Earth, at 41 light-years away,",
        "Earth at 41 light-years away,"
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-78",
      "questionText": "Alberto Gabriele, author of Reading Popular Culture in Victorian Print, tracks the transnational dissemination of works by author Mary Elizabeth Braddon via the magazine ______ from 1866 to 1899 and distributed throughout the Australian cities of Melbourne, Adelaide, and Hobart; the continental European cities of Brussels, Paris, and Turin; and cities in Turkey, India, and Jamaica, this magazine helped make Braddon’s serialized novels globally available. Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "Belgravia; published",
        "Belgravia. Published",
        "Belgravia published",
        "Belgravia, published"
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-79",
      "questionText": "As jazz singer Sarah Vaughan honed her vocal abilities—acquiring a sophisticated timbre and precise control over pitch, dynamics, and ______ she earned comparisons to opera icon Leontyne Price, one of her personal heroes. The comparisons highlight how Vaughan, a jazz star, had transcended genre boundaries with her singing prowess. Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "vibrato:",
        "vibrato,",
        "vibrato—",
        "vibrato"
      ],
      "correctAnswer": 2,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-80",
      "questionText": "Dong Lai and Diego J. Muñoz’s work on circumbinary disk accretion—a process in which, due to gravity, material from an orbiting disk spirals inward and accumulates onto two stars or black holes—relies heavily on simulations. Lai and Muñoz recognize the need for direct ______ recommending evolving binary star systems as a promising avenue for future study. Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "observation; however,",
        "observation, however,",
        "observation. However,",
        "observation, however;"
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-81",
      "questionText": "In his 2011 book, historian Sebouh David Aslanian quantifies the reading patterns of early modern Armenian merchants from New Julfa. Aslanian’s macroanalysis ______ nearly 1,000 book titles published between 1512 and 1800 shows not only the steady popularity of religious texts but also a broadening interest in secular books, especially those on history and geography. Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "examined",
        "examines",
        "had examined",
        "examining"
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-82",
      "questionText": "Within Earth’s biomes, there are four main types of desert: arid, semiarid, coastal, and cold. The roughly ______ is classified as an arid desert. Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "200,000 km Puntland Desert, 2",
        "200,000 km , Puntland Desert 2",
        "200,000 km Puntland Desert 2",
        "200,000 km , Puntland Desert,"
      ],
      "correctAnswer": 2,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-83",
      "questionText": "In the eastern Chinese city of Suzhou, known as a hub for silk manufacturing, a unique tradition of embroidery ______ back over two thousand years—one that includes iconic double-sided stitching with different images on each side—remains popular with modern audiences, preserving the city’s cultural heritage. Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "dates",
        "date",
        "dating",
        "has dated"
      ],
      "correctAnswer": 2,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-84",
      "questionText": "Arms outstretched, right wrist over left with both hands dangling, South Korean musician Psy galloped from one foot to the other in the iconic dance of his 2012 international hit song “Gangnam Style.” Later, a statue depicting Psy’s arm-positioning during the dance was erected in the place that inspired the song’s ______ Gangnam District in Seoul, South Korea. Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "name;",
        "name.",
        "name",
        "name—"
      ],
      "correctAnswer": 3,
      "section": "english",
      "questionType": "multiple-choice"
    },
    {
      "id": "rw-hard-85",
      "questionText": "The Balkan nation of Bosnia and Herzegovina does not have one president but ______ as members of the office of the presidency, one representing the nation’s Bosniaks, one its Serbs, and one its Croats, these elected officials take turns serving as the office’s chairperson. Which choice completes the text so that it conforms to the conventions of Standard English?",
      "options": [
        "three, known",
        "three. Known",
        "three who are known",
        "three, who are known"
      ],
      "correctAnswer": 1,
      "section": "english",
      "questionType": "multiple-choice"
    }
  ]
}

