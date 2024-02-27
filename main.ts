namespace SpriteKind {
    export const Fans = SpriteKind.create()
    export const chad = SpriteKind.create()
    export const youIG = SpriteKind.create()
    export const stageclue1 = SpriteKind.create()
    export const fansclue1 = SpriteKind.create()
    export const bodyclue1 = SpriteKind.create()
    export const selector = SpriteKind.create()
    export const lock = SpriteKind.create()
    export const bodyguard1 = SpriteKind.create()
    export const bodyguard2 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.lock, function (sprite, otherSprite) {
	
})
sprites.onOverlap(SpriteKind.selector, SpriteKind.stageclue1, function (sprite, otherSprite) {
    game.splash("Would you like to search ", "the stage for clues?")
    story.showPlayerChoices("Yes", "No")
    if (story.checkLastAnswer("Yes")) {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff999ddd999999d99999ddd999d99d9999ddd9999ddddddd999d999999ddd999ddddd99ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff99d999d99999d9999d999d99d99d999d999d999999d999999d99999d999d99d999999ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff99d9999d999d9d99d9999d99d99d999d999d999999d99999d9d999d9999d99d999999ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff99d9999d999d9d99d9999999d99d999d9999999999d99999d9d999d9999999d999999ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff99d9999d999d9d99d9999999d99d999d9999999999d99999d9d999d9999999d999999ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff99d999d9999d9d99d9999999d9d9999d9999999999d99999d9d999d9999999dddd999ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff99dddd9999d999d9d9999999dd999999ddd9999999d9999d999d99d9999999d999999ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff99d999d999ddddd9d9999999d9d99999999d999999d9999ddddd99d999dd99d999999ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff99d9999d99d999d9d9999999d99d9999999d999999d9999d999d99d9999d99d999999ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff99d9999d99d999d9d9999d99d99d9999999d999999d9999d999d99d9999d99d999999ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff99d9999d99d999d99d999d99d99d999d999d999999d9999d999d999d999d99d999999ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff999dddd999d999d999ddd999d99d9999ddd9999999d9999d999d9999ddd999ddddd99ffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777777777777777777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777777bbbbbbb777777777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777bbbbbbbbbbbbbbbbbb7777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777bbbbbbbbbbbbbbbbbbbbbb7777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7777bbbbbbbbbbbbbbbbbbbbbbbb7777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbb777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77777bbbbbbbbbbbbbbbbbbbbbbbbbb77777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffff3333333333fffffffffffffffffffffffffffff77bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffff33333333333ffffffffffffffffffffffffffff77bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffff3333ffffff3ff33ffffffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffff333f444444444ff33fffffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffff33f4444444444f4443fffffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffffffffffffffff333f333fffffffffffffffffffffffffffff
            ffffffffffff3333ff4444444444f444333fffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffffffffffffff333ff33f3333ffffffffffffffffffffffffff
            fffffffff3333ffff444444444441444433fffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffffffffffff333f1111111ff3ffffffffffffffffffffffffff
            fffffffff3f444444444444444444444433fffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777fffffffffffffffffff33ff1111111111333ffffffffffffffffffffffff
            fffffffff3f4444444444444444444444f3fffffffffffffffffffffff77bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77ffffffffffffffffff33f1111111111111f33fffffffffffffffffffffff
            fffffffff33333ffff111444441111111333ffffffffffffffffffffff77bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77ffffffffffffffffff331111111111111113ffffffffffffffffffffffff
            fffffffffffff333ff11111111111111133fffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffffffffff3f1111111111111113ffffffffffffffffffffffff
            fffffffffffffff33f11fff111fff111133fffffffffffffffffffffff77bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77ffffffffffffffffff3f1111fff111fff1133fffffffffffffffffffffff
            ffffffffffffffff3f11ffff11ffff11133fffffffffffffffffffffff77bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77ffffffffffffffffff3f111ffff11ffff11f3fffffffffffffffffffffff
            ffffffffffffffff3f1111ff1111ff11133fffffffffffffffffffffff77bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77ffffffffffffffffff3f111ff1111ff1111f3fffffffffffffffffffffff
            ffffffffffffffff3f1111ff1111ff111f3fffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffffffffff3f111ff1111ff111133fffffffffffffffffffffff
            ffffffffffffffff3f111111111111111f3fffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777fffffffffffffffff33f11111111111111133fffffffffffffffffffffff
            ffffffffffffffff3f111111cccc11111f33ffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffffffff33ff11111cccc11111133fffffffffffffffffffffff
            ffffffffffffffff3311111b111111111ff33fffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777fffffffffffffff33fff111111111b1111133fffffffffffffffffffffff
            ffffffffffffffff33ff111111111111fffc33ffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777fffffffffffffff3f6fff1111111111111133fffffffffffffffffffffff
            ffffffffffffffff3fff111111111111fffcf3ffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffffff33f6fff1111111111111f33fffffffffffffffffffffff
            ffffffffffffffff3fccf1111111111fcffccf33ffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777fffffffffffff33f66ff6f1111111111f66f3fffffffffffffffffffffff
            ffffffffffffffff3cccfffffffffffccffcccc3ffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffff336666ff66fffffffffff6663fffffffffffffffffffffff
            fffffffffffffff3fcccfffffffffffccffcccc3ffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffff3f6666ff66fffffffffff6663fffffffffffffffffffffff
            fffffffffffffff3fcccfcfffcccfccccffcccc33fffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffff3f6666ff6666f666fff6f6663fffffffffffffffffffffff
            fffffffffffffff3fcccfcccfccc1ccccffcccc33fffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffff3f6666ff66661666f666f66633ffffffffffffffffffffff
            fffffffffffffff3fcccfcccfccc1ccccffcccc33fffffffffffffffff7777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777ffffffffffff3f6666ff66661666f666f66633ffffffffffffffffffffff
            ffffffffffffff33fcccfcccfcccccccfffcccc33fffffffffffffffff7777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777ffffffffffff3f6666fff6666666f666f666333fffffffffffffffffffff
            fffffffffffff33ffcccfcccfcccccccfffcccc33fffffffffffffffff7777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777fffffffffffff36666fff6666666f666f666f33fffffffffffffffffffff
            fffffffffffff3fffcffcccc1cccfffffcccccc3ffffffffffffffffff7777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777fffffffffffff3666666fffff66616666ff6ff33ffffffffffffffffffff
            fffffffffffff3fcccffccccccfffccfccccc333ffffffffffffffffff7777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777fffffffffffff3ff66666f66fff666666ff666f3ffffffffffffffffffff
            fffffffffffff3fcccffccccccfffccfccccc33fffffffffffffffffff7777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777fffffffffffff33f66666f66fff666666ff666f33fffffffffffffffffff
            ffffffffffff3fccccffcccccfcccccfccccc3ffffffffffffffffffff7777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777ffffffffffffff3366666f66666f66666ff6666f3fffffffffffffffffff
            ffffffffffff3fcccfcccccccccccccfcccc33ffffffffffffffffffff7777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777fffffffffffffff3f6666f6666666666666f666f3fffffffffffffffffff
            ffffffffffff3fcccfcccccccccccccfcccc3fffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777fffffffffffffff336666f6666666666666f666f3fffffffffffffffffff
            ffffffffffff33ffffcccccccccccccffcc33fffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffffffff3f66ff6666666666666ff333ffffffffffffffffffff
            fffffffffffff333fcccccccfffffff4fff33fffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffffffff33fff8fffffff6666666f3ffffffffffffffffffffff
            fffffffffffffff3fcccccccfffffff4ff33ffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777fffffffffffffffff33ff8fffffff6666666f3ffffffffffffffffffffff
            ffffffffffffffff3fcccffff4444ff44f33ffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffffffffff3f88ff8888ffff666f33ffffffffffffffffffffff
            ffffffffffffffff3fcccffff4444ff4433fffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffffffffff3f88ff8888ffff666f3fffffffffffffffffffffff
            ffffffffffffffff3fffff4444444444433fffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffffffffff3388888888888ffff33fffffffffffffffffffffff
            ffffffffffffffff3f44444444444444433fffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777fffffffffffffffffff38888888888888883ffffffffffffffffffffffff
            ffffffffffffffff3f4444444ff44444433fffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777fffffffffffffffffff3888888ff88888883ffffffffffffffffffffffff
            ffffffffffffffff3f444444fff44444433ffffffffffffffffffffff7777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777ffffffffffffffffff3888888fff88888833fffffffffffffffffffffff
            ffffffffffffffff3f444444fff44444433ffffffffffffffffffffff7777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777ffffffffffffffffff3888888fff88888833fffffffffffffffffffffff
            ffffffffffffffff3f444444fff44444433ffffffffffffffffffffff7777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777ffffffffffffffffff3888888fff888888f3fffffffffffffffffffffff
            fffffffffffffffffff44444fff44444333ffffffffffffffffffffff7777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777ffffffffffffffffffff88888fff88888ff3fffffffffffffffffffffff
            cccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccbcccccccccc
            cccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccbcccccccccccccccccbcccccccccc
            cccccccccccccccccccccccbbcbbccccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccbcccccccccccccccccbccccccccccc
            ccccccbcccccccccccccccbbcbcccccccccccccccbccccccccccccccccccbbccccccccccccccccbccccccccbcccccccccccbcccccccccccccccccccccccccccccbccccccccccccccccccbccccccccccc
            cccccbccccccccccccccbbccbccccccbccccccccbccccccccccccccccccbbccccccccccccccccbccccccccbcccccccccccbbcccccccccccccccccccccccccccccbccccccccccccccccccbccccccccccc
            ccccbccccccccccccccbcccbccccccbccccccccbccccbccccccccccccbbccccccccbccccccccbccccccccbcccccccccccbbccccccccccccccccccccccccccccccbcccccccccccccccccbcccccccccbcc
            cccbcccccbccccccccbbccbcccccbbccccccccbccccbccccccccccccbbccccccccbcccccccccbccccccccbcccccccccccbcccccccccccccccccccccccccccccbbccccccccccccccccccbcccccccccbcc
            ccccccccbcccccccbbbbbbcccccbccccccccccbccccbcccccccccccbbccccccccbcccccccccbcccccccccbcccccccccbbbccccccccccccccccbccccccccccccbccccccccccccccccccbccccccccccbcc
            ccccccccbccccccbbccbbcccccbccccccccccbccccbccccccccccbbbccccccccbcccccccccbcccccccccbcccccccccbbbcccccccccccccccbbccccccccccccbbcccccccccccccccccbcccccccccbbccc
            ccccccbbccccccbcccbccccccbccccccccccbccccbccccccccccbccbcccccccbcccccccccbcccccccccbcccccccccbbbccccccccccccccccbcccccccccccccbcccccccccccccccccbccccccccccbcccc
            cccccbccccccbbcccbbcccccbccccccccccbccccbcccccccccccbbbcccccccbcccccccccbcccccccccbcccccccccbbbcccccccccccccccccbccccccccccccbcccccccccccccccccbcccccccccccbcccc
            ccccbccccccbbccbbccccccbccccccccccbccccbcccccccccccbbbcccccccbcccccccccbcccccccccbcccccccccbbcbccccccccccccccccbcccccccccccccbcccccccccccccccccbccccccccccbccccc
            ccccbcccccbbccbcccccccbcccccccccccbcccbcccccccccccbbbbccccccbccccccccccbccccccccbcccccccccbbcbcccccccccccccccbbcccccccccccccbcccccccccccccccccbccccccccccbcccccc
            cccbccccbbbcbbbccccccbcccccccccccbccccbccccccccccbbbbccccccbccccccccccbcccccccccbcccccccccbcbcccccccccccccccbcccccccccccccccbcccccccccccccccccbccccccccccbcccccc
            cccccccbbbbbcbccccccbcccccccccccbcccbbccccccccccbbbbccccccbccccccccccbcccccccccbcccccccccbcbccccccccccccccccbccccccccccccccbccccccccccccccccccbcccccccccbccccccc
            ccccccbbbccbbccccccbcccccccccccbcccbcccccccccccbbbbcccccccbccccccccccbccccccccbcccccccccbbcbcccccccccccccccbccccccccccccccbccccccccccccccccccbcccccccccbcccccccc
            ccccccbbccbccccccccbccccccccccccccbccccccccccccbbbcccccccbccccccccccbccccccccbccccccccccbcbcccccccccccccccbccccccccccccccbcccccccccccccccccccbcccccccccbcccccccc
            cccccbcccbccccccccbcccccccccccccccbcccccccccccbbbbccccccbccccccccccbccccccccbccccccccccbcbcccccccccccccccbccccccccccccccbcccccccccccccccccccbbcccccccccbcccccccc
            cccccbbbbccccccccccccccccccccccccbcccccccccbbbbbccccccccccccccccccbccccccccbccccccccccbbccccccccccccccccccccccccccccccccccccccccccccccccccccbbcccccccccccccccccc
            `)
        sprites.destroy(body_clue_1)
        sprites.destroy(fans_clue_1)
        sprites.destroy(stage_clue_1)
        sprites.destroy(selector_baby)
        lock1 = sprites.create(assets.image`lock1`, SpriteKind.lock)
        lock1.setPosition(80, 80)
        body_guard_1 = sprites.create(assets.image`body guard 1`, SpriteKind.bodyguard1)
        body_guard_1.setPosition(34, 79)
        body_guard_2 = sprites.create(img`
            .............................................
            ...........ffffffffff........................
            .........fff1111111fff.......................
            ........fff1111111111ff......................
            ......fff1111111111111ff.....................
            ......ff111111111111111ff....................
            ......ff111111111111111ff....................
            ......ff1111fff111fff11ff....................
            ......ff111ffff11ffff11ff....................
            ......ff111ff1111ff1111ff....................
            ......ff111ff1111ff1111ff....................
            ......ff111111111111111ff....................
            .....fff11111cccc111111ff....................
            .....fff111111111b11111f.....................
            ....f6fff11111111111111f.....................
            ....f6fff1111111111111ff.....................
            .fff66ff6f1111111111f66ff....................
            .f6666ff66fffffffffff666f....................
            .f6666ff66fffffffffff666f....................
            .f6666ff6666f666fff6f666f....................
            .f6666ff66661666f666f666f....................
            .f6666ff66661666f666f666f....................
            .f6666fff6666666f666f666ff...................
            .f6666fff6666666f666f666ff...................
            .f666666fffff66616666ff6ff...................
            .fff66666f66fff666666ff666f..................
            ..ff66666f66fff666666ff666ff.................
            ...f66666f66666f66666ff6666f.................
            ....f6666f6666666666666f666f.................
            ....f6666f6666666666666f666f.................
            .....f66ff6666666666666fffff.................
            ......fff8fffffff6666666fff..................
            ......fff8fffffff6666666ff...................
            ......ff88ff8888ffff666ff....................
            .......f88ff8888ffff666ff....................
            .......f88888888888fffff.....................
            .......f888888888888888f.....................
            .......f888888ff8888888f.....................
            .......f888888fff888888f.....................
            .......f888888fff888888f.....................
            .......f888888fff888888f.....................
            .......ff88888fff88888ff.....................
            .............................................
            .............................................
            .............................................
            `, SpriteKind.bodyguard2)
        body_guard_2.setPosition(135, 82)
        selector_baby = sprites.create(assets.image`click click`, SpriteKind.selector)
        selector_baby.setPosition(130, 90)
        controller.moveSprite(selector_baby)
    }
})
let body_guard_2: Sprite = null
let body_guard_1: Sprite = null
let lock1: Sprite = null
let selector_baby: Sprite = null
let body_clue_1: Sprite = null
let fans_clue_1: Sprite = null
let stage_clue_1: Sprite = null
game.splash("Murder Mystery IG", "By: Jade")
pause(100)
game.showLongText("Are you ready for the best night of your lives?", DialogLayout.Bottom)
pause(100)
game.showLongText("Fans: YEAAHH!!", DialogLayout.Top)
let le_fans = sprites.create(assets.image`le fans 1`, SpriteKind.Fans)
le_fans.setPosition(126, 80)
let le_fans_2 = sprites.create(assets.image`le fans 2`, SpriteKind.Fans)
le_fans_2.setPosition(63, 80)
let le_fans_3 = sprites.create(assets.image`le fan 3`, SpriteKind.Fans)
le_fans_3.setPosition(0, 80)
pause(500)
game.showLongText("Presenting: CHAD!!", DialogLayout.Bottom)
game.showLongText("Fans: WHHOOO!!", DialogLayout.Top)
pause(200)
sprites.destroy(le_fans)
sprites.destroy(le_fans_2)
sprites.destroy(le_fans_3)
scene.setBackgroundImage(assets.image`Stage1`)
let chad = sprites.create(assets.image`chad`, SpriteKind.chad)
chad.setPosition(80, 90)
pause(2000)
game.setDialogCursor(assets.image`chad`)
game.setDialogTextColor(8)
game.showLongText("Chad: What's up, everyone!", DialogLayout.Bottom)
game.showLongText("Chad: Welcome to my show!", DialogLayout.Bottom)
game.showLongText("Chad: Thank you all for coming out to support me!", DialogLayout.Bottom)
game.showLongText("Chad: Let's get started!", DialogLayout.Bottom)
pause(200)
sprites.destroy(chad)
scene.setBackgroundImage(assets.image`black background`)
scene.cameraShake(4, 100)
pause(200)
scene.setBackgroundImage(assets.image`dark red background`)
scene.cameraShake(4, 100)
pause(100)
scene.setBackgroundImage(assets.image`black background`)
scene.cameraShake(4, 100)
pause(500)
scene.setBackgroundImage(assets.image`Ded Chad Stage`)
let ded_chad = sprites.create(assets.image`ded chad`, SpriteKind.chad)
ded_chad.setPosition(75, 90)
pause(500)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
game.showLongText("...", DialogLayout.Bottom)
pause(500)
game.setDialogCursor(assets.image`scared fan 1`)
game.setDialogTextColor(4)
game.showLongText("Fan: Is...is he dead?", DialogLayout.Bottom)
game.setDialogCursor(assets.image`Scared fan 2`)
game.setDialogTextColor(14)
game.showLongText("Fan: I think he is!", DialogLayout.Bottom)
game.setDialogTextColor(15)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
game.splash("Chad has died. It is up to", "you to find out who did it")
sprites.destroy(ded_chad)
scene.setBackgroundImage(assets.image`internal thoughts moment`)
pause(500)
story.showPlayerChoices("Look for clues", "")
if (story.checkLastAnswer("Look for clues")) {
    scene.setBackgroundImage(assets.image`clue time baby`)
    stage_clue_1 = sprites.create(assets.image`stage clue 1`, SpriteKind.stageclue1)
    stage_clue_1.setPosition(26, 45)
    fans_clue_1 = sprites.create(assets.image`fans clue 1`, SpriteKind.fansclue1)
    fans_clue_1.setPosition(78, 36)
    body_clue_1 = sprites.create(assets.image`body clue 1`, SpriteKind.bodyclue1)
    body_clue_1.setPosition(131, 46)
    selector_baby = sprites.create(assets.image`click click`, SpriteKind.selector)
    selector_baby.setPosition(130, 90)
    controller.moveSprite(selector_baby)
}
