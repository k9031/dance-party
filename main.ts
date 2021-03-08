function setUpStopper () {
    stopper = sprites.create(img`
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        `, SpriteKind.Enemy)
    stopper.setPosition(80, 116)
    animation.runImageAnimation(
    stopper,
    [img`
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        `,img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        `],
    200,
    true
    )
}
function makeArrow () {
    arrowNumber = randint(0, 3)
    arrowImg = arrowImgs[arrowNumber]
    arrow = sprites.create(arrowImg, SpriteKind.Food)
    arrow.y = 0
    arrow.vy = 50
    arrow.x = arrowXs[arrowNumber]
}

controller.up.onEvent(ControllerButtonEvent.Pressed, function() {
    Dancer.x = arrowXs [1]
})


/**
 * controller.moveSprite(Dancer)
 */
let arrow: Sprite = null
let arrowImg: Image = null
let arrowNumber = 0
let stopper: Sprite = null
let arrowImgs: Image[] = []
scene.setBackgroundImage(img`
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    `)
effects.smiles.startScreenEffect()
arrowImgs = [img`
    . . . . . . . . 8 . . . . . . . 
    . . . . . . . 8 2 8 . . . . . . 
    . . . . . 8 8 2 4 2 8 8 . . . . 
    . . . . 8 2 2 4 4 4 2 2 8 . . . 
    . . . 8 2 4 4 4 4 4 4 4 2 8 . . 
    . . . 8 2 4 4 4 4 4 4 4 2 8 . . 
    . . . 8 2 4 1 1 4 4 4 4 2 8 . . 
    . . . 8 2 1 1 1 1 1 1 4 2 8 . . 
    . . . 8 2 4 1 1 4 4 4 4 2 8 . . 
    . . . 8 2 4 4 4 4 4 4 4 2 8 . . 
    . . . 8 2 4 4 4 4 4 4 4 2 8 . . 
    . . . . 8 2 2 2 2 2 2 2 8 . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . . . 8 . . . . . . . 
    . . . . . . . 8 2 8 . . . . . . 
    . . . . . 8 8 2 4 2 8 8 . . . . 
    . . . . 8 2 2 4 4 4 2 2 8 . . . 
    . . . 8 2 4 4 4 1 4 4 4 2 8 . . 
    . . . 8 2 4 4 1 1 1 4 4 2 8 . . 
    . . . 8 2 4 4 1 1 1 4 4 2 8 . . 
    . . . 8 2 4 4 4 1 4 4 4 2 8 . . 
    . . . 8 2 4 4 4 1 4 4 4 2 8 . . 
    . . . 8 2 4 4 4 1 4 4 4 2 8 . . 
    . . . 8 2 4 4 4 1 4 4 4 2 8 . . 
    . . . . 8 2 2 2 2 2 2 2 8 . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . . . 8 . . . . . . . 
    . . . . . . . 8 2 8 . . . . . . 
    . . . . . 8 8 2 4 2 8 8 . . . . 
    . . . . 8 2 2 4 4 4 2 2 8 . . . 
    . . . 8 2 4 4 4 4 4 4 4 2 8 . . 
    . . . 8 2 4 4 4 4 4 4 4 2 8 . . 
    . . . 8 2 4 4 4 4 1 1 4 2 8 . . 
    . . . 8 2 1 1 1 1 1 1 1 2 8 . . 
    . . . 8 2 4 4 4 4 1 1 4 2 8 . . 
    . . . 8 2 4 4 4 4 4 4 4 2 8 . . 
    . . . 8 2 4 4 4 4 4 4 4 2 8 . . 
    . . . . 8 2 2 2 2 2 2 2 8 . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . . . 8 . . . . . . . 
    . . . . . . . 8 2 8 . . . . . . 
    . . . . . 8 8 2 4 2 8 8 . . . . 
    . . . . 8 2 2 4 4 4 2 2 8 . . . 
    . . . 8 2 4 4 4 1 4 4 4 2 8 . . 
    . . . 8 2 4 4 4 1 4 4 4 2 8 . . 
    . . . 8 2 4 4 4 1 4 4 4 2 8 . . 
    . . . 8 2 4 4 1 1 1 4 4 2 8 . . 
    . . . 8 2 4 4 1 1 1 4 4 2 8 . . 
    . . . 8 2 4 4 4 1 4 4 4 2 8 . . 
    . . . 8 2 4 4 4 4 4 4 4 2 8 . . 
    . . . . 8 2 2 2 2 2 2 2 8 . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `]
let arrowXs = [35, 65, 95, 125]
setUpStopper()
let Dancer = sprites.create(img`
    .....f......f.......
    .....f......f.......
    ....f77777777f......
    ...f7777777777f.....
    ...f7777777777f.....
    ...f7777777777f.....
    ..f777777777777f....
    ..f777777777777f....
    ..f777777777777f....
    ..f777777777777f....
    ..ff7777777777ff....
    ..ffffffffffffff....
    ..fff........fff....
    ..fff........fff....
    ..fff........fff....
    ..fff........fff....
    `, SpriteKind.Player)
// Dancer.setFlag(SpriteFlag.ShowPhysics, true)
Dancer.y = 78
Dancer.x = arrowXs [0]
game.onUpdateInterval(1000, function () {
    makeArrow()
})
