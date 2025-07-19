controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 100, 100)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(img`
        . . . . . . . . 7 . 7 . . . . . 
        . . . . . . 7 . . 7 . . 7 . . . 
        . . . . . . . 7 . 7 . 7 . . . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        . . . . . . 4 4 f 4 f 4 4 . . . 
        . . . . . 4 e f 4 e 4 f e 4 . . 
        . . . . . 4 4 f f f f f 4 4 . . 
        . . . . . 8 8 d d d d d d d d . 
        . . . 2 8 8 d d d d d d d d d d 
        . . 2 4 8 8 8 d d d d d d d d d 
        . . . 2 8 8 d d d d d d d d d . 
        . . . . . 4 e 4 4 e 4 4 e 4 . . 
        . . . . . . 4 e 4 4 4 e 4 . . . 
        . . . . . . . 4 e 4 e 4 . . . . 
        . . . . . . . . 4 e 4 . . . . . 
        . . . . . . . . . 4 . . . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 100, 100)
})
info.onCountdownEnd(function () {
    game.gameOver(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 100, 100)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 . . . . . 7 . . . 
        . . . . . 2 4 2 . . . . 7 . . . 
        . . . . . 8 8 8 . . . . 7 . . . 
        . . . . 4 8 8 8 8 4 4 . 7 . . . 
        . . . 4 e d 8 d 8 4 e 4 7 . 7 . 
        . . 4 e 4 d d d d f f 4 7 7 . . 
        . 4 e 4 4 d d d d f 4 f 7 . . 7 
        4 e 4 4 e d d d d f e 4 7 7 7 . 
        . 4 e 4 4 d d d d f 4 f 7 . . 7 
        . . 4 e 4 d d d d f f 4 7 7 . . 
        . . . 4 e d d d d 4 e 4 7 . 7 . 
        . . . . 4 d d d d 4 4 . 7 . . . 
        . . . . . d d d d . . . 7 . . . 
        . . . . . . d d . . . . 7 . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    game.gameOver(true)
    mySprite4.setImage(img`
        e 4 e 4 e e 4 e e 4 e 4 e e 4 e 
        f f f f f f f f f f f f f f f f 
        e e e e e 4 e e e e 4 e e e e e 
        e 4 e e e e e e 4 e e e e 4 e e 
        f f f f f f f f f f f f f f f f 
        e 4 e e e e 4 e e e e 4 e e 4 e 
        f f f f f f f f f f f f f f f f 
        e e e e e e e e e e e e e 4 e e 
        e e 4 e e 4 e e e e 4 e e e e e 
        e e e e e e e e e e e e e e e e 
        f f f f f f f f f f f f f f f f 
        e e 4 e e 4 e e 4 e e 4 e e 4 e 
        f f f f f f f f f f f f f f f f 
        e e 4 e e e e 4 e e e e 4 e e e 
        f f f f f f f f f f f f f f f f 
        e e e e e e e e e e e e e e e e 
        `)
    game.setGameOverMessage(true, "You got to the green house good job")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(mySprite, effects.spray, 500)
    game.gameOver(false)
})
let mySprite4: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
mySprite = sprites.create(img`
    . . . . . . . . 7 . 7 . . . . . 
    . . . . . . 7 . . 7 . . 7 . . . 
    . . . . . . . 7 . 7 . 7 . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    . . . . . . 4 4 f 4 f 4 4 . . . 
    . . . . . 4 e f 4 e 4 f e 4 . . 
    . . . . . 4 4 f f f f f 4 4 . . 
    . . . . . 8 8 d d d d d d d d . 
    . . . 2 8 8 d d d d d d d d d d 
    . . 2 4 8 8 8 d d d d d d d d d 
    . . . 2 8 8 d d d d d d d d d . 
    . . . . . 4 e 4 4 e 4 4 e 4 . . 
    . . . . . . 4 e 4 4 4 e 4 . . . 
    . . . . . . . 4 e 4 e 4 . . . . 
    . . . . . . . . 4 e 4 . . . . . 
    . . . . . . . . . 4 . . . . . . 
    `, SpriteKind.Player)
let mySprite3 = sprites.create(img`
    ...........dddddddddd...
    ..........ddd1dd1dd1dd..
    ..........d11d11d11d1d..
    ..........ddd1dd1dd1dd..
    ...........1111111111...
    ..........dddddddddddd..
    ..........dddddddddddd..
    ...........dddddddddd...
    ..........fee44fbe44efef
    ...........feddfb4d4eef.
    ..........c.eeddd4eeef..
    ....ccccccceddee2222f...
    .....dddddcedd44e444f...
    ......ccccc.eeeefffff...
    ..........c...ffffffff..
    ...............ff..fff..
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
let mySprite2 = sprites.create(img`
    ...........dddddddddd...
    ..........ddd1dd1dd1dd..
    ..........d11d11d11d1d..
    ..........ddd1dd1dd1dd..
    ...........1111111111...
    ..........dddddddddddd..
    ..........dddddddddddd..
    ...........dddddddddd...
    ..........fee44fbe44efef
    ...........feddfb4d4eef.
    ..........c.eeddd4eeef..
    ....ccccccceddee2222f...
    .....dddddcedd44e444f...
    ......ccccc.eeeefffff...
    ..........c...ffffffff..
    ...............ff..fff..
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
mySprite4 = sprites.create(img`
    ....................8a8aa8a8....................
    .................aaa888aa8a8aaa.................
    ..............aaa8aa8a8aa888aa8aaa..............
    ...........8aa8aa8888a8aa8a8888aa8aa8...........
    ........8888aa8aa8aa8a8aa8a8aa8aa8aa8888........
    .....aaa8aa8aa8888aa8a8aa8a8aa8888aa8aa8aaa.....
    ...aa8888aa8aa8aa8aa888aa888aa8aa8aa8aa8888aa...
    dccaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aaccd
    bcb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bcb
    dbbaa8aa8888aa8aa8888a8aa8a8888aa8aa8888aa8aabbd
    dbbaa8aa8aa8aa8888aa8a8aa8a8aa8888aa8aa8aa8aabbd
    dccaa8888aa8aa8aa8aa888aa888aa8aa8aa8aa8888aaccd
    bcbaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aabcb
    dbb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bbd
    dbbaa8aa8888aa8aa8aa8a8aa8a8aa8aa8aa8888aa8aabbd
    dccaa8aa8aa8aa8aa8888a8aa8a8888aa8aa8aa8aa8aaccd
    bcbaa8888aa8aa8888aa888aa888aa8888aa8aa8888aabcb
    dbbaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aabbd
    dbb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bbd
    dccaa8aa8888aa8aa8aa8a8aa8a8aa8aa8aa8888aa8aaccd
    bcbaa8aa8aa8aa8aa8aa888aa888aa8aa8aa8aa8aa8aabcb
    dbbaa8888aa8aa8aa888ccbbbbcc888aa8aa8aa8888aabbd
    dbbaa8aa8aa8aa888ccbbbbbbbbbbcc888aa8aa8aa8aabbd
    dcc888aa8aa888ccbbbbbccccccbbbbbcc888aa8aa888ccd
    bcbaa8aa888ccbbbbbccb......bccbbbbbcc888aa8aabcb
    dbbaa8aaccbbbbbccb............bccbbbbbccaa8aabbd
    dbbaaccbbbbcccb..................bcccbbbbccaabbd
    dcccbbbbcccbdddbcc...............ddd.cccbbbbcccd
    ccccccccbbbbbbb.b.......................cccccccc
    bddddddddddddb..................................
    bbcbddddddddd.b.............................bc..
    bbb...........d.bbbbbbbbbbbbbbbb.d..............
    bbbb............beeeeeeeeeeeeeeb................
    bbb8aaaaaaa8....e3b33b33b33b33be.....aaaaaaa....
    bbb888888888....e3b33b33b33b33be................
    bbb8.......8....f3b3.ffffffe33be................
    bbb8.ff.ff.8....f3bffffffffff3be......ff.ff.....
    bbb8.cc.cc.8....f3effffffffffebe......cc.cc.....
    bbb8.......8....f3eeeeeeeeeeeebe................
    cbb8.ff.ff.8....e3b33b33b33b33be......ff.ff....c
    cbb8.cc.cc.8....e3b33b33b33b33be......cc.......c
    ccbbbbbbbbbb....e3b33b33b33feeee..............cc
    .cbb............e3b33b33b33ffffe..............c.
    ..cb.bbb........f3b33b33b33f33fe........bbb..c..
    ...c.bbb........f3b33b33b33bffee........bbb.c...
    ....b...........f3b33b33b33b33be...........b....
    .....b.bbb......f3b33b33b33b33be......bbb.b.....
    ......bcccbbb...e3b33b33b33b33be...bbbcccb......
    `, SpriteKind.Food)
tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 16))
tiles.placeOnRandomTile(mySprite2, sprites.builtin.forestTiles23)
tiles.placeOnRandomTile(mySprite3, sprites.builtin.forestTiles23)
scene.cameraFollowSprite(mySprite)
mySprite2.follow(mySprite, 100)
mySprite3.follow(mySprite, 100)
tiles.placeOnTile(mySprite4, tiles.getTileLocation(16, 8))
info.startCountdown(120)
