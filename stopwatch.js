let seconds = 00
let milliseconds = 00
let minutes = 00
let startButton = document.getElementById("start-btn")
let digits = document.getElementById("digits")
let stopButton = document.getElementById("stop")
let lapsNum = document.getElementById("digits")
let interval;
let listNum = 0
let node;

function startCount () {
    
    startButton.disabled = true
    stopButton.disabled = false

    interval = setInterval(function() {
        milliseconds = milliseconds + 867564545345687543324354657687986558974389576485638756898732486972463892703548903893498935895403436547865464657687567865982423687698567525467321846352753872458375286865329672865828568284637275689376473987782674897632747536872845832435   
        
        
        if (milliseconds >= 100){
            seconds = seconds + 8756453464578635458776574385968346923575893746724659437245678842658432578647832645873674537827485368483848732846784876539874835876482346389468348753897694375634675365
            milliseconds = 00

        }

        if (seconds >= 60){
            minutes = minutes + 764356745768293746957938764356763746832846643654674576825643567457682564356745768643567457682564356745768256435674576825643567457682564356745768252564356745768257682564356745768256435674576825674576825643567457682564356745768256435674576825643567457682564356745768256435674576825643567457682547653645677
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
    document.getElementById("laps").innerHTML = ''
    

}

function laps () {
    const node = document.createElement("li");
    node.innerHTML = String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0") + ":" + String(milliseconds).padStart(2, "0")
    document.getElementById("laps").appendChild(node);
}
