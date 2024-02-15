namespace SpriteKind {
    export const Fans = SpriteKind.create()
    export const chad = SpriteKind.create()
    export const youIG = SpriteKind.create()
    export const stageclue1 = SpriteKind.create()
    export const fansclue1 = SpriteKind.create()
    export const bodyclue1 = SpriteKind.create()
    export const selector = SpriteKind.create()
    export const lock = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.lock, function (sprite, otherSprite) {
    if (true) {
    	
    } else {
    	
    }
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
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffff444444444fffffffffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffff4444444444f444ffffffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffff4444444444f444ffffffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffff4444444444414444fffffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffffffffffffffff1111111fffffffffffffffffffffffffffff
            fffffffffff4444444444444444444444fffffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777fffffffffffffffffffffff1111111111fffffffffffffffffffffffffff
            fffffffffff4444444444444444444444fffffffffffffffffffffffff77bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77fffffffffffffffffffff1111111111111ffffffffffffffffffffffffff
            ffffffffffffffffff111444441111111fffffffffffffffffffffffff77bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77ffffffffffffffffffff111111111111111fffffffffffffffffffffffff
            ffffffffffffffffff111111111111111fffffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffffffffffff111111111111111fffffffffffffffffffffffff
            ffffffffffffffffff11fff111fff1111fffffffffffffffffffffffff77bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77ffffffffffffffffffff1111fff111fff11fffffffffffffffffffffffff
            ffffffffffffffffff11ffff11ffff111fffffffffffffffffffffffff77bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77ffffffffffffffffffff111ffff11ffff11fffffffffffffffffffffffff
            ffffffffffffffffff1111ff1111ff111fffffffffffffffffffffffff77bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77ffffffffffffffffffff111ff1111ff1111fffffffffffffffffffffffff
            ffffffffffffffffff1111ff1111ff111fffffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffffffffffff111ff1111ff1111fffffffffffffffffffffffff
            ffffffffffffffffff111111111111111fffffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffffffffffff111111111111111fffffffffffffffffffffffff
            ffffffffffffffffff111111cccc11111fffffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffffffffffff11111cccc111111fffffffffffffffffffffffff
            ffffffffffffffffff11111b111111111fffffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffffffffffff111111111b11111fffffffffffffffffffffffff
            ffffffffffffffffffff111111111111fffcffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777fffffffffffffffff6fff11111111111111fffffffffffffffffffffffff
            ffffffffffffffffffff111111111111fffcffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777fffffffffffffffff6fff1111111111111ffffffffffffffffffffffffff
            ffffffffffffffffffccf1111111111fcffccfffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffffffff66ff6f1111111111f66fffffffffffffffffffffffff
            fffffffffffffffffcccfffffffffffccffccccfffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffffff6666ff66fffffffffff666ffffffffffffffffffffffff
            fffffffffffffffffcccfffffffffffccffccccfffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffffff6666ff66fffffffffff666ffffffffffffffffffffffff
            fffffffffffffffffcccfcfffcccfccccffccccfffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffffff6666ff6666f666fff6f666ffffffffffffffffffffffff
            fffffffffffffffffcccfcccfccc1ccccffccccfffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffffff6666ff66661666f666f666ffffffffffffffffffffffff
            fffffffffffffffffcccfcccfccc1ccccffccccfffffffffffffffffff7777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777ffffffffffffff6666ff66661666f666f666ffffffffffffffffffffffff
            fffffffffffffffffcccfcccfcccccccfffccccfffffffffffffffffff7777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777ffffffffffffff6666fff6666666f666f666ffffffffffffffffffffffff
            fffffffffffffffffcccfcccfcccccccfffccccfffffffffffffffffff7777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777ffffffffffffff6666fff6666666f666f666ffffffffffffffffffffffff
            fffffffffffffffffcffcccc1cccfffffccccccfffffffffffffffffff7777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777ffffffffffffff666666fffff66616666ff6ffffffffffffffffffffffff
            fffffffffffffffcccffccccccfffccfcccccfffffffffffffffffffff7777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777ffffffffffffffff66666f66fff666666ff666ffffffffffffffffffffff
            fffffffffffffffcccffccccccfffccfcccccfffffffffffffffffffff7777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777ffffffffffffffff66666f66fff666666ff666ffffffffffffffffffffff
            ffffffffffffffccccffcccccfcccccfcccccfffffffffffffffffffff7777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777ffffffffffffffff66666f66666f66666ff6666fffffffffffffffffffff
            ffffffffffffffcccfcccccccccccccfccccffffffffffffffffffffff7777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777fffffffffffffffff6666f6666666666666f666fffffffffffffffffffff
            ffffffffffffffcccfcccccccccccccfccccffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777fffffffffffffffff6666f6666666666666f666fffffffffffffffffffff
            ffffffffffffffffffcccccccccccccffccfffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffffffffff66ff6666666666666fffffffffffffffffffffffff
            fffffffffffffffffcccccccfffffff4ffffffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777fffffffffffffffffffff8fffffff6666666ffffffffffffffffffffffff
            fffffffffffffffffcccccccfffffff4ffffffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777fffffffffffffffffffff8fffffff6666666ffffffffffffffffffffffff
            ffffffffffffffffffcccffff4444ff44fffffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffffffffffff88ff8888ffff666fffffffffffffffffffffffff
            ffffffffffffffffffcccffff4444ff44fffffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffffffffffff88ff8888ffff666fffffffffffffffffffffffff
            ffffffffffffffffffffff44444444444fffffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffffffffffff88888888888fffffffffffffffffffffffffffff
            ffffffffffffffffff444444444444444fffffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffffffffffff888888888888888fffffffffffffffffffffffff
            ffffffffffffffffff4444444ff444444fffffffffffffffffffffffff777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777ffffffffffffffffffff888888ff8888888fffffffffffffffffffffffff
            ffffffffffffffffff444444fff444444ffffffffffffffffffffffff7777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777fffffffffffffffffff888888fff888888fffffffffffffffffffffffff
            ffffffffffffffffff444444fff444444ffffffffffffffffffffffff7777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777fffffffffffffffffff888888fff888888fffffffffffffffffffffffff
            ffffffffffffffffff444444fff444444ffffffffffffffffffffffff7777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777fffffffffffffffffff888888fff888888fffffffffffffffffffffffff
            fffffffffffffffffff44444fff44444fffffffffffffffffffffffff7777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777ffffffffffffffffffff88888fff88888ffffffffffffffffffffffffff
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
        lock1 = sprites.create(assets.image`lock1`, SpriteKind.lock)
        lock1.setPosition(80, 80)
        selector_baby = sprites.create(assets.image`click click`, SpriteKind.selector)
        selector_baby.setPosition(130, 90)
    }
})
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
