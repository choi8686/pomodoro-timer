/*1. start button = start & pause.
2. reset button = all reset.
3. work & break durations can be modified.
4. when finish work session time, convert break time. and convert session time when break time is done.
  ex) 25min -> 5min -> 25min*/

var startBtn = document.querySelector("#start-btn");
var resetBtn = document.querySelector("#reset-btn");
var workMin =  document.querySelector("#work-min")
var breakMin =  document.querySelector("#break-min")
var display = document.querySelector(".time-display")
var workPlus = document.querySelector("#work-plus");
var workMinus = document.querySelector("#work-minus");
var breakPlus = document.querySelector("#break-plus");
var breakMinus = document.querySelector("#break-minus");

var seconds = 1500;
var workTime = 25;
var breakTime = 5;
var countdown = 0;
var interval = setInterval(timer, 1000);
var isPaused = true;


function convertSeconds(s){
  var min = Math.floor(s / 60);
  var sec = s % 60;
  return min + ":" + sec
}

function timer(){
  countdown++;
  display.innerText = convertSeconds(seconds - countdown);
}

function clickStart(){
  interval;
  isPaused = false;
}

function clickStop(){
  clearInterval(interval);
  isPaused = true;
  if(isPaused === true){
    clickStart();
  }
}





function init(){

}
