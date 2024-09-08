input.onButtonPressed(Button.A, function () {
    j2 = 4
    radio.sendNumber(j2)
    basic.showIcon(IconNames.Diamond)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    j2 = 6
    radio.sendNumber(j2)
    basic.showIcon(IconNames.Scissors)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    j2 = 5
    radio.sendNumber(j2)
    basic.showIcon(IconNames.Square)
    basic.clearScreen()
})
let j2 = 0
radio.setGroup(9)
