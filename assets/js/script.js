var startButtonEl = document.querySelector("#start-btn");
var quizContainerEl = document.querySelector("#quiz-container");

var score = 0;
//var counter = 60;

var questions = [
    {
        question: "What is the correct way to write a JavaScript array?",
        choices: ["var colors = ['red', 'green', 'blue']", "var colors = 'red', 'green', 'blue'", "var colors = (1:'red', 2:'green', 3:'blue'", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"],
        correctAnswer: "var colors = ['red', 'green', 'blue']" //or 0
    },
    {
        question: "Inside which HTML element do we put JavaScript?",
        choices: ["<js>", "<script>", "<scripting>", "<javascript>"],
        correctAnswer: "<script>"
    },
    {
        question: "A very useful tool during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "Terminal/Bash", "console.log", "for loops"],
        correctAnswer: "console.log"
    },
    {
        question: "Arrays in JavaScript can be used to store ______________.",
        choices: ["Numbers", "Strings", "Objects", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "What is the correct JavaScript syntax to change the content of this HTML element? <p id='demo'>This is a demonstration.</p>",
        choices: ["#demo.innterHTML = 'Hello World!';", "document.getElementByName('p').innerHTML = 'Hello World!';", "document.getElementById('demo').innerHTML = 'Hello World!';", "document.getElement('p').innerHTML = 'Hello World!';"],
        correctAnswer: "document.getElementById('demo').innerHTML = 'Hello World!';"
    }
];

var startQuiz = function() {
   //countDown(); 

   for (var i = 0; i < questions.length; i++) {
       //determine which question to show (collect a question object)
       var nextQuestion = questions[i];    //Math.floor(Math.random() * questions.length)]; 
       //log nextQuestion value (show already used)
       showQuestion(nextQuestion);

       console.log(nextQuestion);
   }
   

}; 

var showQuestion = function(question) {
    //display question value from  question object
    //remove intro from page
    //dynamically create element, append to page, 
    //display choices as buttons

    //collect info about button clicked for answers
    //check right or wrong answers
    //display relevant message

};

var checkAnswer = function() {
    //if correct, score++, display message, run showQuestions (if value not already used), 
    //if no more questions, endQuiz()
    //if incorrect, wrongAnswer()
};

var wrongAnwer = function() {
    //display message
    //check timer to see if enough time to deduct for wrong answer
    //if yes, deduct time
    // show questions
};

var endQuiz = function() {};



// function countDown() { 
//     setInterval(, 1000);  
// };



startButtonEl.addEventListener('click', startQuiz());
//event listener for answer button calls checkAnswer