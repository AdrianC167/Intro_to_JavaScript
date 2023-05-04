let myForm = document.getElementById("form")
let synth = new Tone.Synth().toDestination()
let note = document.getElementById("Name")

function onSubmit (e) {
 
    e.preventDefault()
    alert(myForm.elements["Name"].value)

    synth.triggerAttack(myForm.elements["Name"].value)

    let duration = parseFloat(myForm.elements["duration"].value)

    synth.triggerRelease(Tone.now() + duration)

}

myForm.addEventListener("submit", onSubmit)