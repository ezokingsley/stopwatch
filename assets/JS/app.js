const stopwatchTimer = document.querySelector('.stopwatch-timer')
const stopwatchStartBtn = document.querySelector('.stopwatch-btn-start')
const stopwatchStopBtn = document.querySelector('.stopwatch-btn-stop')
const stopwatchResetBtn = document.querySelector('.stopwatch-btn-reset')

let stopwatchMilli = 0
let stopwatchSeconds = 0
let stopwatchMinutes = 0
let interval;

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
  stopwatchTimer.innerHTML = '00:00:000'
}
stopwatchResetBtn.addEventListener("click", resetStopWatch)