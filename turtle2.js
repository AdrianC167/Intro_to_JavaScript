let aquarium = document.getElementById("aquarium")

let turtle = new RealTurtle.default(aquarium, {autoStart: true})

function lettuce(sides, size = 10) {
for (let i = 0; i < sides; i++) {
turtle.forward(size)
turtle.right(360/sides)
}}

for (let j = 0; j < 99; j++) {

    lettuce((Math.random() * 10) + 3)

}
