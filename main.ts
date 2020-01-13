function hero () {
    Hero = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . b e b . . . 
. . . . . . . . . b e b . . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b a a a a a b . . . 
. b b b b b a a a a a a a b . . 
. b 6 8 b a a a a a a a a b . . 
. . b 8 8 b a 6 1 f a d 4 f . . 
. . b 6 8 8 b 1 f f a 4 4 c . . 
b b 6 b 8 8 7 6 f b 4 4 4 4 4 b 
b 6 6 c 6 7 7 b 7 4 4 4 4 4 b . 
c 6 6 6 c c b 7 7 7 7 7 7 7 b . 
c b 6 6 6 6 6 7 7 7 7 7 7 7 b . 
. c 6 6 6 6 6 6 7 7 7 7 7 6 b . 
. . c b 6 6 6 6 6 7 7 7 b b . . 
. . . c c c c c c c c b b . . . 
`, SpriteKind.Player)
    controller.moveSprite(Hero)
    Hero.setPosition(126, 89)
}
function cloud () {
    cloud1 = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . 
. . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . 
. . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . 
. . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . 
. . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . 
. . . 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 b b 1 1 1 1 1 b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
. . 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 b b 1 1 1 b 1 1 1 1 b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 b b 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 b 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
b b b 1 1 1 1 1 1 1 1 1 1 1 b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
. 1 b b 1 1 1 1 1 1 1 1 1 1 1 b 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
. 1 1 b 1 1 1 1 1 1 1 1 1 1 b b 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
. . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
. . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
. . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . 
. . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . 
. . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . 
. . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . 
`, 50, 100)
}
function score () {
    info.changeScoreBy(1)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    ball()
})
function ball () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . b b b b b b b b . . 
. . . . . . b b b b b b b b . . 
. . . . . b b b b b b b b c . . 
. . . . c b b b b b b b b c . . 
. . . c b b b b b b b b b c c . 
. . . c d b b b b b b c c c c . 
. . c c d b b b c c c c c c c . 
. . c c c d d b b b c d d d c c 
. c b b c c b b c c d d d d d c 
. c b b b b b b c c d d d d d c 
. c c b b b b c b c b d d d b c 
c b b c c c c c b b b b b c c c 
c c b b c c c c c d d d d d b c 
c c c c c c b b b b b c c c c c 
c c c c c c c b b b b b c c c c 
c c c c c c c c b b b b b c c c 
`, Hero, 0, -50)
}
function rain2 () {
    rain = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 8 . . . . . . . . 8 . . . 
. . . . . . . 8 . 8 . . . . . . 
. . . . . 8 . . . . . . . . . . 
. . . . . . 8 . 8 . . 8 . . . . 
. . 8 . 8 . . . . . . . . . . . 
. . . . . . 8 . . . 8 . . . . . 
. . . 8 . 8 . 8 . . . . . 8 . . 
. . . . . . 8 . . . . . . . . . 
. 8 . . . . . . . 8 . . . 8 . . 
. . . . . 8 . . . . . . . . . . 
. . . . . . . . 8 . . 8 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, cloud1, 50, 100)
    rain.x += 0
    rain.x += Math.randomRange(0, 10)
}
let rain: Sprite = null
let projectile: Sprite = null
let cloud1: Sprite = null
let Hero: Sprite = null
cloud()
hero()
ball()
rain2()
game.onUpdateInterval(1000, function () {
	
})
