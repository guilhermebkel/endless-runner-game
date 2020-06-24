const item = {
  scenery: null,
  character: null,
  littleFlyingGoutEnemy: null,
  littleGoutEnemy: null,
  trollEnemy: null
}

const sound = {
  game: null,
  jump: null
}

const picture = {
  scenery: null,
  character: null,
  littleFlyingGoutEnemy: null,
  littleGoutEnemy: null,
  trollEnemy: null
}

const pictureMatrixMap = {
  littleFlyingGout: [
    [0,0],
    [200, 0],
    [400, 0],
    [0, 150],
    [200, 150],
    [400, 150],
    [0, 300],
    [200, 300],
    [400, 300],
    [0, 450],
    [200, 450],
    [400, 450],
    [0, 600],
    [200, 600],
    [400, 600],
    [0, 750],
  ],
  littleGout: [
    [0, 0],
    [104, 0],
    [208, 0],
    [312, 0],
    [0, 104],
    [104, 104],
    [208, 104],
    [312, 104],
    [0, 208],
    [104, 208],
    [208, 208],
    [312, 208],
    [0, 312],
    [104, 312],
    [208, 312],
    [312, 312],
    [0, 418],
    [104, 418],
    [208, 418],
    [312, 418],
    [0, 522],
    [104, 522],
    [208, 522],
    [312, 522],
    [0, 626],
    [104, 626],
    [208, 626],
    [312, 626],
  ],
  character: [
    [0, 0],
    [220, 0],
    [440, 0],
    [660, 0],
    [0, 270],
    [220, 270],
    [440, 270],
    [660, 270],
    [0, 540],
    [220, 540],
    [440, 540],
    [660, 540],
    [0, 810],
    [220, 810],
    [440, 810],
    [660, 810],
  ],
  troll: [
    [0,0],
    [400,0],
    [800,0],
    [1200,0],
    [1600,0],
    [0,400],
    [400,400],
    [800,400],
    [1200, 400],
    [1600, 400],
    [0,800],
    [400, 800],
    [800, 800],
    [1200, 800],
    [1600, 800],
    [0, 1200],
    [400, 1200],
    [800, 1200],
    [1200, 1200],
    [1600, 1200], 
    [0, 1600],
    [400, 1600],
    [800, 1600],
    [1200, 1600],
    [1600, 1600],
    [0, 2000],
    [400, 2000],
    [800, 2000],
  ]
}

const enemies = []

function preload() {
  picture.scenery = loadImage("src/assets/images/scenery/forest.png")
  picture.character = loadImage("src/assets/images/character/running.png")
  picture.littleFlyingGoutEnemy = loadImage("src/assets/images/enemies/little-flying-gout.png")
  picture.littleGoutEnemy = loadImage("src/assets/images/enemies/little-gout.png")
  picture.trollEnemy = loadImage("src/assets/images/enemies/troll.png")

  sound.game = loadSound("src/assets/songs/soundtrack.mp3")
  sound.jump = loadSound("src/assets/songs/jump.mp3")
}

function setup() {
  createCanvas(windowWidth, windowHeight)

  item.scenery = new Scenery(picture.scenery, 3)

  item.character = new Character(
    pictureMatrixMap.character,
    picture.character,
    0,
    30,
    110,
    135,
    220,
    270
  )

  item.littleFlyingGoutEnemy = new Enemy(
    pictureMatrixMap.littleFlyingGout,
    picture.littleFlyingGoutEnemy,
    width - 52,
    200,
    100,
    75,
    200,
    150,
    10,
    1000
  )

  item.littleGoutEnemy = new Enemy(
    pictureMatrixMap.littleGout,
    picture.littleGoutEnemy,
    width - 52,
    30,
    52,
    52,
    104,
    104,
    10,
    200
  )

  item.trollEnemy = new Enemy(
    pictureMatrixMap.troll,
    picture.trollEnemy,
    width,
    0,
    200,
    200,
    400,
    400,
    10,
    2500
  )

  // sound.game.loop()

  frameRate(40)
}

function keyPressed() {
  if (key === "ArrowUp") {
    item.character.jump()
    sound.jump.play()
  }
}

function draw() {
  item.scenery.show()
  item.scenery.move()

  item.character.show()
  item.character.applyGravity()

  item.littleFlyingGoutEnemy.show()
  item.littleFlyingGoutEnemy.move()

  item.littleGoutEnemy.show()
  item.littleGoutEnemy.move()

  item.trollEnemy.show()
  item.trollEnemy.move()

  if (item.character.isColliding(item.littleGoutEnemy)) {
    // noLoop()
  }
}
