var readlineSync = require("readline-sync");
var score = 0;
var name = readlineSync.question("What's your name ");
console.log("Welcome " + name + " to DO YOU KNOW Rohan?");
console.log("Answer in lowercase " )
function game(question, answer) {
  var temp = readlineSync.question(question);
  if (temp == answer) {
    console.log("Right");
    score = score + 1;
  }
  else {
    console.log("Wrong");
    if (score >= 1)
      score = score - 1;

  }
}


game("Where do I live? ", "kolkata");
game("My Favourite super hero ", "superman");
game("My favourite food ", "dosa");
game("My First School name ","birla bharati");
game("My favourite Actor in bollywood ","aamir khan")
console.log(name + " your final score is: " +score);
