const questions = [
  {
    category: "Science",
    question: "What is the chemical symbol for Gold?",
    choices: ["Au", "Ag", "Fe"],
    answer: "Au"
  },
  {
    category: "Geography",
    question: "What is the capital of France?",
    choices: ["London", "Paris", "Berlin"],
    answer: "Paris"
  },
  {
    category: "Math",
    question: "What is 2 + 2?",
    choices: ["3", "4", "5"],
    answer: "4"
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["George Washington", "Thomas Jefferson", "Abraham Lincoln"],
    answer: "George Washington"
  },
  {
    category: "Technology",
    question: "Which programming language runs in the browser?",
    choices: ["Python", "JavaScript", "C++"],
    answer: "JavaScript"
  }
];

function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}

function getRandomComputerChoice(choicesArray) {
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}