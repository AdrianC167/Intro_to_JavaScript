let aquarium = document.getElementById("aquarium")

let turtle = new RealTurtle.default(aquarium, {autoStart: true})

turtle.setStrokeColorRGB(213,123,232)
turtle.setFillStyle("lightgrey")



turtle.arc(0, 0)



turtle.setPosition(60, 120)

turtle.beginPath()
for (let i = 0; i < 4; i++) {
    turtle.forward(75)
    turtle.right(90)
}
turtle.closePath()
turtle.fill()

turtle.forward(75)

turtle.setFillStyle("black")
turtle.beginPath()

turtle.right(45)
turtle.forward(55)
turtle.right(91)
turtle.forward(55)
turtle.right(45)

turtle.closePath()
turtle.fill()

turtle.forward(75)


turtle.right(90)
turtle.forward(30)

turtle.setFillStyle("white")
turtle.beginPath()
turtle.right(90)
turtle.forward(20)
turtle.left(90)
turtle.forward(15)
turtle.left(90)
turtle.forward(20)
turtle.left(90)
turtle.forward(15)
turtle.closePath()
turtle.fill()

turtle.right(180)
turtle.forward(45)

turtle.setPosition(83, 80)

turtle.beginPath()
for (let i = 0; i < 4; i++) {
    turtle.forward(15)
    turtle.right(90)
}
turtle.closePath()
turtle.fill()


turtle.setPosition(126, 80)
turtle.beginPath()
for (let i = 0; i < 4; i++) {
    turtle.forward(15)
    turtle.right(90)
}
turtle.closePath()
turtle.fill()



turtle.setPosition(15, 30)
turtle.setFillStyle("yellow")


turtle.beginPath
turtle.arc(20, 360)

turtle.closePath()
turtle.fill()



turtle.setStrokeColorRGB(0,255,0)
turtle.setPosition(135, 122)
turtle.beginPath()
turtle.forward(120)
turtle.right(180)
turtle.forward(180)
turtle.closePath()

turtle.left(90)

turtle.beginPath()
for (let i = 0; i < 60; i++) {
    turtle.forward(4)
    turtle.right(180)
    turtle.forward(4)
    turtle.right(90)
    turtle.forward(3)
    turtle.right(90)
}

