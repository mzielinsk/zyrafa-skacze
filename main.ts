for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        . . . . .
        # # . . .
        . # . . .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        # # . . .
        . # . . .
        . # # # .
        . # . # .
        . . . . .
        `)
}
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . # . . .
            . # # # .
            . # . # .
            . . . . .
            . # # # .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            # # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
        basic.showLeds(`
            # # . . .
            . # # # .
            . # . # .
            . . . . .
            . # # # .
            `)
    }
})
