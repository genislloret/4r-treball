let nivell = game.createSprite(2, 2)
basic.forever(function () {
    nivell.set(LedSpriteProperty.X, 2 + Math.round(input.acceleration(Dimension.X) / 250))
    nivell.set(LedSpriteProperty.Y, 2 + Math.round(input.acceleration(Dimension.Y) / 250))
})
