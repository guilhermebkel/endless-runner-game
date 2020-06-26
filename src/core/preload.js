function preload() {
  picture.forest = loadImage("src/assets/images/scenery/forest.png")
  picture.witch = loadImage("src/assets/images/character/running.png")
  picture.littleFlyingGout = loadImage("src/assets/images/enemies/little-flying-gout.png")
  picture.littleGout = loadImage("src/assets/images/enemies/little-gout.png")
  picture.troll = loadImage("src/assets/images/enemies/troll.png")
	picture.home = loadImage("src/assets/images/general/home.png")
  picture.heart = loadImage("src/assets/images/general/heart.png")
  picture.gameOver = loadImage("src/assets/images/general/game-over.png")

  sound.game = loadSound("src/assets/songs/soundtrack.mp3")
	sound.jump = loadSound("src/assets/songs/jump.mp3")
	
	font.home = loadFont("src/assets/fonts/main.otf")
}