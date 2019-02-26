/*1. start button = start & pause.
2. reset button = all reset.
3. work & break durations can be modified.
4. when finish work session time, convert break time. and convert session time when break time is done.
  ex) 25min -> 5min -> 25min*/

var startBtn = document.querySelector("#start-btn");
var stopBtn = document.querySelector("#stop-btn");
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
var isPaused = true;
setInterval(timer, 1000);

startBtn.addEventListener('click', clickStart);
stopBtn.addEventListener('click', clickStop);
resetBtn.addEventListener('click', clickReset);
workPlus.addEventListener('click', setWorkTime);
workMinus.addEventListener('click', setWorkTime);

function convertSeconds(s){
  var min = Math.floor(s / 60);
  var sec = ("0" + s % 60).slice(-2);
  return min + ":" + sec;
}

function timer(){
  if(isPaused == false){
    countdown++;
    display.innerText = convertSeconds(seconds - countdown);
  }
}

function clickStart(){
  isPaused = false;
  //startBtn.innerText = "STOP"
}

function clickStop(){
  isPaused = true;
}

function clickReset(){
  countdown = 0;
  isPaused = true;
  display.innerText = convertSeconds(seconds - countdown);
}

function setWorkTime(event){
  if(event.target.innerText === "+"){
    seconds += 60;
  } else if(event.target.innerText === "-"){
    seconds -= 60;
  }
  workMin.innerText = seconds / 60;
  display.innerText = convertSeconds(seconds - countdown);
}
