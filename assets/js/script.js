var startButtonEl = document.querySelector("#start-btn");
var quizContainerEl = document.querySelector("#quiz-container");
var timerEl = document.querySelector("#countdown");
var score = 0;
var timeLeft;


var questions = [
    {
        question: "What is the correct way to write a JavaScript array?",
        choices: ["var colors = ['red', 'green', 'blue']", "var colors = 'red', 'green', 'blue'", "var colors = (1:'red', 2:'green', 3:'blue'", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"],
        correctAnswer: "var colors = ['red', 'green', 'blue']" //or choices[0]
    },
    {
        question: "Inside which HTML element do we put JavaScript?",
        choices: ["<js>", "<script>", "<scripting>", "<javascript>"],
        correctAnswer: "<script>" //choices[1]
    },
    {
        question: "A very useful tool during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "Terminal/Bash", "console.log", "for loops"],
        correctAnswer: "console.log" //choices[2]
    },
    {
        question: "Arrays in JavaScript can be used to store ______________.",
        choices: ["Numbers", "Strings", "Objects", "All of the above"],
        correctAnswer: "All of the above" //choices[3]
    },
    {
        question: "What is the correct JavaScript syntax to change the content of this HTML element? <p id='demo'>This is a demonstration.</p>",
        choices: ["#demo.innerHTML = 'Hello World!';", "document.getElementByName('p').innerHTML = 'Hello World!';", "document.getElementById('demo').innerHTML = 'Hello World!';", "document.getElement('p').innerHTML = 'Hello World!';"],
        correctAnswer: "document.getElementById('demo').innerHTML = 'Hello World!';" //choices[2]
    }
];

var startQuiz = function() {
   countDown(); 

   
   for (var i = 1; i < questions.length + 1; i++) {
       //determine which question to show (collect a question object)
       //var nextQuestion = questions[i];    //Math.floor(Math.random() * questions.length)]; 
       
       showQuestion(questions[i]);
   } 
   
}; 

var showQuestion = function(array) {
    //remove intro from page
    
    
    //dynamically create element, append to page, 
    //display question value from  question object  array[i].question
    //display choices as buttons array[i].choices

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



 function countDown() { 
     var timeLeft = 60;

     var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timerEl.textContent = timeLeft + 's';
            timeLeft--; 
          } else {
          timerEl.textContent = "";
          clearInterval(timeInterval);
          }
     }, 1000);  
 };



startButtonEl.addEventListener('click', startQuiz());
//event listener for answer button calls checkAnswer