const questions = {
    "GENERAL KNOWLEDGE": [
        {
            question: "What is the capital of France?",
            answers: [
                { text: "Berlin", correct: false },
                { text: "Madrid", correct: false },
                { text: "Paris", correct: true },
                { text: "Rome", correct: false },
            ]
        },
        {
            question: "Which planet is known as the Red Planet?",
            answers: [
                { text: "Venus", correct: false },
                { text: "Mars", correct: true },
                { text: "Jupiter", correct: false },
                { text: "Saturn", correct: false },
            ]
        },
        {
            question: "What is the largest mammal in the world?",
            answers: [
                { text: "Elephant", correct: false },
                { text: "Blue Whale", correct: true },
                { text: "Giraffe", correct: false },
                { text: "Hippopotamus", correct: false },
            ]
        }
    ],
    "HISTORY": [
        {
            question: "What is the largest mammal in the world?",
            answers: [
                { text: "Elephant", correct: false },
                { text: "Blue Whale", correct: true },
                { text: "Giraffe", correct: false },
                { text: "Hippopotamus", correct: false },
            ]
        },
        {
            question: "Which planet is known as the Red Planet?",
            answers: [
                { text: "Venus", correct: false },
                { text: "Mars", correct: true },
                { text: "Jupiter", correct: false },
                { text: "Saturn", correct: false },
            ]
        },
        {
            question: "What is the capital of France?",
            answers: [
                { text: "Berlin", correct: false },
                { text: "Madrid", correct: false },
                { text: "Paris", correct: true },
                { text: "Rome", correct: false },
            ]
        }
    ],
    "COMPUTER": [
        {
            question: "Which planet is known as the Red Planet?",
            answers: [
                { text: "Venus", correct: false },
                { text: "Mars", correct: true },
                { text: "Jupiter", correct: false },
                { text: "Saturn", correct: false },
            ]
        },
        {
            question: "What is the largest mammal in the world?",
            answers: [
                { text: "Elephant", correct: false },
                { text: "Blue Whale", correct: true },
                { text: "Giraffe", correct: false },
                { text: "Hippopotamus", correct: false },
            ]
        },
        {
            question: "What is the capital of France?",
            answers: [
                { text: "Berlin", correct: false },
                { text: "Madrid", correct: false },
                { text: "Paris", correct: true },
                { text: "Rome", correct: false },
            ]
        }
    ]
};




'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.querySelector('.start_btn button');
    const infoBox = document.querySelector('.info_box');
    const categoryContainer = document.querySelector('.category-container');
    const categorySelect = document.getElementById('category');
    const questionElement = document.getElementById('question');
    const answerButtons = document.getElementById('answerbutton');
    const continueButton = document.getElementById('restart');
    const nextButton = document.getElementById('next-btn');
    let currentQuestionIndex = 0;

    startButton.addEventListener('click', function () {
        startButton.style.display = 'none';
        // Show the infoBox
        infoBox.style.display = 'block';
    });

    continueButton.addEventListener('click', function () {
        // Hide the infoBox
        infoBox.style.display = 'none';
        // Populate the category dropdown
        populateCategoryDropdown();
        // Show the categoryContainer
        categoryContainer.style.display = 'block';
    });

    categorySelect.addEventListener('change', function () {
        // Handle category selection
        const selectedCategory = categorySelect.value;
        startQuiz(selectedCategory);
    });

    function populateCategoryDropdown() {
        // Populate the category dropdown based on the keys in the questions object
        const categories = Object.keys(questions);
        categorySelect.innerHTML = categories.map(category => `<option value="${category}">${category}</option>`).join('');
    }

    function startQuiz(category) {
        // Hide the categoryContainer
        categoryContainer.style.display = 'none';
        // Show the quiz container
        const quizContainer = document.querySelector('.app');
        quizContainer.style.display = 'block';
        // Display the first question for the selected category
        displayQuestion(category);
    }

    function displayQuestion(category) {
        const categoryQuestions = questions[category];
        if (categoryQuestions && currentQuestionIndex < categoryQuestions.length) {
            const currentQuestion = categoryQuestions[currentQuestionIndex];
            questionElement.textContent = currentQuestion.question;
            displayAnswerButtons(currentQuestion.answers);
        } else {
            // Quiz is finished, you can handle this case accordingly
            alert('Quiz finished!');
        }
    }

    function displayAnswerButtons(answers) {
        // Clear existing answer buttons
        answerButtons.innerHTML = '';
        // Display answer buttons based on the current question
        answers.forEach(answer => {
            const button = document.createElement('button');
            button.classList.add('btn');
            button.textContent = answer.text;
            button.dataset.correct = answer.correct; // Add a dataset attribute for correctness
            button.addEventListener('click', selectAnswer);
            answerButtons.appendChild(button);
        });
    }












    function selectAnswer(event) {
        console.log('Answer button clicked'); // Check if this log statement is reached
    
        const selectedButton = event.target;
        const isCorrect = selectedButton.dataset.correct === 'true';
        console.log('Is Correct?', isCorrect); // Check the value of isCorrect
    
        nextButton.addEventListener('click', function () {
            // Implement logic to move to the next question
            currentQuestionIndex++;
            displayQuestion(categorySelect.value);
        });
        function selectAnswer(e) {
            const selectedBtn = e.target;
            const isCorrect = selectedBtn.dataset.correct === 'true';
            console.log('Selected answer:', selectedBtn.textContent, 'Is Correct?', isCorrect);
        
            if (isCorrect) {
                selectedBtn.classList.add('correct');
                score++;
            } else {
                selectedBtn.classList.add('incorrect');
            }
            Array.from(answerButtons.children).forEach(button => {
                if (button.dataset.correct === 'true') {
                    button.classList.add('correct');
                }
                button.disabled = true;
            });
    
        answerButtons.classList.add('answered');
        nextButton.style.display = 'block';
    }}





 
    
    
});


