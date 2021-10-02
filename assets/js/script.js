var introEl = document.querySelector("#intro-container");
var startButtonEl = document.createElement('button');
var quizContainerEl = document.querySelector("#quiz-container");
var currentQuestionEl = document.querySelector("#current-question-container");
var timerEl = document.getElementById("countdown");
var answerContainerEl = document.querySelector("#answer-container");
var score = 0;
var timeLeft;
var i = 0;
var button1El = document.createElement('button');
var button2El = document.createElement('button');
var button3El = document.createElement('button');
var button4El = document.createElement('button');
var questionEl = document.createElement('h2');

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

   showQuestion(i);   
    //    you can control when to show next question
    //     1. you can have a counter starting on 0
    //     2. you show the first question and the choices
    //     3. you have an onclick for the choices
    //     4. when the user click you verify the answer and the increase the counter and then show next question
    //     it is like a loop but controlled by you
    
}; 

var showQuestion = function() {
    
    
    //add text content to elements
    questionEl.textContent = questions[i].question;
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
    console.log(answerContainerEl); 
};

var checkAnswer = function(event) {
    // i++; 
     if (i >= questions.length-1) {
        
          endQuiz();
      } else {
    
        
    // console.log(event.target.textContent);
        // console.log(questions[i].correctAnswer);
       if (event.target.textContent === questions[i].correctAnswer) { //if button pressed text matches correct answer text
            score++;
            i++;
            showQuestion();
            console.log(i);
            console.log(score);
        } else {
            i++;
            timeLeft -= 5;
            showQuestion();
            console.log('wrong answer');
        }
    }
}




var endQuiz = function() {
  
   removeAllChildNodes(quizContainerEl);
   //removeAllChildNodes(countdown);
   timerEl.style.display = "none"; 
};



function countDown() { 
    timeLeft = 75;

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
//answerContainerEl.addEventListener('click', checkAnswer);

button1El.addEventListener('click', checkAnswer);
button2El.addEventListener('click', checkAnswer);
button3El.addEventListener('click', checkAnswer);
button4El.addEventListener('click', checkAnswer);