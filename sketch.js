var canva;
var gameState=0
var constestantCount
var database
var quiz
var question
var constests


function setup(){
  canvas = createCanvas(850,400);
  database=firebase.database()

  quiz=new Quiz()
  quiz.getState()
  quiz.start()
}


function draw(){
  background("pink");

  
}
