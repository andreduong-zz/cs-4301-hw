var questions = [
  "What is my full name?",
  "Which programming language I use the most in my 2021 summer internship?",
  "What university do I go to?",
  "What city do I live in?",
  "Which company did I intern at this 2021 summer?",
];
var answers = ["Andre Duong", "TypeScript", "UT Dallas", "Dallas", "Microsoft"];

var i = 0; // question count
var score = 0;

var questionlabel = document.getElementById("question");
var validateLabel = document.getElementById("validate");
var flag = false;

var start = new Date().getTime(); // get starting time

generatequestion();

function generatequestion() {
  //if 5 questions are generated stop quuiz and display score and time
  if (i > 4) {
    // if all 5 questions are answered
    var end = new Date().getTime(); // get end time
    var seconds = ((end - start) / 1000).toFixed(0); // get time in second
    document.getElementById("time").innerHTML = seconds + " seconds";
    document.getElementById("container").style.display = "none";
    document.getElementById("displayResults").style.display = "block";
    document.getElementById("score").innerHTML = score + "/5";
  } else {
    flag = false;
    //input field set blank
    document.getElementById("answer").value = ""; // initialize input field
    document.getElementById("isAnswerTrue").disabled = false; // enable submit button
    questionlabel.innerHTML = questions[i]; // display question
  }
}

function isAnswerTrue() {
  flag = true;
  var ans = document.getElementById("answer").value; // get input value

  if (ans == answers[i]) {
    score = score + 1;
    validateLabel.innerHTML = "Correct answer";
    document.getElementById("isAnswerTrue").disabled = true;
    return true;
  } else if (!(ans == answers[i])) {
    validateLabel.innerHTML = "Wrong answer";
    return false;
  }
}

function next() {
  if (flag == true) {
    i++;
    validateLabel.innerHTML = "";
    generatequestion();
  } else {
    validateLabel.innerHTML = "You did not submit the answer.";
  }
}

function skip() {
  i++;
  validateLabel.innerHTML = "";
  generatequestion();
}

function startAgain() {
  document.getElementById("container").style.display = "block";
  document.getElementById("displayResults").style.display = "none";
  i = 0;
  score = 0;
  generatequestion();
  start = new Date().getTime();
}

var display = document.getElementById("display");

function displayAnswers() {
  var tags = "";
  for (var x = 0; x < 5; x++) {
    tags = display.innerHTML =
      tags + "<h3>" + questions[x] + "</h3><p>" + answers[x] + "</p>";
  }
}
