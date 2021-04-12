var readlineSync = require('readline-sync');
var score = 0;

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("Congrats, you answered it correctly!");
    score = score+1;
  }
  else {
    console.log("Sorry, your answer is incorrect. The correct answer is: ", answer);
  
  }
  console.log("Your Score is: ", score)
}

var highScore = [
  {
    "name": "Riya",
    "score": "8",
  },
  {
    "name": "Anmol",
    "score": "9"

  },
  {
    "name": "Ankit",
    "score": "10"
  },
  {
    "name": "Vini",
    "score": "7"
  }
]

var questionsList = [{
  "question": "What Indian City is Capital of 2 States?",
  "answer": "Chandigarh"
},
{
  "question": "How many countries border India?",
  "answer": "6"
},
{
  "question": "What is the Capital of Gujrat?",
  "answer": "Gandhinagar"
},
{
  "question": "What is approximately area of India in square kilometers?",
  "answer": "3000000"
},
{
  "question": "Who was the president of India in 2009? ",
  "answer": "Pratibha Patil"
},
{
  "question": "What is India's smallest state by area?",
  "answer": "Goa"
},
{
  "question": "During what period does India's wet season occur?",
  "answer": "June-October"
},
{
  "question": "Which of thease bodies of water does not border india?(Bay of Bengal, Indian Ocean, Red Sea, Arabian Sea) ",
  "answer": "Red Sea"
},
{
  "question": "Delhi is located along what river?(Yamuna, Nile, Ganges, Bhramhaputra) ",
  "answer": "Yamuna"
},
{
  "question": "When is India's independence day?",
  "answer": "August 15"
}]

for(i=0;i<questionsList.length; i++) {
  play(questionsList[i].question, questionsList[i].answer)
}

var highestscore = score

for(i=0;i<highScore.length;i++) {
  if (parseInt(score) < parseInt(highScore[i].score)) {
    highestscore = highScore[i].score
    console.log("Your score is not the highest score. ");
  } 
  console.log("Score of other players are: ");
  console.log("Name: ", highScore[i].name);
  console.log("Score: ", highScore[i].score);
}

if (parseInt(score) == parseInt(highestscore)) {
   console.log("Your score is the highest score.");
   console.log("Your score is: ", score);    
}