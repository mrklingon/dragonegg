input.onSound(DetectedSound.Loud, function () {
    basic.showLeds(`
        . # # . .
        # . . # .
        # . # . #
        . # . . #
        . . # # .
        `)
    pins.digitalWritePin(DigitalPin.P1, 1)
    soundExpression.twinkle.playUntilDone()
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.showLeds(`
        . . . . .
        # . . . .
        # # # . .
        # # . . #
        . # # # .
        `)
    basic.pause(2000)
    basic.showLeds(`
        . # # . .
        # . . # .
        # . . . #
        . # . . #
        . . # # .
        `)
})
input.setSoundThreshold(SoundThreshold.Loud, 199)
music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
basic.showLeds(`
    . # # . .
    # . . # .
    # . . . #
    . # . . #
    . . # # .
    `)
basic.forever(function () {
	
})
