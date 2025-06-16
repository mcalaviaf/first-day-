let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . 
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . e f e 4 d d d d d f f . . 
    . e 4 d d e b b b f f e f . 
    . . e d d e 3 3 b e f 4 e . 
    . . . e e f 6 6 6 6 f . . . 
    . . . . f f f f f f f . . . 
    . . . . . . . . f f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
