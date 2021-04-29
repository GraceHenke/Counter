radio.onReceivedNumber(function (receivedNumber) {
    clicks += 1
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
let clicks = 0
radio.setGroup(47)
basic.forever(function () {
    clicks = 0
    Kitronik_VIEWTEXT32.showString("" + clicks + " FT")
})
