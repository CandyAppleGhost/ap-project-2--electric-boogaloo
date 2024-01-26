namespace SpriteKind {
    export const Fans = SpriteKind.create()
}
game.splash("Murder Mystery IG", "By: jade")
pause(100)
game.showLongText("Are you ready for the best night of your lives?", DialogLayout.Bottom)
pause(100)
game.showLongText("YEAAHH!!", DialogLayout.Top)
let le_fans = sprites.create(assets.image`le fans 1`, SpriteKind.Fans)
le_fans.setPosition(126, 80)
let le_fans_2 = sprites.create(assets.image`le fans 2`, SpriteKind.Fans)
le_fans_2.setPosition(63, 80)
let le_fans_3 = sprites.create(assets.image`le fan 3`, SpriteKind.Fans)
le_fans_3.setPosition(0, 80)
pause(500)
game.showLongText("Presenting: CHAD!!", DialogLayout.Bottom)
game.showLongText("WHHOOO!!", DialogLayout.Top)
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
game.showLongText("Wassup fishes", DialogLayout.Bottom)
game.showLongText("Welcome to my show!", DialogLayout.Bottom)
pause(100)
sprites.destroy(chad)
scene.setBackgroundImage(assets.image`black background`)
scene.cameraShake(4, 100)
pause(500)
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
game.setDialogCursor(img`
    ............ffffff................
    ..........ffffffffff..............
    .........ff1111111fff.............
    .......ff11111111111ff............
    ......ff1111111111111ff...........
    ......f111111111111111ff..........
    .....ff111111111111111ff..........
    .....f111cc111111111111f..........
    .....f111cc1111cc111111ff.........
    .....f111cc1111cc111111ff.........
    .....f111bb1111cc111111ff.........
    .....f111111111bb111111ff.........
    .....f11111111111111111ff.........
    .....f11111111111111111ff.........
    .....f11111b1111b111111ff.........
    .....f111111cccc1111111ff.........
    .....ff111111111111111ff..........
    ......f111111111111111fffff.......
    ......ff1111111111111ff22fff......
    .......ff11111111111ff22522ff.....
    .......ffff1111111fff2255222ff....
    ......ff44fffffffff4444544222ff...
    ......f4444444444444444544442ff...
    ....ff444444444fff4444ff444444ff..
    ....f4444444444f1ff44ff1f44444ff..
    ...ff4444ff444f111ff4f11f444444ff.
    ...f4444f1ff44f1111fff11f444444ff.
    ..ff4444f11f4f111111ff11f4444445ff
    ..ff4444f11fff1111111111f4444455ff
    ..f44444f11fff1111111111f44445544f
    ..f44444f1111ff111111111fff455444f
    ..ff5544f11111ff1111111111ffff4444
    ..f4455ff111111ff111111111111ffff4
    ..f444ff11111111fff1111111111111ff
    ..f44ff111111111fffff1111111111111
    .ff4ff11111111fff444fff11111111111
    .ffff111111ffff4444444fff111111111
    .fff1111111f444444444444fff1111111
    .ff1111111ff44444444444444fff11111
    .f11111111f44444444444444444fff111
    .f1111111ff44444444444444444ffffff
    ff111111ff4444444444444444444f....
    ff11111ff44444444444444444444f....
    `)
game.showLongText("Is...is he head?", DialogLayout.Bottom)
