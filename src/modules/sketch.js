let sceneryPicture
let characterPicture
let enemyPicture

let scenery
let character
let enemy

let gameSound

const pictureMatrixMap = {
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
   ]
}

function preload() {
  sceneryPicture = loadImage("src/assets/images/scenery/forest.png")
  characterPicture = loadImage("src/assets/images/character/running.png")
  enemyPicture = loadImage("src/assets/images/enemies/little-gout.png")

  gameSound = loadSound("src/assets/songs/soundtrack.mp3")
}

function setup() {
  createCanvas(windowWidth, windowHeight)

  scenery = new Scenery(sceneryPicture, 3)

  character = new Character(
    pictureMatrixMap.character,
    characterPicture,
    0,
    110,
    135,
    220,
    270
  )

  enemy = new Enemy(
    pictureMatrixMap.littleGout,
    enemyPicture,
    width - 52,
    52,
    52,
    104,
    104
  )

  // gameSound.loop()

  frameRate(40)
}

function keyPressed() {
  if (key === "ArrowUp") {
    character.jump()
  }
}

function draw() {
  scenery.show()
  scenery.move()

  character.show()
  character.applyGravity()

  enemy.show()
  enemy.move()

  if (character.isColliding(enemy)) {
    noLoop()
  }
}
