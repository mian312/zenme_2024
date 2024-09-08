/*
 * js file for quiz logic
 * todo: add weights for questions (if answer yes to thoughts of hurting yourself, add crisis services to end of quiz result)
*/

// variable declarations
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const seasons = ["Spring", "Summer", "Winter", "Fall"];

// building questions
// response types
const responseType = { // an object with distinct types
    yesNo: [{ text: "Yes", score: 1 }, { text: "No", score: 0 }],
    weekday: weekdays,
    frequency: [
        { text: "Not at all", score: 0 },
        { text: "A little bit", score: 1 },
        { text: "A couple times a month", score: 2 },
        { text: "A couple times a week", score: 3 },
        { text: "Every Day", score: 4 }],
    userInput: [],
    season: seasons
}
/*  Questions in this format
    {question: "",
    response: responseType.frequency},
*/
const depressionQuestions = [ // an array of objects depressionQuestions[0].question, depressionQuestions[1].response PHQ-9
    {
        question: "Are you having thoughts that you would be better off dead, or of hurting yourself?",
        response: responseType.frequency
    },
    {
        question: "Are you having trouble concentrating on things such as reading the newspaper or watching TV?",
        response: responseType.frequency
    },
    {
        question: "Are you feeling bad about yourself (ex. feel like a failure or constantly let your family down)?",
        response: responseType.frequency
    },
    {
        question: "Do you have a poor appetite or are you overeating?",
        response: responseType.frequency
    },
    {
        question: "Are you feeling tired or having little energy?",
        response: responseType.frequency
    },
    {
        question: "Are you having trouble falling or staying asleep, or sleeping too much?",
        response: responseType.frequency
    },
    {
        question: "Are you feeling down, depressed, or hopeless?",
        response: responseType.frequency
    },
    {
        question: "Do you have little interest or pleasure in doing things?",
        response: responseType.frequency
    },
] // 8 questions

const ptsdQuestions = [
    {
        question: "Are you having nightmares about a distressing event(s) or thought about the event(s) when you did not want to?",
        response: responseType.frequency
    },
    {
        question: "Are you trying hard not to think about a distressing event(s) or went out of your way to avoid situations that reminded you of the event(s)?",
        response: responseType.frequency
    },
    {
        question: "Do you feel constantly on guard, watchful, or easily startled?",
        response: responseType.frequency
    },
    {
        question: "Do you feel numb or detached from people, activities, or your surroundings?",
        response: responseType.frequency
    },
    {
        question: "Do you feel guilty or unable to stop blaming yourself or others for a distressing events(s) or any problems the event(s) may have caused?",
        response: responseType.frequency
    },
] // 5 questions

const schQuestions = [ // an array of objects
    // thought disorder
    { question: "Are you experiencing any brain fog?", response: responseType.frequency },
    { question: "Are you struggling to remember to eat or drink water?", response: responseType.frequency },
    { question: "Are your thoughts jumbled or are you unable to think clearly?", response: responseType.frequency },
    { question: "Are you having trouble seeing things or are you seeing things that aren't there?", response: responseType.frequency },
    { question: "Are you having trouble hearing things or are you hearing things that aren't there?", response: responseType.frequency },
    { question: "Do you feel extremely tired?", response: responseType.frequency },
    // mood disorder
    { question: "Are the happy thoughts speeding up your thought process?", response: responseType.frequency },
    { question: "Are the sad thoughts slowing down your thought process?", response: responseType.frequency },
    { question: "Are you having any grandiose thoughts?", response: responseType.frequency },
];

const impairmentQuestions = [ // an array of objects -
    { question: "What is the Weekday?", response: responseType.weekday },
    { question: "Type in the first three things you see", response: responseType.userInput },
    { question: "What is the year?", response: responseType.userInput },
    { question: "What is the season?", response: responseType.season },
    { question: "Spell 'WORLD' backwards", response: responseType.userInput },
    { question: "What were the three things you typed in before", response: responseType.userInput },

]; // these questions have right or wrong answers - ICEBOX

const addictionQuestions = [
    { question: "Are you using substances to numb any physical or emotional pain?", response: responseType.frequency },
    { question: "Do you feel like you should cut down on your substance use?", response: responseType.frequency },
    { question: "Are you feeling guilty about using substances?", response: responseType.frequency },
    { question: "Is anyone annoying you by criticizing your substance use?", response: responseType.frequency },
    { question: "Do you feel that your substance use significantly decreases your ability to function?", response: responseType.frequency },
    { question: "Are you using substances as soon as you wake up in the morning?", response: responseType.frequency }
] // 6 questions

const anxietyQuestions = [  // an array of objects GAD-7
    {
        question: "Are you feeling nervous, anxious, or on edge?",
        response: responseType.frequency
    },
    {
        question: "Are you feeling unable to stop or control worrying?",
        response: responseType.frequency
    },
    {
        question: "Are you worrying too much about different things?",
        response: responseType.frequency
    },
    {
        question: "Are you having trouble relaxing?",
        response: responseType.frequency
    },
    {
        question: "Are you so restless that it is hard to sit still?",
        response: responseType.frequency
    },
    {
        question: "Are you feeling easily annoyed or irritable?",
        response: responseType.frequency
    },
    {
        question: "Are you feeling as if something awful might happen?",
        response: responseType.frequency
    },
]; // 7 questions

const otherQuestions = [
    {
        question: 'Do you feel demotivated to complete your daily tasks?',
        response: responseType.frequency,
    },
    {
        question: 'Do you experience stable mood or do you have sudden changes in mood?',
        response: responseType.frequency,
    },
    {
        question: 'How often do you feel stressed in your daily life?',
        response: responseType.frequency,
    },
    {
        question: 'Are you dissatisfied with your social interactions?',
        response: responseType.frequency,
    },
    {
        question: 'Do you feel you are struggling to maintain a healthy work-life balance?',
        response: responseType.frequency,
    },
    {
        question: 'How frequently do you experience physical symptoms of stress (e.g., headaches, muscle tension)?',
        response: responseType.frequency,
    },
    {
        question: 'How dissatisfied are you with your current level of physical activity?',
        response: responseType.frequency,
    },
    {
        question: 'Are you not getting enough sleep on a regular basis?',
        response: responseType.frequency,
    },
];

const questionBank = {
    depressionQuestions, anxietyQuestions, ptsdQuestions, schQuestions, impairmentQuestions, addictionQuestions, otherQuestions
}


export default questionBank;