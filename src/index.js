const scenery = {
  forest: null
}

const hud = {
  score: null
}

const character = {
  witch: null
}

const enemy = {
  littleFlyingGout: null,
  littleGout: null,
  troll: null,
  getAll() {
    return Object.keys(this)
      .filter(key => this[key] instanceof Enemy)
      .map(key => this[key])
  }
}

const sound = {
  game: null,
  jump: null
}

const picture = {
  scenery: null,
  character: null,
  littleFlyingGout: null,
  littleGout: null,
  troll: null,
  gameOver: null
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

function preload() {
  picture.scenery = loadImage("src/assets/images/scenery/forest.png")
  picture.character = loadImage("src/assets/images/character/running.png")
  picture.littleFlyingGout = loadImage("src/assets/images/enemies/little-flying-gout.png")
  picture.littleGout = loadImage("src/assets/images/enemies/little-gout.png")
  picture.troll = loadImage("src/assets/images/enemies/troll.png")
  picture.gameOver = loadImage("src/assets/images/general/game-over.png")

  sound.game = loadSound("src/assets/songs/soundtrack.mp3")
  sound.jump = loadSound("src/assets/songs/jump.mp3")
}

function setup() {
  createCanvas(windowWidth, windowHeight)

  scenery.forest = new Scenery(picture.scenery, 3)

  character.witch = new Character(
    pictureMatrixMap.character,
    picture.character,
    0,
    30,
    110,
    135,
    220,
    270
  )

  enemy.littleFlyingGout = new Enemy(
    pictureMatrixMap.littleFlyingGout,
    picture.littleFlyingGout,
    width - 52,
    200,
    100,
    75,
    200,
    150,
    10,
    1000
  )

  enemy.littleGout = new Enemy(
    pictureMatrixMap.littleGout,
    picture.littleGout,
    width - 52,
    30,
    52,
    52,
    104,
    104,
    10,
    200
  )

  enemy.troll = new Enemy(
    pictureMatrixMap.troll,
    picture.troll,
    width,
    0,
    200,
    200,
    400,
    400,
    10,
    2500
  )

  hud.score = new Score()

  // sound.game.loop()

  frameRate(40)
}

function keyPressed() {
  if (key === "ArrowUp") {
    character.witch.jump()
    sound.jump.play()
  }
}

function draw() {
  scenery.forest.show()
  scenery.forest.move()

  character.witch.show()
  character.witch.applyGravity()

  hud.score.show()
  hud.score.addPoint()

  enemy.getAll().forEach(enemyInstance => {
    enemyInstance.show()
    enemyInstance.move()

    if (character.witch.isColliding(enemyInstance)) {
      image(picture.gameOver, width, height)
      noLoop()
    }
  })
}
