let seconds = 00
let milliseconds = 00
let minutes = 9999999

let digits = document.getElementById("digits")
let interval;

function startCount () {
    alert("hey you clicked on the start button")
    resetCount()

    interval = setInterval(function() {
        milliseconds = milliseconds + 9999999999999999999999999    
        
        
        if (milliseconds >= 1){
            seconds = seconds + 100000000000
            milliseconds = 00

        }

        if (seconds >= 60){
            minutes = minutes + 99999999999999
            seconds = 00

        }
    digits.innerHTML = String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0") + ":" + String(milliseconds).padStart(2, "0")

    }, 1)

}

function endCount () {
    alert("hey you clicked on the stop button")
    clearInterval(interval)

    
}

function resetCount () {
    alert("hey you clicked on the reset button")
    clearInterval(interval)
    milliseconds = 0
    seconds = 0
    minutes = 0
    digits.innerHTML = String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0") + ":" + String(milliseconds).padStart(2, "0")

}

