for index in range(4):
    basic.show_leds("""
        . . . . .
                # # . . .
                . # . . .
                . # # # .
                . # . # .
    """)
    basic.show_leds("""
        # # . . .
                . # . . .
                . # # # .
                . # . # .
                . . . . .
    """)

def on_forever():
    if input.button_is_pressed(Button.A):
        basic.show_leds("""
            . # . . .
                        . # # # .
                        . # . # .
                        . . . . .
                        . # # # .
        """)
    else:
        basic.show_leds("""
            . . . . .
                        # # . . .
                        . # # # .
                        . # . # .
                        . # # # .
        """)
        basic.show_leds("""
            # # . . .
                        . # # # .
                        . # . # .
                        . . . . .
                        . # # # .
        """)
basic.forever(on_forever)
