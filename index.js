var readlineSync = require("readline-sync");
const chalk = require("chalk")
var score = 0;
console.log(chalk.black.bgYellow.bold("Hiiii, Welcome to the quizz"));
console.log("But first");
var user = readlineSync.question("Who are you :- ");
console.log("Hey " + user.toUpperCase() + " lets see how much do you know Me")
console.log("*************************************************")
console.log(" ")

var questions = [
  {
    ques: "Am I married?",
    ans: "no"
  },
  {
    ques: "Am I graduate?",
    ans: "yes"
  },
  {
    ques: "Do I like travelling?",
    ans: "yes"
  },
  {
    ques: "Am I introvert or extrovert?",
    ans: "introvert"
  },
  {
    ques: "Do I like chemical engineering anymore?",
    ans: "no"
  },
]

function ask(ques, ans) {
  var userAnswer = readlineSync.question(ques+ " ");
  if(userAnswer.toLowerCase() === ans){
    console.log(chalk.green("You are correct"))
    score += 1;
    console.log(chalk.blue("Score = " + score));
  }
  else {
    console.log(chalk.red("SORRY! you are wrong"));
    console.log(chalk.blue("Score = " + score))
  }
  console.log(chalk.yellow("--------------"))
  console.log(" ")
}

for(var i = 0; i<questions.length; i++){
  ask(questions[i].ques,questions[i].ans)
}
console.log("Yay! " + chalk.black.bgYellow.bold(user.toUpperCase()) + "...you score "+ chalk.black.bgYellow.bold(score))
if(score>= 4){
  console.log("WOW! you know me so well")
}
else if(score >=2 && score <4){
  console.log("You know me little little. Go and search me on google....You will not find me there. LOL")
}
else{
  console.log("LOL you don't know me")
}