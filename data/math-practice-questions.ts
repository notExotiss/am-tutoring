export interface MathPracticeQuestion {
  id: string
  questionText: string
  options: string[]
  correctAnswer: number | string
  section: 'math'
  questionType: 'multiple-choice' | 'open-ended'
}

export const mathPracticeQuestionsByDifficulty: Record<'easy' | 'medium' | 'hard', MathPracticeQuestion[]> = {
  "easy": [
    {
      "id": "math-124bc42b",
      "questionText": "101 C 8 6 4- 2- Al D 2 4 6 8 10 t=x Rectangle ABCD shown has a length of 7 units and a width of 2 units. What is the area, in square units, of rectangle ABCD?",
      "options": [
        "5",
        "9",
        "14",
        "28"
      ],
      "correctAnswer": 2,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-c8ab85ad",
      "questionText": "Which expression represents the area, in square inches, of a square with a side length of 35 inches?",
      "options": [
        "V 35",
        "35 + 35",
        "(4) (35)",
        "352"
      ],
      "correctAnswer": 3,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-4a141e77",
      "questionText": "t x° 72° Note: Figure not drawn to scale. In the figure, line p is parallel to line r, and line t intersects both lines. What is the value of x?",
      "options": [
        "36",
        "72",
        "180",
        "252"
      ],
      "correctAnswer": 1,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-f3f06c3a",
      "questionText": "Note: Figure not drawn to scale. In the rectangle shown, x = 7 centimeters and y = 5 centimeters. What is the area, in square centimeters, of the rectangle?",
      "options": [
        "7",
        "12",
        "35",
        "40"
      ],
      "correctAnswer": 2,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-186fdbca",
      "questionText": "A circle has a diameter of 12.6 centimeters. What is the radius of the circle, in centimeters?",
      "options": [],
      "correctAnswer": "6.3|63/10",
      "section": "math",
      "questionType": "open-ended"
    },
    {
      "id": "math-cab8f907",
      "questionText": "4 9 Note: Figure not drawn to scale. The figure shows the lengths, in units, of two sides of a triangle. What is the area, in square units, of the triangle?",
      "options": [
        "18",
        "13",
        "9",
        "4"
      ],
      "correctAnswer": 0,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-de9148c4",
      "questionText": "C 3 12 Note: Figure not drawn to scale. Which equation shows the relationship between the side lengths of the triangle shown?",
      "options": [
        "12 • 3 = C",
        "12 + 3 = c",
        "122+ 32 = 02",
        "122 - 32 = c2"
      ],
      "correctAnswer": 2,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-d21270da",
      "questionText": "t 24° $ Note: Figure not drawn to scale. In the figure, line t intersects lines r and s. Which additional piece of information is sufficient to prove that lines r and s are parallel?",
      "options": [
        "x < 24",
        "x = 24",
        "х > 24",
        "x - 24 = 360"
      ],
      "correctAnswer": 1,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-17049054",
      "questionText": "The length of a side of square X is 9 centimeters. The area of rectangle Y is 32 square centimeters. What is the total area, in square centimeters, of square X and rectangle Y?",
      "options": [
        "145",
        "113",
        "82",
        "81"
      ],
      "correctAnswer": 1,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-dbd89c59",
      "questionText": "The scatterplot shows the relationship between the number of swans, y, in a certain population and the number of years since 1970, x, where 0 ≤ x ≤ 50. 3001 270 240 210- 180 • 150 120 90 • 60- • 10 20 30 40 50 Which of the following equations is the most appropriate exponential model for the data shown in the scatterplot?",
      "options": [
        "y = 43(1.04)-*",
        "y = 43(1.04)*",
        "y = 288(1.04)-*",
        "y = 288(1.04)*"
      ],
      "correctAnswer": 1,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-559476f4",
      "questionText": "The bar graph shows the frequency of each data value in a data set. 10 9 8 7 6 5 4 3 2 1 0 1 2 3 4 5 6 Data value What is the frequency of data value 2 in this data set?",
      "options": [],
      "correctAnswer": "6",
      "section": "math",
      "questionType": "open-ended"
    },
    {
      "id": "math-de799680",
      "questionText": "A cluster fly is traveling at a velocity of 76 centimeters per second. What is this velocity, in millimeters per second? (1 centimeter = 10 millimeters)",
      "options": [
        "7,600",
        "836",
        "760",
        "86"
      ],
      "correctAnswer": 2,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-3cf2698e",
      "questionText": "The number of cells of a certain bacteria doubles every 25 minutes during its growth period when placed in a medium of milk in a controlled laboratory environment. If a sample of 830 cells of this bacteria is placed in milk in a controlled laboratory environment, which function f best represents the number of cells of the bacteria x minutes after the growth period begins, where x is less than the number of minutes in the growth period?",
      "options": [
        "f(x) = 830(₴) %",
        "f (x) = 830(2) 35 c. f (x) = 830($)*",
        "",
        "f (x) = 830(3) 25"
      ],
      "correctAnswer": 1,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-f123e039",
      "questionText": "4 3 -2 -1+ 4 -3 -2 -1 -17 1 2 3 4 4 -5 -6- 7 The graph of a system of a linear and a quadratic equation is shown. Which system of equations is represented by the graph?",
      "options": [
        "y =-5х y =x= +8",
        "y = -5x y=x2-8",
        "y = 5x y =x=+8",
        "y = 5x y =x2-8"
      ],
      "correctAnswer": 3,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-91aa9aa9",
      "questionText": "Which expression is equivalent to (9x\" + 6) - (8х2)?",
      "options": [
        "7",
        "17х2 + 6",
        "x2 -6",
        "x + 6"
      ],
      "correctAnswer": 3,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-fe62f031",
      "questionText": "The function f is defined by f (X) = 3x5 . In the xy-plane, the graph of y = g (x) is the result of shifting the graph of y = f (x) up 4 units. Which equation defines the function g?",
      "options": [
        "g (х) = 3x + 4",
        "g (x) = 3x5-4",
        "g (х) = 3x2",
        "g (x) = 12x5"
      ],
      "correctAnswer": 0,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-0e926898",
      "questionText": "Students and chaperones from a middle school are going on a field trip to a museum. Admission to the museum will cost $8.50 for each student and $12 for each chaperone. It will cost a total of $730 for admission to the museum for all 83 people on the field trip. How many students are going on the field trip?",
      "options": [
        "31",
        "70",
        "76",
        "86"
      ],
      "correctAnswer": 2,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-5eb4918d",
      "questionText": "If 9x + 4 = 67, what is the value of 90x + 40?",
      "options": [
        "7",
        "70",
        "130",
        "670"
      ],
      "correctAnswer": 3,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-935f3403",
      "questionText": "For a restaurant owner to purchase a pizza oven at a total price of 13,000 dollars, a onetime down payment is required, and then fixed monthly payments are made for the remaining amount owed for the pizza oven. The equation 13,000 = 2,800 + 200t represents this situation, where t is the number of fixed monthly payments that are made. Which of the following is the best interpretation of 200 in this context?",
      "options": [
        "The amount, in dollars, of the down payment",
        "The amount, in dollars, of each fixed monthly payment",
        "The total amount, in dollars, paid for the pizza oven after t fixed monthly payments",
        "The total number of fixed monthly payments"
      ],
      "correctAnswer": 1,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-0c490cd5",
      "questionText": "Sam has a flag with an area of 110 square inches (in?). Sam plans to enlarge the flag by sewing on pieces of colored nylon, where each piece would increase the flag's area by 64 in?. Which equation gives the flag's total area y, in square inches, after Sam sews on x pieces of nylon?",
      "options": [
        "y = 64x",
        "y = 64 + 110x",
        "y = 110 + 64x",
        "y = 174x"
      ],
      "correctAnswer": 2,
      "section": "math",
      "questionType": "multiple-choice"
    }
  ],
  "medium": [
    {
      "id": "math-e89f63bf",
      "questionText": "The sum of the measures of two angles in a triangle is 64°. What is the measure of the third angle?",
      "options": [
        "26°",
        "52°",
        "116°",
        "128°"
      ],
      "correctAnswer": 2,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-ecc98c87",
      "questionText": "k r W° x° z° Note: Figure not drawn to scale. In the figure shown, line k intersects lines r and s. If w = 147, which additional piece of information is sufficient to prove that lines r and s are parallel?",
      "options": [
        "x = 33",
        "y = 147",
        "w + y = 180",
        "y + z = 180"
      ],
      "correctAnswer": 1,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-408b39ea",
      "questionText": "(x-3)' + (y +16)' = 289 The graph of the given equation is a circle in the xy-plane. The point (q, s) lies on the circle. Which of the following is NOT a possible value of q?",
      "options": [
        "-17",
        "-3",
        "3",
        "17"
      ],
      "correctAnswer": 0,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-2757549e",
      "questionText": "A B x° D Note: Figure not drawn to scale. In the figure, BC is parallel to DE. If the length of DE is 147 and the length of AE is 245, what is the value of tan x°?",
      "options": [
        "147/196",
        "147/245",
        "196/245",
        "245/147"
      ],
      "correctAnswer": 2,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-267f82b5",
      "questionText": "A circle in the xy-plane has the equation (x - 19)? + (y - 17)' = 64k2, where k is a positive constant. Which of the following gives the center of the circle and its radius?",
      "options": [
        "The center is at (19, 17), and the radius is 8",
        "The center is at (19, 17), and the radius is 8k.",
        "The center is at (19, 17), and the radius is 64.",
        "The center is at (19, 17), and the radius is 64k."
      ],
      "correctAnswer": 1,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-25cc5327",
      "questionText": "The base of a right rectangular pyramid has a length of 27 centimeters and a width of 2 centimeters. The height of this pyramid is 7 centimeters. What is the volume, in cubic centimeters, of this pyramid?",
      "options": [],
      "correctAnswer": "126",
      "section": "math",
      "questionType": "open-ended"
    },
    {
      "id": "math-11301fb6",
      "questionText": "The difference between the measure of angle A and the measure of angle B is - & a radians. Which expression shows the difference between the measure of angle A and the measure of angle B, in degrees?",
      "options": [
        "- бП . 360°",
        "- бт . 180°",
        "—т•180°",
        "-6. 180°"
      ],
      "correctAnswer": 1,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-697b3954",
      "questionText": "r E D Note: Figure not drawn to scale. In the figure shown, AABC is congruent to ABDE. If r = 54 and s = 26, what is the length of CD?",
      "options": [
        "26",
        "27",
        "28",
        "54"
      ],
      "correctAnswer": 2,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-ffc39dc5",
      "questionText": "D E C F Note: Figure not drawn to scale. In the figure shown, CD = EF and FC = DE. If x = 65 and y = 30, what is the measure of LCDE?",
      "options": [
        "30°",
        "65°",
        "95°",
        "130°"
      ],
      "correctAnswer": 2,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-8364487a",
      "questionText": "T 25° V U 76 Note: Figure not drawn to scale. Triangle TUV is dilated by a scale factor of ½ to obtain triangle T'U'V' (not shown), where I corresponds to I' and U corresponds to U'. What is the measure, in degrees, of angle V'?",
      "options": [
        "25",
        "38",
        "50",
        "76"
      ],
      "correctAnswer": 0,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-42155bac",
      "questionText": "The area of one of the bases of a right circular cylinder is 81 square centimeters, and the volume of the cylinder is 2,187 cubic centimeters. What is the height, in centimeters, of the cylinder?",
      "options": [
        "27",
        "2,025",
        "2,106",
        "177,147"
      ],
      "correctAnswer": 0,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-1b687ae3",
      "questionText": "The area of a triangle is 36 square units. If the height of this triangle is 2 units, what is the length, in units, of the base of this triangle?",
      "options": [],
      "correctAnswer": "36",
      "section": "math",
      "questionType": "open-ended"
    },
    {
      "id": "math-0013adbd",
      "questionText": "t W° 134° x° k Note: Figure not drawn to scale. In the figure, line t intersects lines j and k. Which additional piece of information is sufficient to prove that lines j and k are parallel?",
      "options": [
        "x = 46",
        "y = 46",
        "w = 134",
        "z = 134"
      ],
      "correctAnswer": 0,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-3e1bd4e2",
      "questionText": "error Researchers studied a sample of a species of fish from a certain location. The researchers found that the mean length of fish in the sample was 16.59 millimeters. Based on the sample mean and margin of error, the researchers estimated that the mean length of all fish of this species from this location was between 15.86 and 17.32 millimeters. What is the margin of error, in millimeters?",
      "options": [
        "0.73",
        "2.19",
        "15.86",
        "16.59"
      ],
      "correctAnswer": 0,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-d73a67d7",
      "questionText": "Which of the following lists represents a data set with the smallest standard deviation?",
      "options": [
        "51, 52, 54, 56, 57",
        "52, 52, 54, 56, 56",
        "52, 53,54, 55, 56",
        "53, 54, 54, 54, 55"
      ],
      "correctAnswer": 3,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-b3547a10",
      "questionText": "A group of 10 botanists recorded data on the germination rates of a certain type of seed for one growing season. The scatterplot shows the relationship between the number of seeds planted, x, and the number of seeds that germinated, y, for each of the botanists. A line of best fit is also shown. 500 400- 300 200 100 100 200 300 400 500 Which of the following is the best interpretation of the slope of the line of best fit in this context?",
      "options": [
        "The number of seeds planted is predicted to increase by 60 seeds every 100 days.",
        "The number of seeds planted is predicted to increase by 300 seeds every 100 days.",
        "The number of seeds that germinate is predicted to increase by 60 seeds for every additional 100 seeds that are planted.",
        "The number of seeds that germinate is predicted to increase by 300 seeds for every additional 100 seeds that are planted."
      ],
      "correctAnswer": 2,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-2bab1399",
      "questionText": "A researcher is designing a study to investigate the average number of hours participants in a training course spend on a particular activity per day. The researcher will report an estimated average number of hours participants in the training course spend on this activity per day with an associated margin of error. The researcher is considering using a random sample of either 115 or 230 participants from the training course. Which of the following would be the most likely effect of using the larger random sample compared to the smaller random sample?",
      "options": [
        "The reported margin of error would be lower.",
        "The reported margin of error would be higher.",
        "The reported average number of hours would be lower.",
        "The reported average number of hours would be higher."
      ],
      "correctAnswer": 0,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-70a2776f",
      "questionText": "As part of a study of lake conditions, the water temperature was recorded at different depths below the surface of a certain lake. The data shown in the scatterplot give the recorded temperature, in degrees Celsius, for 7 depths, in meters, below the surface of the lake. 20 Temperature 15 (degrees Celsius) 10 5 iо 20 30 40 50 60 t0 80*x Depth (meters) Which of the following is closest to the slope of a line of best fit for the data shown?",
      "options": [
        "-0.17",
        "-2.17",
        "-6.02",
        "-8.02"
      ],
      "correctAnswer": 0,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-71b74a44",
      "questionText": "y = 7,400(0.87)* The given equation estimates the value, in dollars, of a certain piece of equipment x years after it was purchased. According to the given equation, what was the estimated value, in dollars, of the piece of equipment at the time it was purchased?",
      "options": [
        "740",
        "6,438",
        "7,400",
        "8,700"
      ],
      "correctAnswer": 2,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-6bd40794",
      "questionText": "(x — 16) (x — 10) (x + 7) (x + 17) = 0 What is a positive solution to the given equation?",
      "options": [],
      "correctAnswer": "10|16",
      "section": "math",
      "questionType": "open-ended"
    },
    {
      "id": "math-5f10c095",
      "questionText": "-9- -8- -6 -4 N-Ú- -1 TO -1+ 4 6 10 12 14 The graph of a system of a linear equation and a quadratic equation is shown. A solution to the system is (x, y). What is a possible value of x?",
      "options": [
        "4",
        "5",
        "7.2",
        "8"
      ],
      "correctAnswer": 0,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-769b612d",
      "questionText": "The function g is defined by g (x) = 105x-8 3. What is the value of x when g (x) is equal to 10,000?",
      "options": [
        "11/3",
        "12/5",
        "3",
        "4"
      ],
      "correctAnswer": 1,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-04887c7b",
      "questionText": "f(x) = 2x+3 9 (x) = 7x -2 h (x) = 5x +6 The functions f, g, and h are defined as shown. If f (X) • g (x) - h (x) = ax? + bx + c, where a, b, and c are constants, what is the value of b?",
      "options": [
        "—5",
        "12",
        "20",
        "22"
      ],
      "correctAnswer": 1,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-f8871ccd",
      "questionText": "Which expression is equivalent to 2 (x - z) (x + 8)?",
      "options": [
        "2x² − 72",
        "2x² + 7x − 72",
        "2x² − x − 36",
        "x² + 7x − 36"
      ],
      "correctAnswer": 1,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-088bc84e",
      "questionText": "If 2 (5x) = 6, what is the value of 5x?",
      "options": [
        "4/5",
        "5/3",
        "3",
        "4"
      ],
      "correctAnswer": 2,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-f8fa0cf0",
      "questionText": "9r = 7(r +7) What value of r is the solution to the given equation?",
      "options": [],
      "correctAnswer": "24.5|49/2",
      "section": "math",
      "questionType": "open-ended"
    },
    {
      "id": "math-30b1e186",
      "questionText": "In the xy-plane, which of the following does NOT contain any points that are part of the solution set to 5x - 7y > 35?",
      "options": [
        "The x-axis",
        "The region where x > 0 and y > 0",
        "The region where x < 0 and y < 0",
        "The region where x < 0 and y > 0"
      ],
      "correctAnswer": 3,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-d914abec",
      "questionText": "To complete a landscaping project, Adam charges a fee of $20.00 for his equipment and $9.50 per hour spent working on the project. To complete this same landscaping project, Caroline charges a fee of $17.00 for her equipment and $10.00 per hour spent working on the project. If x represents the number of hours spent working on the landscaping project, what are all the values of x for which Caroline's total charge is greater than Adam's total charge?",
      "options": [
        "5≤ x≤6",
        "6≤x≤7",
        "x < 5",
        "x >6"
      ],
      "correctAnswer": 3,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-ea8bd66f",
      "questionText": "y =4.x 5x - 3y =-14 The solution to the given system of equations is (x, y). What is the value of x + y?",
      "options": [
        "4",
        "6",
        "8",
        "10"
      ],
      "correctAnswer": 3,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-fc4a0d2a",
      "questionText": "g (x) = 3 (14x - 15) What is the y-coordinate of the y-intercept of the graph of y = g (x) - 2 in the xy-plane?",
      "options": [
        "-47",
        "-45",
        "-17",
        "-15"
      ],
      "correctAnswer": 0,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-2493c767",
      "questionText": "s (x) = 133 - 4x The function s shown gives the number of spoons, s (x), remaining in a dispenser x minutes after the dispenser had been loaded with spoons. Which statement is the best interpretation of s (3) = 121?",
      "options": [
        "The number of spoons remaining in the dispenser decreased by a total of 3 spoons after 121 minutes.",
        "There were 3 spoons remaining in the dispenser 121 minutes after the dispenser had been loaded with spoons.",
        "There were 121 spoons remaining in the dispenser 3 minutes after the dispenser had been loaded with spoons.",
        "The number of spoons remaining in the dispenser decreased by a total of 121 spoons after 3 minutes."
      ],
      "correctAnswer": 2,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-340afb12",
      "questionText": "Ellen bought two types of snack bags for a school event. Each box of chips Ellen bought contained 24 bags and cost $11. Each box of crackers Ellen bought contained 16 bags and cost $9. It cost Ellen $497 before tax to buy 968 bags. If x is the number of boxes of chips and y is the number of boxes of crackers that Ellen bought, which of the following systems of equations represents this situation?",
      "options": [
        "11x + 16y = 968 24x + 9y = 497",
        "11x + 9y = 968 24x + 16y = 497",
        "11x + 9y = 497 24x + 16y = 968",
        "9x + 11y = 497 16x + 24y = 968"
      ],
      "correctAnswer": 2,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-e8fd6d99",
      "questionText": "Terry has a goal to collect at least 16 items per week for a donation drive. This week, Terry has collected 4 items. If x represents the additional number of items Terry needs to collect this week to meet the goal, which inequality represents this situation?",
      "options": [
        "4 - x ≤ 16",
        "4 + x ≤ 16",
        "4 - x ≥ 16",
        "4 + x ≥ 16"
      ],
      "correctAnswer": 3,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-080e75c2",
      "questionText": "Number of participants (in thousands) 2- 2 4 6 8 10 12 14 16 Years since 2010 The functions f and g model the number of participants, in thousands, in two different programs x years since 2010. The graphs of y = f(x) and y = g(x) are shown. Which of the following could represent functions f and g?",
      "options": [
        "f(x) = - IIx+13 9 (x) = 1x+7",
        "f (x) =-1Ix+7 9 (х) = IIx +13",
        "f (x) = - IIx +13 9 (х) = x+7",
        "f (x) =-Ix+7 9 (х) = [IX+ 13"
      ],
      "correctAnswer": 2,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-4722abd2",
      "questionText": "Line p is defined by 2y + 8x = 11. Line r is perpendicular to line p in the xy-plane. What is the slope of line r?",
      "options": [
        "-4",
        "-4",
        "1",
        "4"
      ],
      "correctAnswer": 2,
      "section": "math",
      "questionType": "multiple-choice"
    }
  ],
  "hard": [
    {
      "id": "math-2c3aefc9",
      "questionText": "R P S Note: Figure not drawn to scale. In rectangle PQ RS, the length of line segment QS is 2,344 and the length of side PS is 8 more than the length of side R.S. What is the length of side QR?",
      "options": [],
      "correctAnswer": "38",
      "section": "math",
      "questionType": "open-ended"
    },
    {
      "id": "math-d12bca0a",
      "questionText": "(2, k) (8,0) =x Note: Figure not drawn to scale. The circle shown has its center at (0, 0). What is the value of k?",
      "options": [
        "6",
        "7",
        "8",
        "V60"
      ],
      "correctAnswer": 3,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-1fe41c6b",
      "questionText": "The table gives the areas and perimeters of two similar rectangles, where n is a constant. Area (square Perimeter inches) (inches) Rectangle A 630 210 Rectangle B 2,520 n What is the value of n?",
      "options": [
        "2,100",
        "1,680",
        "840",
        "420"
      ],
      "correctAnswer": 3,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-1dc7e423",
      "questionText": "In triangle ABC, the measure of angle A is 52° and AC* = 30. In triangle PQ.R, the measure of angle P is 52° and PR = 120. Which additional piece of information is sufficient to prove that triangle ABC is similar to triangle PQR?",
      "options": [
        "AB = 50 and PQ = 50.",
        "AB = 50 and QR = 200.",
        "The measures of angle B and angle R are 32° and 96°, respectively.",
        "The measures of angle B and angle Q are 52° and 32°, respectively."
      ],
      "correctAnswer": 2,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-30aa51b7",
      "questionText": "4 • 8 2 2 4 6 +=x 8 2 4 6 8+ A rectangle is formed by the four points shown. What is the area, in square units, of the rectangle?",
      "options": [],
      "correctAnswer": "50",
      "section": "math",
      "questionType": "open-ended"
    },
    {
      "id": "math-8493fd10",
      "questionText": "x+XV7+y2-1-65=0 The given equation, where t is a constant, defines a circle in the xy-plane. The radius of this circle is V 83. What is the value of t?",
      "options": [
        "73",
        "71 c.37",
        "",
        "35"
      ],
      "correctAnswer": 1,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-c4a9c94d",
      "questionText": "B D A C Note: Figure not drawn to scale. In the figure, AD and BC intersect at point D. If the length of BD is 5 and the tangent of angle C'AD is 1.3, what is the length of AD?",
      "options": [],
      "correctAnswer": "6.5|13/2",
      "section": "math",
      "questionType": "open-ended"
    },
    {
      "id": "math-f389569d",
      "questionText": "What is the perimeter of an equilateral triangle with a height of 39v 3?",
      "options": [
        "117",
        "117/3",
        "234",
        "1,521V3"
      ],
      "correctAnswer": 2,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-e3158182",
      "questionText": "Acute angle P has a measure of p radians, and acute angle T'has a measure of t radians. The function g is defined by g(x) = p(8)* + 6t. If sin p = cos t, which of the following represents the value g(O) in terms of t?",
      "options": [
        "6t + T",
        "6t",
        "5t + T",
        "5t + 7"
      ],
      "correctAnswer": 3,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-179edb12",
      "questionText": "A right circular cone has a height of 22 centimeters (cm) and a base with a diameter of 18 cm. The volume of this cone is ntt cm\". What is the value of n?",
      "options": [],
      "correctAnswer": "594",
      "section": "math",
      "questionType": "open-ended"
    },
    {
      "id": "math-b5d62bba",
      "questionText": "M L P Note: Figure not drawn to scale. In the figure, LQ intersects MP at point R, and LM is parallel to PQ. The lengths of MR and R.P are 8 and 14 units, respectively. The area of ALMR is 36 square units. What is the area of APQR, in square units?",
      "options": [
        "576",
        "144",
        "63",
        "141"
      ],
      "correctAnswer": 3,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-98e02472",
      "questionText": "In right triangle XYZ, angles X and Z are acute angles. Point R lies on XZ such that Y R is perpendicular to XZ. The measure of LXZY is a°, the measure of LXY Ris b°, and the length of XY is 19. If sin a°— 13, what is the value of tan 6º?",
      "options": [],
      "correctAnswer": "2.4|12/5",
      "section": "math",
      "questionType": "open-ended"
    },
    {
      "id": "math-e6c557f9",
      "questionText": "The edge length, in inches, of cube Y is &f the edge length, in inches, of cube X. The surface area, in square inches, of cube Y is n times the surface area, in square inches, of cube X. What is the value of n?",
      "options": [
        "7,18",
        "3,772",
        "88",
        "14"
      ],
      "correctAnswer": 0,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-7ce2e728",
      "questionText": "For triangles ABC'and FGH, angles B and G each measure 51®, the length of AB is 6, and the length of FG is 18. Which additional piece(s) of information is(are) sufficient to prove that triangle ABC is similar to triangle FGH? 1. The measure of angle A is equal to the measure of angle F. Il. The measure of angle C'is equal to the measure of angle H. III. The length of FH is 3 times the length of AC.",
      "options": [
        "I is sufficient, Il is sufficient, and Ill is sufficient.",
        "I is sufficient and Il is sufficient, but Ill is not.",
        "Il is sufficient and Ill is sufficient, but l is not.",
        "Ill is sufficient, but l is not and Il is not."
      ],
      "correctAnswer": 1,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-a5ff1a96",
      "questionText": "In the xy-plane, circle M is the graph of the equation (x - 4)? + (y - 5)? = 9. Circle P has the same center as circle M but has a radius that is twice the radius of circle M. Which equation represents circle P?",
      "options": [
        "(x-4)? +(9-5)' = 18",
        "(2-4)? +(y-5)'= 36",
        "(x-8)? + (y-10)?=9",
        "(x -8)2 + (3-10)2= 18"
      ],
      "correctAnswer": 1,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-73e1b793",
      "questionText": "Right rectangular prism P is similar to right rectangular prism Q. The volume of prism P is 972 cubic centimeters (cm*), and the volume of prism Q is 36 cm'. One edge of prism P has a length of 12 cm. What is the length, in cm, of the corresponding edge of prism Q?",
      "options": [],
      "correctAnswer": "4",
      "section": "math",
      "questionType": "open-ended"
    },
    {
      "id": "math-9fdc4eaa",
      "questionText": "A right square pyramid has a total surface area of 70,560 square inches, and the combined surface area of the four lateral faces of this pyramid is 38,160 square inches. What is the height, in inches, of this pyramid?",
      "options": [
        "56",
        "90",
        "106",
        "180"
      ],
      "correctAnswer": 0,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-f6ca90cc",
      "questionText": "A right prism has a square base with side lengths of 10 inches. The height of the prism is 58 inches. What is the volume, in cubic inches, of the prism?",
      "options": [],
      "correctAnswer": "5800",
      "section": "math",
      "questionType": "open-ended"
    },
    {
      "id": "math-7a11ceea",
      "questionText": "m AL D Note: Figure not drawn to scale. In the figure, segment AD and segment BE intersect at point C. Segment AD is perpendicular to line l at point A. Which of the following additional pieces of information is(are) sufficient to determine that triangle ABC is congruent to triangle DEC? I. Segment AD is perpendicular to line m at point D. II. AC = 13 and DC = 13",
      "options": [
        "I is sufficient by itself, but ll is not.",
        "Il is sufficient by itself, but l is not.",
        "I is sufficient by itself, and Il is sufficient by itself.",
        "Neither I nor Il is sufficient by itself."
      ],
      "correctAnswer": 3,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-858809e7",
      "questionText": "A B l F G x° C D Note: Figure not drawn to scale. In the figure, EG and AD intersect at point F, and line e is parallel to line j. If EF = 0.5CD and FG = 2.25CD, which of the following must be true? I. AB = 2.25EF II. FG = 0.5AB III. FG = A5",
      "options": [
        "I only",
        "II only",
        "I and II",
        "Il and III"
      ],
      "correctAnswer": 1,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-4fb972f2",
      "questionText": "In right triangle Q R.S, the length of hypotenuse SQ is 4V 82 and the length of side QR is 4. What is the length of side RS?",
      "options": [],
      "correctAnswer": "36",
      "section": "math",
      "questionType": "open-ended"
    },
    {
      "id": "math-149021da",
      "questionText": "A circle has center P, and points A and B lie on the circle. The measure of arc AB is 45° and the length of arc AB is 4 units. What is the length, in units, of the radius of the circle?",
      "options": [],
      "correctAnswer": "16",
      "section": "math",
      "questionType": "open-ended"
    },
    {
      "id": "math-4757123b",
      "questionText": "Trapezoid A and trapezoid B are similar. The length of each side of trapezoid A is 41 times the length of the corresponding side of trapezoid B. The area of trapezoid A is how many times as large as the area of trapezoid B?",
      "options": [],
      "correctAnswer": "1681",
      "section": "math",
      "questionType": "open-ended"
    },
    {
      "id": "math-1dacfb94",
      "questionText": "D 30° A F Note: Figure not drawn to scale. In triangle ABC', AB = BC. Points D and E lie on line segments AB and BC', respectively, such that line segments DE and AC' are parallel. Point O is the midpoint of line segment DE, and the measure of LOAC' is 30°. Point F lies on line segment AC, and line segment BF passes through point O. If AB = 81 and AO = BO, what is the length of line segment BE?",
      "options": [],
      "correctAnswer": "54",
      "section": "math",
      "questionType": "open-ended"
    },
    {
      "id": "math-10e059a6",
      "questionText": "The measure of angle A is 216 radians. The measure of angle Bis 36 times the measure of angle A. What is the value of cos B?",
      "options": [
        "0",
        "½ c.12",
        "",
        "V3"
      ],
      "correctAnswer": 3,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-9f9112ab",
      "questionText": "The measure of angle L is 60 degrees. If the measure of angle L is \" radians, where n is a constant, what is the value of n?",
      "options": [],
      "correctAnswer": "3",
      "section": "math",
      "questionType": "open-ended"
    },
    {
      "id": "math-6c67dd47",
      "questionText": "Z X Y Note: Figure not drawn to scale. In the figure shown, the measure of angle X is 54°. The length of XY is 26 units and the length of XZ is 19 units. What is the area, in square units, of triangle XYZ?",
      "options": [
        "247",
        "494",
        "247 sin 54°",
        "494 sin 54°"
      ],
      "correctAnswer": 2,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-27f1db42",
      "questionText": "In the xy-plane, circle F is defined by the equation (x + 8)? + (y +8)' = 25. Circle G has the same center as circle F, and the radius of circle Ce le unla grecater than the radlus or oirte &. Crcie Ci I detine y dine aquatien (28 + 8° + (9 + 8)' = p. Whete ris a constane Whar lste",
      "options": [],
      "correctAnswer": "49",
      "section": "math",
      "questionType": "open-ended"
    },
    {
      "id": "math-44d67c6c",
      "questionText": "х2 + y? - 10x- 8y - 14n= 0 The given equation represents circle A in the xy-plane, where n is a constant. Point (11, 8) lies on circle B, which has the same center but twice the diameter as circle A. What is the value of n?",
      "options": [],
      "correctAnswer": "-2",
      "section": "math",
      "questionType": "open-ended"
    },
    {
      "id": "math-28ff3966",
      "questionText": "A square scale drawing has a side length of 55 inches, and 1 inch on the drawing represents an actual distance of 19 miles. A larger version of the same drawing is printed as a square with the side length 65% longer than the side length of the previous drawing. On the larger drawing, which of the following is closest to the actual distance, in miles, represented by 1 inch?",
      "options": [
        "6.65",
        "11.52",
        "31.35",
        "35.75"
      ],
      "correctAnswer": 1,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-f6c18a66",
      "questionText": "For data set A, the table summarizes the distribution of the number of deliveries received by an office each day during a period of 11 days. Deliveries Days 0 2 3 2 4 2 5 2 6 1 7 1 13 1 The data value 13 was recorded in error and is removed from data set A to create data set B, which consists of the remaining 10 data values. Which statement best compares the median of data set A and the median of data set B?",
      "options": [
        "The median of data set B is less than the median of data set",
        "The median of data set B is greater than the median of data set",
        "The median of data set B is equal to the median of data set",
        "There is not enough information to compare the medians of the two data sets."
      ],
      "correctAnswer": 2,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-89ff6a0a",
      "questionText": "For 100 buttons, the table summarizes the distribution by group and diameter. Diameter (millimeters) Less than Group 20 20 to 30 Greater than 30 Group 1 12 8 3 Group 2 17 18 Group 3 10 32 0 One of these buttons will be selected at random. What is the probability of selecting a button with a diameter that is less than or equal to 30 millimeters, given that it is not in group 2? (Express your answer as a decimal or fraction, not as a percent.)",
      "options": [],
      "correctAnswer": ".9538|62/65",
      "section": "math",
      "questionType": "open-ended"
    },
    {
      "id": "math-8bb94668",
      "questionText": "The speeds of objects A, B, and C are a meters per second, b meters per second, and c meters per second, respectively. If the speed of object A is 5,900% of the speed of object C and the speed of object C is 0.008% of the speed of object B, which expression represents the value of a + b in terms of c?",
      "options": [
        "1,840c",
        "5,908c",
        "6,025c",
        "12,559c"
      ],
      "correctAnswer": 3,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-4c5ea142",
      "questionText": "On average, a certain plant grows 87 millimeters every m months. At this rate, which expression represents the number of millimeters, on average, the plant grows every k years?",
      "options": [
        "297",
        "29k",
        "1,014m",
        "1,044k"
      ],
      "correctAnswer": 3,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-1b96c116",
      "questionText": "A rectangle has an area of 3,168 square inches. What is the area, in square feet, of this rectangle? (1 foot = 12 inches)",
      "options": [
        "22",
        "56.3",
        "264",
        "675.4"
      ],
      "correctAnswer": 0,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-f496d2c0",
      "questionText": "The table shows the distribution of rooms in a certain facility by seating capacity. Seating capacity Proportion Less than 18 seats 26% 18-40 seats 21% 41-65 seats 29% Greater than 65 seats 24% If a room in this facility is selected at random, which of the following is closest to the probability of selecting a room that has a seating capacity greater than 65 seats, given that the room has a seating capacity of at least 18 seats?",
      "options": [
        "0.24",
        "0.32",
        "0.50",
        "0.92"
      ],
      "correctAnswer": 1,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-da978ee6",
      "questionText": "A researcher surveyed a random sample of 1,020 people from a certain city to estimate the percentage of people who support a recently announced proposal. From the survey, the researcher estimated that 86% of people from the city support this proposal, with an associated margin of error of 2.13%. The researcher repeated the survey with a random sample of people from the city that was double the original sample size. Assuming the margins of error were calculated in the same way, which of the following is true about the margin of error associated with the estimate from the larger sample?",
      "options": [
        "The margin of error is between 2.13% and 3.13%.",
        "The margin of error is between 4.13% and 5.13%.",
        "The margin of error is greater than 5.13%.",
        "The margin of error is less than 2.13%."
      ],
      "correctAnswer": 3,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-6feae9c3",
      "questionText": "At a recreation center, visitors used the exercise room for a total of t hours in July. At the same recreation center, visitors used the exercise room for 3.49t hours in August. What is the percent increase in the number of hours visitors used the exercise room from July to August?",
      "options": [
        "2.49%",
        "3.49%",
        "249%",
        "349%"
      ],
      "correctAnswer": 2,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-cf2be18d",
      "questionText": "a, 26, 29, b, 31, 47, с For the given data set, the data values are listed in ascending order, where a, b, and c are constants. For this data set, the mean is 36, the median is 29, and the range is 72. What is the value of c?",
      "options": [
        "54",
        "72",
        "81",
        "98"
      ],
      "correctAnswer": 2,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-98818acf",
      "questionText": "The number of audiobooks in a library increased by 131% from last year to this year. The number of audiobooks in the library last year was n, and the number of audiobooks in the library this year is bn, where b and n are constants. What is the value of b?",
      "options": [],
      "correctAnswer": "2.31",
      "section": "math",
      "questionType": "open-ended"
    },
    {
      "id": "math-f01108a8",
      "questionText": "y =9(7)*+c-6 How many times does the graph of the given equation in the xy-plane cross the x-axis, where a, b, and c are positive constants such that a > 7 and b > c?",
      "options": [
        "Zero",
        "One",
        "Two",
        "Three"
      ],
      "correctAnswer": 1,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-46308566",
      "questionText": "p2 + 9т =2r-55 In the given equation, g is an integer constant. The given equation has no real solutions. What is the largest possible value of q?",
      "options": [],
      "correctAnswer": "16",
      "section": "math",
      "questionType": "open-ended"
    },
    {
      "id": "math-38c90632",
      "questionText": "The expression 22+102 is equivalent to I + 14ST , Where p and w are constants. What is the value of zu?",
      "options": [],
      "correctAnswer": "27",
      "section": "math",
      "questionType": "open-ended"
    },
    {
      "id": "math-e833de9a",
      "questionText": "x2 + y2 = 36 y =mx +4 In the given system of equations, m and b are negative constants. In the xy-plane, the graphs of the equations in the given system intersect at the point (-5, y), where y < O. Which expression represents the value of b?",
      "options": [
        "-5m + VII",
        "5m - v1",
        "-20m + 4V11",
        "20m - 4V11"
      ],
      "correctAnswer": 3,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-58b4c6f3",
      "questionText": "The function h is defined by h (x) = a* + b, where a and b are positive constants. The graph of y = h (x) in the xy-plane passes through the points (0, 10) and (2, 13). What is the value of ab?",
      "options": [
        "13",
        "18",
        "20",
        "26"
      ],
      "correctAnswer": 1,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-7bbfbe70",
      "questionText": "A lab analyst observes a sample of a substance. An exponential model estimates that the mass, in grams, of the sample decreases by 24% every 22.96 minutes. Which of the following equations could represent this model, where M is the estimated mass, in grams, of the sample t minutes after the lab analyst began observing the sample?",
      "options": [
        "M = 100(0.24)*+22.96",
        "M = 100(0.24) 22.96",
        "M = 100(0.76) *+22.96",
        "M = 100(0.76) 2296"
      ],
      "correctAnswer": 3,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-5da5c665",
      "questionText": "4x2 - 5x - 5 =0 What is the greatest solution to the given equation?",
      "options": [
        "5/8 - √105/8",
        "5/8 + √105/8",
        "5/4 - √105/4",
        "5/4 + √105/4"
      ],
      "correctAnswer": 1,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-a1e65979",
      "questionText": "The function f is a quadratic function. In the xy-plane, the graph of y = f (x) has a vertex at (1, 9) and passes through the points (2, 33) and (-1,105). What is the value of f (-2) - f (0)?",
      "options": [
        "81",
        "129",
        "192",
        "225"
      ],
      "correctAnswer": 2,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-00165291",
      "questionText": "The expression 6x* + 31x' + 35 can be rewritten as (3x? + a) (2x\" + b), where a and b are positive integers, or as (3x* + c) (2x2 + d). where c and d are positive nonintegers. What is the value of a + c?",
      "options": [],
      "correctAnswer": "15.5|31/2",
      "section": "math",
      "questionType": "open-ended"
    },
    {
      "id": "math-c8db0e19",
      "questionText": "Ay +272=3212 In the given equation, x, y, and z are positive numbers. Which expression is equivalent to y?",
      "options": [
        "(4x−3z)/(12x²z²)",
        "√((4x−3z)/(12x²z²))",
        "1/(3xz²−4x²z)",
        "√(1/(3xz²−4x²z))"
      ],
      "correctAnswer": 1,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-5acbdc30",
      "questionText": "The function f is defined by f(x) = 56(0.19)*. For any positive integer n, the value of f(n) is p% less than the value of f(n - 1). What is the value of p?",
      "options": [
        "19",
        "44",
        "56",
        "81"
      ],
      "correctAnswer": 3,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-c95686e9",
      "questionText": "h (t) = -16t2 + b The function h estimates a ball's height, in feet, above a floor t seconds after the ball is released, where b is a constant. The function estimates that the ball is 19.36 feet above the floor when it is released at t = 0. How many seconds after being released does the function estimate the ball will reach the floor?",
      "options": [],
      "correctAnswer": "1.1|11/10",
      "section": "math",
      "questionType": "open-ended"
    },
    {
      "id": "math-7bf77c19",
      "questionText": "The functions p and r are defined by the equations shown, where a and b are integer constants such that a < band b < 0. lf y = p (x) and y = r (x) are graphed in the xy-plane, which of the following equations displays, as a constant or coefficient, the y-coordinate of the y-intercept of the graph of the corresponding function? 1. p (x) = a(4.1)* + 6 II. r (x) = a(4.1)*+b",
      "options": [
        "I only",
        "Il only",
        "I and II",
        "Neither l nor Ii"
      ],
      "correctAnswer": 3,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-9a1f1941",
      "questionText": "14x - 3 =-9 How many solutions does the given equation have?",
      "options": [
        "Zero",
        "One",
        "Two",
        "Infinitely many"
      ],
      "correctAnswer": 0,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-30596346",
      "questionText": "7(x - k) (16 - х?) = 0 In the given equation, k is a positive constant. The sum of the solutions to the equation is 59. What is the value of k?",
      "options": [],
      "correctAnswer": "59",
      "section": "math",
      "questionType": "open-ended"
    },
    {
      "id": "math-efc469c4",
      "questionText": "-14(5x - 2)? + 6(5х -3)2 The given expression can be rewritten as 4x? + Ex + &, where a, b, and c are constants. What is the value of a + 6 + c?",
      "options": [
        "—612",
        "-306",
        "-102",
        "-17"
      ],
      "correctAnswer": 0,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-2289b199",
      "questionText": "3/п17рб 5n3 (1/рб) For all positive values of n and p, the given expression is equivalent to which of the following? 1 () (8) i Snlly",
      "options": [
        "Ionly",
        "Il only",
        "I and II",
        "Neither | nor |II"
      ],
      "correctAnswer": 2,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-d4572f55",
      "questionText": "x -34 t -17 t +23 0 t + 46 For a linear relationship between x and y, the table gives three values of x and their corresponding values of y, where t is a constant. Which equation represents this relationship?",
      "options": [
        "y =-2x +t+23",
        "у = 2x + t+ 23",
        "y=17x+t+46",
        "y= 17x+t+46"
      ],
      "correctAnswer": 3,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-107d0c62",
      "questionText": "0.10x + 0.20y = 0.17 (x + y) The equation gives a volume x, in gallons, of a 10% solution that could be mixed with a volume y, in gallons, of a 20% solution to produce a 17% solution. According to this equation, what volume, in gallons, of the 20% solution could be mixed with 90.0 gallons of the 10% solution to produce a 17% solution? (Assume that the volume of the mixture is the sum of the volumes of the two solutions before they were mixed.)",
      "options": [],
      "correctAnswer": "210",
      "section": "math",
      "questionType": "open-ended"
    },
    {
      "id": "math-55ea0659",
      "questionText": "x(r-9) +4 = 19x +27 In the given equation, r is a positive integer. If the given equation has exactly one solution, what CANNOT be the value of r?",
      "options": [
        "4",
        "9",
        "23",
        "28"
      ],
      "correctAnswer": 3,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-59813abf",
      "questionText": "38(x - n) = 38y + 38n One of the equations in a system of two linear equations is given, where n is a positive constant. The system has no solution. Which equation could be the second equation in this system?",
      "options": [
        "4X - 4y = 8n",
        "4x + 4y = 4n",
        "4x + 4y = 8n",
        "4x - 4y = 4n"
      ],
      "correctAnswer": 3,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-1a2a0f59",
      "questionText": "A yoga studio is offering a deal where the first session is free, the second session is half off the regular price, and the remaining sessions are at the regular price. If the regular price of a session is $25.40, which function f gives the total cost, in dollars, of purchasing x sessions using this deal, where x ≥ 2?",
      "options": [
        "f (х) = 25.40(x - 1) + 12.70",
        "f (x) = 25.40(x - 2) + 12.70",
        "f (x) = 25.40 (x — 1) + 12.70 (x — 2)",
        "f (x) = 25.40 (x - 2) + 12.70 (х - 1)"
      ],
      "correctAnswer": 1,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-590d662d",
      "questionText": "While walking on a trail, Mary stopped to read a trail sign. The graph shows the total distance y, in meters, Mary had walked on the trail x minutes after leaving the trail sign. 9001 800 700 600- 500 400 300 200 100 1 4 7 9 10 What distance, in meters, did Mary walk on the trail in the 10 minutes after leaving the trail sign?",
      "options": [],
      "correctAnswer": "500",
      "section": "math",
      "questionType": "open-ended"
    },
    {
      "id": "math-5e9b6079",
      "questionText": "y = 7x + 18 One of the equations in a system of two linear equations is given. The system has no solution. Which equation could be the second equation in the system?",
      "options": [
        "-21x + y = 54",
        "-21x + y = 18",
        "—7х + y = 21",
        "-7x + y = 18"
      ],
      "correctAnswer": 2,
      "section": "math",
      "questionType": "multiple-choice"
    },
    {
      "id": "math-18ac8354",
      "questionText": "-14- -12- -10- -8 4 →x =14=12=10,-8. +6,-4-=2. The graph of line g is shown in the xy-plane. Line k is defined by 165x + py = w, where p and w are constants. If line k is graphed in this xy- plane, resulting in the graph of a system of two linear equations, the system of two linear equations will have infinitely many solutions. What is the value of p + w?",
      "options": [],
      "correctAnswer": "300",
      "section": "math",
      "questionType": "open-ended"
    }
  ]
}

