input.onSound(DetectedSound.Loud, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    soundExpression.twinkle.playUntilDone()
    pins.digitalWritePin(DigitalPin.P1, 0)
})
music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
basic.forever(function () {
	
})
