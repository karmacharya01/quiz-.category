const questionsByCategory = {
    "GENERAL KNOWLEDGE": [
        {
            question: "What is the capital of Australia?",
            answers: [
                { text: "Sydney", correct: false },
                { text: "Melbourne", correct: false },
                { text: "Canberra", correct: true },
                { text: "Perth", correct: false }
            ]
        },
        {
            question: "Which planet is known as the Red Planet?",
            answers: [
                { text: "Venus", correct: false },
                { text: "Mars", correct: true },
                { text: "Jupiter", correct: false },
                { text: "Saturn", correct: false }
            ]
        },
        {
            question: "What is the largest ocean on Earth?",
            answers: [
                { text: "Atlantic Ocean", correct: false },
                { text: "Indian Ocean", correct: false },
                { text: "Arctic Ocean", correct: false },
                { text: "Pacific Ocean", correct: true }
            ]
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            answers: [
                { text: "Charles Dickens", correct: false },
                { text: "William Shakespeare", correct: true },
                { text: "Jane Austen", correct: false },
                { text: "Mark Twain", correct: false }
            ]
        },
        {
            question: "What is the capital of Canada?",
            answers: [
                { text: "Toronto", correct: false },
                { text: "Montreal", correct: false },
                { text: "Ottawa", correct: true },
                { text: "Vancouver", correct: false }
            ]
        },
        {
            question: "In which year did the Titanic sink?",
            answers: [
                { text: "1912", correct: true },
                { text: "1920", correct: false },
                { text: "1905", correct: false },
                { text: "1935", correct: false }
            ]
        },
        {
            question: "Who is known as the 'Father of Computer Science'?",
            answers: [
                { text: "Bill Gates", correct: false },
                { text: "Alan Turing", correct: true },
                { text: "Steve Jobs", correct: false },
                { text: "Ada Lovelace", correct: false }
            ]
        },
        {
            question: "Which country is known as the 'Land of the Rising Sun'?",
            answers: [
                { text: "China", correct: false },
                { text: "South Korea", correct: false },
                { text: "Japan", correct: true },
                { text: "Thailand", correct: false }
            ]
        },
        {
            question: "What is the currency of Brazil?",
            answers: [
                { text: "Euro", correct: false },
                { text: "Dollar", correct: false },
                { text: "Pound", correct: false },
                { text: "Real", correct: true }
            ]
        },
        {
            question: "Which planet is known as the 'Morning Star'?",
            answers: [
                { text: "Mars", correct: false },
                { text: "Venus", correct: true },
                { text: "Jupiter", correct: false },
                { text: "Mercury", correct: false }
            ]
        },
        {
            question: "Who painted the Mona Lisa?",
            answers: [
                { text: "Vincent van Gogh", correct: false },
                { text: "Leonardo da Vinci", correct: true },
                { text: "Pablo Picasso", correct: false },
                { text: "Michelangelo", correct: false }
            ]
        },
        {
            question: "What is the largest mammal in the world?",
            answers: [
                { text: "Elephant", correct: false },
                { text: "Blue Whale", correct: true },
                { text: "Giraffe", correct: false },
                { text: "Hippopotamus", correct: false }
            ]
        },
        {
            question: "Which country is known as the 'Land of the Midnight Sun'?",
            answers: [
                { text: "Sweden", correct: false },
                { text: "Norway", correct: true },
                { text: "Finland", correct: false },
                { text: "Iceland", correct: false }
            ]
        },
        {
            question: "What is the capital of South Africa?",
            answers: [
                { text: "Cape Town", correct: false },
                { text: "Durban", correct: false },
                { text: "Pretoria", correct: false },
                { text: "Johannesburg", correct: true }
            ]
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            answers: [
                { text: "J.K. Rowling", correct: false },
                { text: "Harper Lee", correct: true },
                { text: "George Orwell", correct: false },
                { text: "Ernest Hemingway", correct: false }
            ]
        },
        {
            question: "Which gas makes up the majority of Earth's atmosphere?",
            answers: [
                { text: "Oxygen", correct: false },
                { text: "Nitrogen", correct: true },
                { text: "Carbon Dioxide", correct: false },
                { text: "Hydrogen", correct: false }
            ]
        },
        {
            question: "What is the largest desert in the world?",
            answers: [
                { text: "Sahara Desert", correct: false },
                { text: "Gobi Desert", correct: false },
                { text: "Antarctica", correct: true },
                { text: "Arabian Desert", correct: false }
            ]
        },
        {
            question: "Who is the current President of the United States?",
            answers: [
                { text: "Joe Biden", correct: true },
                { text: "Donald Trump", correct: false },
                { text: "Barack Obama", correct: false },
                { text: "George W. Bush", correct: false }
            ]
        }
    ],
    "HISTORY":  [
        {
            question: "Who was the first king of unified Nepal?",
            answers: [
                { text: "King Prithvi Narayan Shah", correct: true },
                { text: "King Tribhuvan", correct: false },
                { text: "King Gyanendra", correct: false },
                { text: "King Mahendra", correct: false }
            ]
        },
        {
            question: "In which year did Nepal officially become a constitutional monarchy?",
            answers: [
                { text: "1950", correct: false },
                { text: "1962", correct: false },
                { text: "1990", correct: true },
                { text: "2008", correct: false }
            ]
        },
        {
            question: "Who was the first woman to climb Mount Everest from Nepal?",
            answers: [
                { text: "Junko Tabei", correct: false },
                { text: "Pasang Lhamu Sherpa", correct: true },
                { text: "Tenzing Norgay", correct: false },
                { text: "Phurba Tashi Sherpa", correct: false }
            ]
        },
        {
            question: "Which treaty defined the current borders of Nepal with India and China?",
            answers: [
                { text: "Treaty of Sugauli", correct: true },
                { text: "Treaty of Versailles", correct: false },
                { text: "Simla Agreement", correct: false },
                { text: "Shimla Accord", correct: false }
            ]
        },
        {
            question: "During which war did Nepal fight against the British East India Company?",
            answers: [
                { text: "World War I", correct: false },
                { text: "Nepalese-Tibetan War", correct: false },
                { text: "Gurkha War", correct: true },
                { text: "Nepalese-Indian War", correct: false }
            ]
        },
        {
            question: "Who is considered the unifier of modern Nepal?",
            answers: [
                { text: "King Gyanendra", correct: false },
                { text: "King Prithvi Narayan Shah", correct: true },
                { text: "King Tribhuvan", correct: false },
                { text: "King Birendra", correct: false }
            ]
        },
        {
            question: "Which major earthquake devastated Nepal in 2015?",
            answers: [
                { text: "2008 earthquake", correct: false },
                { text: "2010 earthquake", correct: false },
                { text: "2015 earthquake", correct: true },
                { text: "2012 earthquake", correct: false }
            ]
        },
        {
            question: "What is the traditional name for the Kathmandu Valley?",
            answers: [
                { text: "Lumbini", correct: false },
                { text: "Pashupatinath", correct: false },
                { text: "Gosaikunda", correct: false },
                { text: "Yambu", correct: true }
            ]
        },
        {
            question: "Who was the first democratically elected Prime Minister of Nepal?",
            answers: [
                { text: "King Tribhuvan", correct: false },
                { text: "King Birendra", correct: false },
                { text: "Bishweshwar Prasad Koirala", correct: true },
                { text: "Girija Prasad Koirala", correct: false }
            ]
        },
        {
            question: "Which river is known as the 'Sorrow of Bihar' due to frequent flooding?",
            answers: [
                { text: "Gandaki River", correct: false },
                { text: "Karnali River", correct: false },
                { text: "Kosi River", correct: true },
                { text: "Bagmati River", correct: false }
            ]
        },
        {
            question: "During which festival do Hindus in Nepal celebrate the victory of good over evil?",
            answers: [
                { text: "Tihar", correct: false },
                { text: "Dashain", correct: true },
                { text: "Holi", correct: false },
                { text: "Bisket Jatra", correct: false }
            ]
        },
        {
            question: "Which ancient trade route passed through Nepal connecting India and Tibet?",
            answers: [
                { text: "Silk Road", correct: false },
                { text: "Tea Horse Road", correct: false },
                { text: "Salt Route", correct: true },
                { text: "Grand Trunk Road", correct: false }
            ]
        },
        {
            question: "Who was the founder of the Licchavi dynasty in ancient Nepal?",
            answers: [
                { text: "Ashoka the Great", correct: false },
                { text: "Harsha", correct: false },
                { text: "Amsuvarman", correct: true },
                { text: "Mahasammata", correct: false }
            ]
        },
        {
            question: "Which mountain range forms the northern border of Nepal?",
            answers: [
                { text: "Himalayas", correct: true },
                { text: "Andes", correct: false },
                { text: "Alps", correct: false },
                { text: "Rocky Mountains", correct: false }
            ]
        },
        {
            question: "What is the traditional Nepali music instrument played during religious ceremonies?",
            answers: [
                { text: "Tabla", correct: false },
                { text: "Sarangi", correct: false },
                { text: "Madal", correct: true },
                { text: "Sitar", correct: false }
            ]
        },
        {
            question: "Which ancient Nepalese scripture is considered the foundation of Hindu philosophy?",
            answers: [
                { text: "Vedas", correct: false },
                { text: "Upanishads", correct: false },
                { text: "Smritis", correct: false },
                { text: "Manusmriti", correct: true }
            ]
        },
        {
            question: "Who was the first female President of Nepal?",
            answers: [
                { text: "Bidya Devi Bhandari", correct: true },
                { text: "Sushila Karki", correct: false },
                { text: "Komal Oli", correct: false },
                { text: "Sita Ram Yadav", correct: false }
            ]
        },
        {
            question: "Which ancient city in Nepal is known for its well-preserved Newari architecture?",
            answers: [
                { text: "Lalitpur", correct: true },
                { text: "Bhaktapur", correct: false },
                { text: "Pokhara", correct: false },
                { text: "Gosaikunda", correct: false }
            ]
        }
    ],
    "COMPUTER": [
        {
            question: "What does CPU stand for?",
            answers: [
                { text: "Central Processing Unit (CPU)", correct: true },
                { text: "Computer Personal Unit", correct: false },
                { text: "Central Processor Unit", correct: false },
                { text: "Central Process Unit", correct: false }
            ]
        },
        {
            question: "What is the primary purpose of an operating system?",
            answers: [
                { text: "Manage hardware resources", correct: true },
                { text: "Run applications", correct: false },
                { text: "Connect to the internet", correct: false },
                { text: "Store data", correct: false }
            ]
        },
        {
            question: "Which programming language is known for its simplicity and readability?",
            answers: [
                { text: "Java", correct: false },
                { text: "Python", correct: true },
                { text: "C++", correct: false },
                { text: "Ruby", correct: false }
            ]
        },
        {
            question: "What does HTML stand for in web development?",
            answers: [
                { text: "HyperText Markup Language", correct: true },
                { text: "High-Level Text Language", correct: false },
                { text: "Hyper Transfer Markup Language", correct: false },
                { text: "Hyperlink and Text Markup Language", correct: false }
            ]
        },
        {
            question: "What is the purpose of the 'if' statement in programming?",
            answers: [
                { text: "To create a loop", correct: false },
                { text: "To execute a block of code conditionally", correct: true },
                { text: "To declare a variable", correct: false },
                { text: "To define a function", correct: false }
            ]
        },
        {
            question: "What is the function of RAM in a computer?",
            answers: [
                { text: "Store permanent data", correct: false },
                { text: "Provide long-term storage", correct: false },
                { text: "Store temporary data for fast access", correct: true },
                { text: "Execute program instructions", correct: false }
            ]
        },
        {
            question: "Which protocol is used for secure communication over the internet?",
            answers: [
                { text: "FTP", correct: false },
                { text: "HTTP", correct: false },
                { text: "HTTPS", correct: true },
                { text: "TCP", correct: false }
            ]
        },
        {
            question: "What is the purpose of a firewall in network security?",
            answers: [
                { text: "Monitor internet speed", correct: false },
                { text: "Block unauthorized access", correct: true },
                { text: "Manage computer memory", correct: false },
                { text: "Encrypt data", correct: false }
            ]
        },
        {
            question: "In object-oriented programming, what is encapsulation?",
            answers: [
                { text: "Combining data and methods that operate on that data", correct: true },
                { text: "Breaking a program into small modules", correct: false },
                { text: "Storing data in a database", correct: false },
                { text: "Connecting to external APIs", correct: false }
            ]
        },
        {
            question: "Which database type is known for its flexibility and scalability?",
            answers: [
                { text: "Relational Database", correct: false },
                { text: "NoSQL Database", correct: true },
                { text: "Hierarchical Database", correct: false },
                { text: "Object-Oriented Database", correct: false }
            ]
        },
        {
            question: "What does CSS stand for in web development?",
            answers: [
                { text: "Cascading Style Sheet", correct: true },
                { text: "Computer Style Sheet", correct: false },
                { text: "Creative Style Sheet", correct: false },
                { text: "Colorful Style Sheet", correct: false }
            ]
        },
        {
            question: "Which programming paradigm treats computation as the evaluation of mathematical functions and avoids changing state and mutable data?",
            answers: [
                { text: "Procedural Programming", correct: false },
                { text: "Object-Oriented Programming", correct: false },
                { text: "Functional Programming", correct: true },
                { text: "Scripting", correct: false }
            ]
        },
        {
            question: "What is the purpose of a version control system like Git?",
            answers: [
                { text: "Manage project documentation", correct: false },
                { text: "Track changes in source code and collaborate with others", correct: true },
                { text: "Create graphical user interfaces", correct: false },
                { text: "Monitor computer performance", correct: false }
            ]
        },
        {
            question: "What is an IP address used for in networking?",
            answers: [
                { text: "Identify a device on a network", correct: true },
                { text: "Store files", correct: false },
                { text: "Manage internet speed", correct: false },
                { text: "Connect to a printer", correct: false }
            ]
        }
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
        [questionsByCategory[currentCategory][i], questionsByCategory[currentCategory][j]] = [questionsByCategory[currentCategory][j], questionsByCategory[currentCategory][i]];
    }
}

function StartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";

    // Slice the array to include only the first 8 questions
    questionsByCategory[currentCategory] = questionsByCategory[currentCategory].slice(0, 8);
    
    suffleQuestion(); 
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questionsByCategory[currentCategory][currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    // Shuffle the answers
    shuffleArray(currentQuestion.answers);

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

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
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

    document.querySelector('.category-container').style.display = 'none';

    if (currentCategory !== '') {
        document.querySelector('.quiz').style.opacity = '1';
        document.querySelector('.quiz').style.pointerEvents = 'auto';
        StartQuiz();

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
