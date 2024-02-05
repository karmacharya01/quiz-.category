const questionsByCategory = {
    "GENERAL KNOWLEDGE": [
        {
            question: "What is the capital of France?",
            answers: [
                { text: "Berlin", correct: false },
                { text: "Madrid", correct: false },
                { text: "Paris", correct: true },
                { text: "Rome", correct: false },
            ],
        },
        {
            question: "What is the currency of Japan?",
            answers: [
                { text: "Won", correct: false },
                { text: "Yen", correct: true },
                { text: "Euro", correct: false },
                { text: "Peso", correct: false }
            ]
        },
        
        // Question 6
        {
            question: "Who wrote the play 'Hamlet'?",
            answers: [
                { text: "William Shakespeare", correct: true },
                { text: "Jane Austen", correct: false },
                { text: "Charles Dickens", correct: false },
                { text: "Emily Brontë", correct: false }
            ]
        }
        // Add more questions for the "GENERAL KNOWLEDGE" category if needed
    ],
    "HISTORY": [
        {
            question: "Which planet is known as the Red Planet?",
            answers: [
                { text: "Venus", correct: false },
                { text: "Mars", correct: true },
                { text: "Jupiter", correct: false },
                { text: "Saturn", correct: false },
            ],
        },
        // Question 3
{
    question: "Who is the main character in 'The Great Gatsby'?",
    answers: [
        { text: "Jay Gatsby", correct: true },
        { text: "Tom Buchanan", correct: false },
        { text: "Daisy Buchanan", correct: false },
        { text: "Nick Carraway", correct: false }
    ]
},

// Question 4
{
    question: "Which river runs through Egypt?",
    answers: [
        { text: "Nile", correct: true },
        { text: "Amazon", correct: false },
        { text: "Danube", correct: false },
        { text: "Yangtze", correct: false }
    ]
},
        // Add more questions for the "HISTORY" category if needed
    ],
    "COMPUTER": [
        {
            question: "What is the largest mammal in the world?",
            answers: [
                { text: "Elephant", correct: false },
                { text: "Blue Whale", correct: true },
                { text: "Giraffe", correct: false },
                { text: "Hippopotamus", correct: false },
            ],
        },
        {
            question: "What is the largest planet in our solar system?",
            answers: [
                { text: "Earth", correct: false },
                { text: "Mars", correct: false },
                { text: "Jupiter", correct: true },
                { text: "Saturn", correct: false }
            ]
        },
        // Add more questions for the "COMPUTER" category if needed
    ],
};
const startButton = document.querySelector('.start_btn button');
const infoBox = document.querySelector('.info_box');
const restartButton = document.getElementById("restart");
const categorySelect = document.getElementById("category");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answerbutton");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let currentCategory = "";
let score = 0;

startButton.addEventListener("click", function () {
    document.querySelector(".info_box").style.display = "block";
    document.querySelector(".start_btn").style.display = "none";
});

restartButton.addEventListener("click", function () {
    document.querySelector(".category-container").style.display = "block";
    document.querySelector(".info_box").style.display = "none";
});

function suffleQuestion() {
    for (let i = questionsByCategory[currentCategory].length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // Swap questionsByCategory[currentCategory][i] and questionsByCategory[currentCategory][j]
        [questionsByCategory[currentCategory][i], questionsByCategory[currentCategory][j]] = [questionsByCategory[currentCategory][j], questionsByCategory[currentCategory][i]];
    }
}

function StartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    suffleQuestion(); // This line needs to call shuffleQuestions()
    showQuestion();
}



function showQuestion() {
    resetState();
    let currentQuestion = questionsByCategory[currentCategory][currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
    
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    if (currentQuestionIndex < questionsByCategory[currentCategory].length) {
        answerButtons.classList.remove("answered");
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    answerButtons.classList.add("answered");
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questionsByCategory[currentCategory].length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questionsByCategory[currentCategory].length) {
        showQuestion();
    } else {
        showScore();
    }
}



categorySelect.addEventListener('change', function () {
    currentCategory = this.value;

    // Hide category-container
    document.querySelector('.category-container').style.display = 'none';

    if (currentCategory !== '') {
        document.querySelector('.quiz').style.opacity = '1';
        document.querySelector('.quiz').style.pointerEvents = 'auto';
        StartQuiz();

        // Show the app class
        document.querySelector('.app').style.display = 'block';
    } else {
        document.querySelector('.quiz').style.opacity = '0.6';
        document.querySelector('.quiz').style.pointerEvents = 'none';
        document.querySelector('.app').style.display = 'none';
    }
});

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questionsByCategory[currentCategory].length) {
        handleNextButton();
    } else {
        StartQuiz();
    }
});

StartQuiz();
