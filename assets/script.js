// make vars for timer, answers, buttons
var timerEl= document.getElementById('counter');
var choiceA= document.getElementById('a');
var choiceB= document.getElementById('b');
var choiceC= document.getElementById('c');
var choiceD= document.getElementById('d');
var startButton= document.getElementById('start');
var score= 0;
var initials= document.querySelector(".initials");
var question= document.querySelector(".question");
var end= document.querySelector(".end");
var scoreContainer= document.querySelector(".highscores");
var quiz = document.querySelector(".quiz");
var timeLeft = 100;
var points = document.querySelector(".points")
var pointsEarned = document.querySelector(".pointsEarned")
var madeIt = document.querySelector(".madeIt")
var replay = document.getElementById('playAgain')
var name = document.querySelector(".name")
var questions =[
{
  question: "1: What does HTML stand for?",
  choiceA:"hyper text markup language",
  choiceB: "HyperLinks and Text markup Languages",
  choiceC: "home Tool Markup Language",
  choiceD: " Homicidal Techno murder League",
  correct: "a",
},
{
  question: "2: What does CSS stand for?",
  choiceA: "Constantly Single Singles",
  choiceB: "Capable Sister Sitter",
  choiceC: "Charlie Sings Silently",
  choiceD: "Cascading Style Sheets",
  correct: "d",
},
{
  question: "3: Who invented the internet?",
  choiceA: "Al Gore",
  choiceB: "Vinton Cerf",
  choiceC: "Bob Kahn",
  choiceD: "Vinton Cerf and Bob Kahn",
  correct: "d"
},
{
  question: "4: Who invented javascript?",
  choiceA: "Al Gore",
  choiceB: "Brendan Eich",
  choiceC: "Donald Duck",
  choiceD: "Java",
  correct: "b"
},
{
  question: "5: Who invented HTML?",
  choiceA: "Tim Berners-Lee",
  choiceB: "World Wide Web Consortium",
  choiceC: "Al Gore",
  choiceD: "XML",
  correct: "a"
},
{
  question: "6: Computer scientist Ray Tomlinson, inventor of email, sent the first email in 1974.  What was the first email he sent?",
  choiceA: "Mr Watson, come here. I want to see you.",
  choiceB: "Dear Sir: I have been requested by the Nigerian National Petroleum Company to contact you for assistance in resolving a matter...",
  choiceC: "This should have been a meeting.",
  choiceD: "He doesn't actually remember.",
  correct: "d"
},
{
  question: "7: After the invention of email in 1974, how many years did it take before the first SPAM email was sent?",
  choiceA: "1",
  choiceB: "2",
  choiceC: "3",
  choiceD: "4",
  correct: "d"
},
{
  question: "8: Compuserve engineer Steve Wilke invented the .gif file format. How did he INTEND for it to be pronounced.",
  choiceC: "Hard G like GIFT",
  choiceD: "Soft G like JIFFY, but he's not a linguist, so he is WRONG!",
  choiceA: "Silent G : IF ",
  choiceB: "Seriously any answer other than a HARD G is WRONG",
  correct: "C"
},
{
  question: "9: When did the public gain access to the internet?",
  choiceA: "1973",
  choiceB: "1991",
  choiceC: "2000",
  choiceD: "maybe they shouldn't have... ",
  correct: "b"
},
{
  question: "10: How many questions did we come up with before realizing they needed to be JAVASCRIPT questions?",
  choiceA: "None",
  choiceB: "All of them",
  choiceC: "Ten",
  choiceD: "Both B and C are correct",
  correct: "D"
}

]

var lastQIndex = questions.length - 1;
var runningQindex = 0;

function renderQ(){
  var q = questions[runningQindex];
  question.innerHTML = "<h2>" + q.question + "</h2>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;

}

//game timer
function countdown() {
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.innerHTML = timeLeft + ' seconds remaining';
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.innerHTML = timeLeft + ' second remaining';
      timeLeft--;
    } else {

      timerEl.textContent = '';
      clearInterval(timeInterval);
      // Call the `endGame'
      endGame();
    }
  }, 1000);
}




// start game/ timer

startButton.addEventListener( "click", startQuiz);
//can we have multiple event listeners for one element?

function startQuiz(){
  start.style.display = "none";
    renderQ();
  countdown();

  quiz.style.display ="block";
}


// wrong answer take away5 seconds


//make starting div go away and questions/timer ap
// log time in local console memory
// log correct and incorrect answers
// choose answer move on
function checkanswer(answer) {
  if (questions[runningQindex].correct == answer) {
    score ++;
    console.log("NICE!");
  } else {
    timeLeft --;
    timeLeft --;
    timeLeft --;
    timeLeft --;
    timeLeft --;
    console.log("OOPS");
  }
  if (runningQindex< lastQIndex) {
    runningQindex++;
    renderQ();

  } else {
    timeLeft=0;
    endGame();
  }
points.textContent = "points:" + score + "/10"

}

function initialsSubmit(){
event.preventDefault();

  var initialIN = document.querySelector("#initialIN").value;
    var yN = localStorage.getItem("initialIN");
  if (initialIN === "") {
    displayMessage(" error, initials cannot be blank")
  }
  else {
    localStorage.setItem("initialIN", initialIN);
    localStorage.setItem("score", score);

    end.style.display = "none";
    madeIt.style.display = "block";
name.textContent = yN + " you scored";
  }
  pointsEarned.textContent = score + "/10 poits!";

}

// function startOver(){
//   start.style.display = "block";
//   madeIt.style.display = "none";
//   end.style.display = "none";
//   quiz.style.display = "none";
// }
// var yN = localStorage.getItem("initialIN");
    // renderHS()
    // console.log(initialIN + "just played the game");
    //   highS.textContent = score;
      // name.textContent = yN;




//end game and tkae initials into local storage for highscore board
function endGame() {
if(runningQindex>= lastQIndex || timeLeft == 0){
  console.log("gameover");
  quiz.style.display = "none";
  end.style.display = "block";
  // console.log(score);
  // name.innerHTML= name;
  // score.innerHTML = score;
} else{
start.style.display = "block"
}
}







// function smallCount() {
//   console.log("countdown() started");
//   // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//   var timeInterval = setInterval(function () {
//     var seconds= 10
//     // As long as the `timeLeft` is greater than 1
//     if (timeLeft > 1) {
//       timeLeft--;
//     } else {
//       replay.style.display = "block"
//       // Use `clearInterval()` to stop the timer
//       clearInterval(timeInterval);
//     }
//   }, 1000);
// }
