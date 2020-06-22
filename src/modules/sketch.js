let sceneryPicture
let characterPicture

let scenery
let character

let gameSound

function preload() {
  sceneryPicture = loadImage("src/assets/images/scenery/forest.png")
  characterPicture = loadImage("src/assets/images/character/running.png")
  gameSound = loadSound("src/assets/songs/soundtrack.mp3")
}

function setup() {
  createCanvas(windowWidth, windowHeight)

  scenery = new Scenery(sceneryPicture, 3)
  character = new Character(characterPicture)

  gameSound.loop()

  frameRate(40)
}

function draw() {
  scenery.show()
  scenery.move()

  character.show()
}
