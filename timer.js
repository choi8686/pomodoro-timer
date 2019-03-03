/*1. start button = start & pause.
2. reset button = all reset.
3. work & break durations can be modified.
4. when finish work session time, convert break time. and convert session time when break time is done.
  ex) 25min -> 5min -> 25min*/

var startBtn = document.querySelector("#start-btn");
var stopBtn = document.querySelector("#stop-btn");
var resetBtn = document.querySelector("#reset-btn");
var workMin =  document.querySelector("#work-min");
var breakMin =  document.querySelector("#break-min");
var display = document.querySelector(".time-display");
var workPlus = document.querySelector("#work-plus");
var workMinus = document.querySelector("#work-minus");
var breakPlus = document.querySelector("#break-plus");
var breakMinus = document.querySelector("#break-minus");
var current = document.querySelector('#current');
var seconds = 1500;
var breaks = 300;
var countdown = 0;
var breakCountdown = 0;
var water = 0;
var isPaused = true;
var isBreak = false;

setInterval(timer, 1000);

startBtn.addEventListener('click', clickStart);
stopBtn.addEventListener('click', clickStop);
resetBtn.addEventListener('click', clickReset);
workPlus.addEventListener('click', setWorkTime);
workMinus.addEventListener('click', setWorkTime);
breakPlus.addEventListener('click', setBreakTime);
breakMinus.addEventListener('click', setBreakTime);

function convertSeconds(s){
  var min = Math.floor(s / 60);
  var sec = ("0" + s % 60).slice(-2);
  return min + ":" + sec;
}

function timer(){
  if(isPaused == false && seconds - countdown > 0){
    countdown++;
    display.innerText = convertSeconds(seconds - countdown);
  }
  if(seconds - countdown <= 0){
    isPaused = true;
    isBreak = true;
    current.innerText = 'Break Time'
    breakTime();
  }
}

function breakTime(){
    if(isBreak === true){
      breakCountdown++;
      display.innerText = convertSeconds(breaks - breakCountdown);
    }
    if(breaks - breakCountdown < 0){
      clickReset();
      current.innerText = 'Work Time'
    }
}
/*function breakTimer(){
  if(seconds <= 0){
    isPaused = true;
    isBreak = false;
  }
  breakTime();
}*/
function clickStart(){
  isPaused = false;
  isBreak = false;
  //startBtn.innerText = "STOP"
}

function clickStop(){
  isPaused = true;
  isBreak = false;
}

function clickReset(){
  countdown = 0;
  isPaused = true;
  isBreak = false;
  display.innerText = convertSeconds(seconds - countdown);
}

function setWorkTime(event){
  if(event.target.classList.contains("fa-plus")){
    seconds += 60;
  } else if(event.target.classList.contains("fa-minus")){
    seconds -= 60;
  }
  workMin.innerText = seconds / 60;
  display.innerText = convertSeconds(seconds - countdown);
}

function setBreakTime(event){
  if(event.target.classList.contains("fasex")){
    breaks += 60;
  } else if(event.target.classList.contains("fasss")){
    breaks -= 60;
  }
  breakMin.innerText = breaks / 60;
}
