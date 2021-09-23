var introEl = document.querySelector("#intro-container");
var startButtonEl = document.createElement('button');
var quizContainerEl = document.querySelector("#quiz-container");
var currentQuestionEl = document.querySelector("#current-question-container");
var timerEl = document.querySelector("#countdown");
var answerContainerEl = document.querySelector("#answer-container");
var score = 0;
var timeLeft;
var i;
var correctMessage = document.createElement('span').textContent = "Correct!";
var wrongMessage = document.createElement('span').textContent = "Wrong!";


var questions = [
    {
        question: "What is the correct way to write a JavaScript array?",
        choices: ["var colors = ['red', 'green', 'blue']", "var colors = 'red', 'green', 'blue'", "var colors = (1:'red', 2:'green', 3:'blue'", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"],
        correctAnswer: "var colors = ['red', 'green', 'blue']" 
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
        choices: ["#demo.innerHTML = 'Hello World!';", "document.getElementByName('p').innerHTML = 'Hello World!';", "document.getElementById('demo').innerHTML = 'Hello World!';", "document.getElement('p').innerHTML = 'Hello World!';"],
        correctAnswer: "document.getElementById('demo').innerHTML = 'Hello World!';" 
    }
];

var removeAllChildNodes = function(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

var startQuiz = function() {
   countDown(); 
   //clear intro from page
   var container = document.querySelector('#intro-container')
   removeAllChildNodes(container);



   for (var i = 0; i < questions.length; i++) {
       //questions[i].question = this.question;
       //questions[i].choices[0] = this.choices[0];
       //show one object at a time
       showQuestion();
        
   } 
   
}; 

var showQuestion = function(i) {
    
    //dynamically create element, append to page, 
    var questionEl = document.createElement('h2');
    var button1El = document.createElement('button');
    var button2El = document.createElement('button');
    var button3El = document.createElement('button');
    var button4El = document.createElement('button');

    //questions.q as text
    questionEl.textContent = questions[i].question;
    //questions.choices[i] as list?
    button1El.textContent = questions[i].choices[0];
    button2El.textContent = questions[i].choices[1];
    button3El.textContent = questions[i].choices[2];
    button4El.textContent = questions[i].choices[3];
    //append to quizContainerEl
    currentQuestionEl.appendChild(questionEl);
    answerContainerEl.appendChild(button1El);
    answerContainerEl.appendChild(button2El);
    answerContainerEl.appendChild(button3El);
    answerContainerEl.appendChild(button4El);
    currentQuestionEl.appendChild(answerContainerEl);
    
    
};

var checkAnswer = function(event) {

    if (event.target.matches(questions[i].correctAnswer)) { //if button pressed text matches correct answer text
        score++;
        answerContainerEl.appendChild(correctMessage);
    }
    currentQuestionEl.remove();
    //if correct, score++, display message, run showQuestions 

    //answerContainerEl.textContent = "";
    //if no more questions, endQuiz()
    //if incorrect, wrongAnswer()
    //clear page
};

var wrongAnwer = function() {
    //display message
    //check timer to see if enough time to deduct for wrong answer
    //if yes, deduct time
    //clear page
    // show questions
};

var endQuiz = function() {};



function countDown() { 
     var timeLeft = 75;

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

var displayIntro = function() {
    
    var introTitleEl = document.createElement('h1');
    var introParaEl = document.createElement('p');
    

    introTitleEl.textContent = 'Coding Quiz Challenge';
    introParaEl.textContent = 'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will decrease your remaining time by five seconds.';
    startButtonEl.textContent = 'Start Quiz';

    //set style class 

    introEl.appendChild(introTitleEl);
    introEl.appendChild(introParaEl);
    introEl.appendChild(startButtonEl);
    
};

displayIntro();

startButtonEl.addEventListener('click', startQuiz);
answerContainerEl.addEventListener('click', checkAnswer);