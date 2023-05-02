let seconds = 00
let milliseconds = 00
let minutes = 00
let startButton = document.getElementById("start-btn")
let digits = document.getElementById("digits")
let stopButton = document.getElementById("stop")
let interval;



function startCount () {
    
    startButton.disabled = true
    stopButton.disabled = false

    interval = setInterval(function() {
        milliseconds = milliseconds + 1   
        
        
        if (milliseconds >= 100){
            seconds = seconds + 1
            milliseconds = 00

        }

        if (seconds >= 60){
            minutes = minutes + 1
            seconds = 00

        }
    digits.innerHTML = String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0") + ":" + String(milliseconds).padStart(2, "0")

    }, 10)

}

function endCount () {
    alert("hey you clicked on the stop button")
    clearInterval(interval)
    startButton.disabled = false
    stopButton.disabled = true

}

function resetCount () {
    startButton.disabled = false
    stopButton.disabled = true
    alert("hey you clicked on the reset button")
    clearInterval(interval)
    milliseconds = 0
    seconds = 0
    minutes = 0
    digits.innerHTML = String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0") + ":" + String(milliseconds).padStart(2, "0")

}

