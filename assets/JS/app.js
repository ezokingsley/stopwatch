// stopwatch variable Declaration
const stopwatchTimer = document.querySelector('.stopwatch-timer')
const stopwatchStartBtn = document.querySelector('.stopwatch-btn-start')
const stopwatchStopBtn = document.querySelector('.stopwatch-btn-stop')
const stopwatchResetBtn = document.querySelector('.stopwatch-btn-reset')

// Timer Variable Declaration
let timerForm = document.querySelector('.timer-input')

const timerInputMinutes = document.querySelector('#minutes')
const timerInputSeconds = document.querySelector('#seconds')
const timerInputMillisec = document.querySelector('#millisec')

const timerDisplayMinutes = document.querySelector('#timer-display-minutes')
const timerDisplaySeconds = document.querySelector('#timer-display-seconds')
const timerDisplayMillisec = document.querySelector('#timer-display-millisec')



const timerStartBtn = document.querySelector('.timer-btn-start')
const timerStopBtn = document.querySelector('.timer-btn-stop')

    // Declaratoin of variable getElementById timerInput
      let Minutes = document.getElementById('minutes')
      let Seconds = document.getElementById('seconds')
      let Millisec = document.getElementById('millisec')

    // Declaration of variable getElementId timerDisplay
      let DisplayMinutes =  document.getElementById('timer-display-minutes')    
      let DisplaySeconds =  document.getElementById('timer-display-seconds')    
      let DisplayMillisec = document.getElementById('timer-display-millisec')

    
      // Store a Reference to a variable Timer
    let startTimer = null;

let stopwatchMilli = 0
let stopwatchSeconds = 0
let stopwatchMinutes = 0
let interval;

// if Statement Function
function runStopWatch(){
  stopwatchMilli += 100

  if(stopwatchMilli > 999){
    stopwatchSeconds++
    stopwatchMilli = 0
  }

  if(stopwatchSeconds > 59) {
    stopwatchMilli++
    stopwatchSeconds = 0
  }
  console.log(stopwatchMinutes, stopwatchSeconds, stopwatchMilli)
  stopwatchTimer.innerHTML = stopwatchMinutes  + ":" + stopwatchSeconds + ":" + stopwatchMilli

}
// addEventLister Function/methods Timer

const timerReplace = () => {
  var errormessage = "";

    if (Minutes.value ==""){
      errormessage += "Enter Minutes \n";
      Minutes.style.borderColor = "Red";
    }
    if (Seconds.value ==""){
      errormessage += "Enter Seconds \n";
      Seconds.style.borderColor = "Red";
    }
    if (Millisec.value ==""){
      errormessage += "Enter Millisec \n";
      Millisec.style.borderColor = "Red";
    }
    if (errormessage != ""){
      alert("Can't Start an Empty Timer");
      return false;
    }
  timerDisplayMinutes.innerHTML =  timerInputMinutes.value;
  timerDisplaySeconds.innerHTML =  timerInputSeconds.value;
  timerDisplayMillisec.innerHTML =  timerInputMillisec.value;
}
timerStartBtn.addEventListener('click', timerReplace)

const timerReset = () => {
  Minutes.value = 0 + '0'
  Seconds.value = 0 + '0'
  Millisec.value = 0 + '0'

  DisplayMinutes.innerHTML = 0 + '0'
  DisplaySeconds.innerHTML = 0 + '0'
  DisplayMillisec.innerHTML = 0 + '0'
  
  clearInterval(timerReplace)
}
timerStopBtn.addEventListener('click', timerReset)



// addEventListen Function/methods Stopwatch

const startStopWatch = () => {
    clearInterval(interval)
    interval = setInterval(runStopWatch, 100)
}
stopwatchStartBtn.addEventListener("click", startStopWatch)

const stopStopWatch = () => {
  clearInterval(interval)
}
stopwatchStopBtn.addEventListener("click", stopStopWatch)

const resetStopWatch = () => {
    stopwatchMilli = 0
    stopwatchSeconds = 0
    stopwatchMinutes = 0
    
    stopwatchTimer.innerHTML = '00:00:000'
    clearInterval(interval)
}
stopwatchResetBtn.addEventListener("click", resetStopWatch)