namespace SpriteKind {
    export const Fans = SpriteKind.create()
}
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
let chad = sprites.create(assets.image`chad`, SpriteKind.Player)
chad.setPosition(80, 90)
pause(2000)
game.setDialogCursor(assets.image`chad`)
game.setDialogTextColor(8)
game.showLongText("Chad: What's up, everyone!", DialogLayout.Bottom)
game.showLongText("Chad: Welcome to my show!", DialogLayout.Bottom)
game.showLongText("Chad: Thank you all for coming out to support me!", DialogLayout.Bottom)
pause(100)
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
let ded_chad = sprites.create(assets.image`ded chad`, SpriteKind.Player)
ded_chad.setPosition(75, 90)
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
game.splash("Chad has died. It is up to you to find out who did it.")
