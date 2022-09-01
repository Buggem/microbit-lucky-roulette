let playedfanfare = false
let currentimg = 0
let m = 0
let millis = 0
let imgs: Image[] = []
let choose = false
choose = true
imgs[0] = images.createImage(`
    . # # # .
    # . . . #
    . # # # .
    . . # . .
    . # # # .
    `)
imgs[1] = images.createImage(`
    . # # # .
    # . . . #
    # . . . #
    . # . # .
    . # # # .
    `)
loops.everyInterval(1, function () {
    millis += 1
})
input.onButtonPressed(Button.A, function () {
    choose = false
})
basic.forever(function () {
    music.setBuiltInSpeakerEnabled(true)
    if (choose) {
        music.playMelody("C E G B G E C C5 ", 255)
    }
    if (!(choose)) {
        if(!playedfanfare) {
            music.playMelody("F A C5 - C5 - C5 C5 ", 188)
            playedfanfare = true
        }
    }
})
basic.forever(function () {
    let t = 0
    if (!(choose)) {
        return
    }
    if (m < millis - t) {
        if (currentimg < imgs.length - 1) {
            currentimg += 1
        } else {
            currentimg = 0
        }
        m = millis
    }
})
basic.forever(function () {
    imgs[currentimg].showImage(0)
})
