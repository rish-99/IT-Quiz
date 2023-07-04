const data = [
    {
        id: 1,
        question: "What should a strong password contain?",
        options: [
            {answer: "Numbers", correct: false},
            {answer: "Capital Letters", correct: false},
            {answer: "Capital Letters and Numbers", correct: false},
            {answer: "Punctuation, Capital Letters, Lowercase Letters and Spaces", correct: true}
        ],
    },
    {
        id: 2,
        question: "What does URL stand for?", 
        options: [
            {answer: "Uniform Resource Locator", correct: true},
            {answer: "Uniform Resource Location", correct: false},
            {answer: "Universal Response Locator", correct: false},
            {answer: "Universal Response Location", correct: false}
        ],
    },
    {
        id: 3,
        question: "How many characters should a strong password have?",
        options: [
            {answer: "8", correct: false},
            {answer: "12", correct: false},
            {answer: "16", correct: true},
            {answer: "22", correct: false}
        ],
    },
    {
        id: 4,
        question: "Where is RAM placed?",
        options: [
            {answer: "Motherboard", correct: true},
            {answer: "Processor", correct: false},
            {answer: "Hard Drive", correct: false},
            {answer: "Graphics Card", correct: false}
        ],
    },
    {
        id: 5,
        question: "What does internet security do to help your computer",
        options: [
            {answer: "It clears all the viruses and trojans from your system.", correct: true},
            {answer: "It keeps you from downloading internet files.", correct: false},
            {answer: "It stops you from accessing the internet.", correct: false},
            {answer: "Makes your computer more vulnerable", correct: false}
        ],
    },
    {
        id: 6,
        question: "What is an embedded system?",
        options: [
            {answer: "A Hoover", correct: false},
            {answer: "An Animal", correct: false},
            {answer: "A Car", correct: false},
            {answer: "A Micro Processor", correct: true}
        ],
    },
    {
        id: 7,
        question: "Why are you recommended to back up your files?",
        options: [
            {answer: "To save space on your computer", correct: false},
            {answer: "To keep your files safe in case of a computer failure", correct: true},
            {answer: "To make your computer run faster", correct: false},
            {answer: "To make your computer more secure", correct: false}
        ],
    },
    {
        id: 8,
        question: "What is a firewall?",
        options: [
            {answer: "A wall that stops fire", correct: false},
            {answer: "A wall that stops hackers", correct: true},
            {answer: "A wall that stops viruses", correct: false},
            {answer: "A wall that stops trojans", correct: false}
        ],
    },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answerContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play"); 

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

// Function to start the quiz again
const playAgain = () => {
    qIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    total = 0;
    displayQuestion(qIndex);
};

play.addEventListener("click", () => {
    gameScreen.style.display="block";
    resultScreen.style.display="none";
    playAgain();
});

// Function to display the result screen
const displayResult = () => {
    resultScreen.style.display = "block";
    gameScreen.style.display = "none";

    resultScreen.querySelector(".correct").textContent = 
    `Correct Answers: ${correctCount}`;

    resultScreen.querySelector(".wrong").textContent =
    `Wrong Answers: ${wrongCount}`;

    resultScreen.querySelector(".score").textContent =
    `Score: ${correctCount * 10}`;
};

// Function to display the question and answers
const displayQuestion = (qNumber) => {
    if (qNumber === data.length) 
        return displayResult(); 
    selectedAnswer = null;    
    question.textContent = data[qNumber].question;
    answerContainer.innerHTML = data[qNumber].options.map((option, index) => {
        return `<div class="answer">
                    <input type="radio" name="answer" id="answer${index}" value="${option.correct}">
                    <label for="answer${index}">${option.answer}</label>
                    </div>`;
    }).join("");  

    selectAnswer();
};

// Function to check if the answer is correct
const selectAnswer = () => {
    answerContainer.querySelectorAll("input").forEach((el => {
        el.addEventListener("click", (e) => {
            selectedAnswer = e.target.value;
        });
    }));
};

// Function to display the result 
const submitAnswer = () => {
    submit.addEventListener("click", () => {
        if (selectedAnswer!==null) {
        selectedAnswer === "true" ? correctCount++ : wrongCount++;
        qIndex++;
        displayQuestion(qIndex);
        } else alert("Please select an answer");
    });
};


displayQuestion(qIndex);
submitAnswer();
