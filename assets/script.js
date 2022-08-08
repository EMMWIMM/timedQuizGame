// make vars for timer, answers, buttons
var timerEl= document.getElementById('counter');
var choiceA= document.getElementById('a');
var choiceB= document.getElementById('b');
var choiceC= document.getElementById('c');
var choiceD= document.getElementById('d');
var startButton= document.getElementById('start');
var score= 0;
var initials= document.querySelector(".initials")
var question= document.querySelector(".question")
var end= document.querySelector(".end")
var scoreContainer= document.querySelector(".highscores")

var questions =[
{
  question: "what does HTML stand for?",
  choiceA:"hyper text markup language",
  choiceB: "HyperLinks and Text markup Languages",
  choiceC: "home Tool Markup Language",
  choiceD: " Homicidal Techno murder League",
  correct: "a",
}


]

var lastQIndex = questions.length - 1;
var runningQindex = 0;

function renderQ(){
  var q = questions[runningQindex];
  question.innerHTML = "<h2>" + q.question + "</h2>";
  choiceA.innerHTML = q.choiceA ;
  choiceB.innerHTML = q.choiceB ;
  choiceC.innerHTML = q.choiceC ;
  choiceD.innerHTML = q.choiceD ;

}

//game timer
function countdown() {
  var timeLeft = 60;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.innerHTML = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.innerHTML = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `endGame'
      endGame();
    }
  }, 6000);
}




// start game/ timer
startButton.addeventlistener( "click", startQuiz)
//can we have multiple event listeners for one element?

function startQuiz(){
  start.style.display = "none";
    renderQ();
  countdown();

  quiz.style.display ="block";
}


// wrong answer take away5 seconds
function wrongA(){}

//make starting div go away and questions/timer ap
// log time in local console memory
// log correct and incorrect answers
// choose answer move on
function checkanswer(answer) {
  if (questions[runningQindex].correct == answer) {
    score ++;
  } else {
wrongA()
  }
  if (runningQindex< lastQIndex) {
    runningQindex++;
    renderQ();

  } else {
    endGame();
  }

}


//end game and tkae initials into local storage for highscore board
function endGame() {}
// bring up input box for initials to be added to HS



//list highscores
