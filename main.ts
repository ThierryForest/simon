basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        led.plot(0, 1)
    } else if (input.buttonIsPressed(Button.B)) {
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        led.plot(1, 1)
    } else if (input.pinIsPressed(TouchPin.P0)) {
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (input.pinIsPressed(TouchPin.P1)) {
        led.plot(2, 0)
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (input.pinIsPressed(TouchPin.P2)) {
        led.unplot(2, 1)
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (input.logoIsPressed()) {
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        led.unplot(2, 2)
    } else if (input.buttonIsPressed(Button.AB)) {
        led.toggle(3, 0)
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else {
        basic.clearScreen()
    }
})
