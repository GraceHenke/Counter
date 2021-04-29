clicks = 0

def on_received_number(receivedNumber):
    global clicks
    clicks += 1
radio.on_received_number(on_received_number)

def on_forever():
    global clicks
    radio.set_group(47)
    clicks = 0
    Kitronik_VIEWTEXT32.show_string("You've walked " + str((clicks) + "feet"))
basic.forever(on_forever)
