input.onGesture(Gesture.Shake, function () {
    dice = 0
    basic.pause(200)
    dice = randint(1, 3)
})
let dice = 0
dice = 0
basic.forever(function () {
    if (dice == 0) {
        basic.showString("???")
    } else if (dice == 1) {
        basic.showString("Rock")
    } else if (dice == 2) {
        basic.showString("Paper")
    } else {
        basic.showString("scissors")
    }
})
