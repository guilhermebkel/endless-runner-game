let sceneryPicture
let characterPicture

function preload() {
  sceneryPicture = loadImage("src/assets/images/scenery/forest.png")
  characterPicture = loadImage("src/assets/images/character/running.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background(sceneryPicture)
  image(characterPicture, 0, 0, 220, 270, 0, 0)
}