function setup() {
  createCanvas(windowWidth, windowHeight)

	scene.game = new Game()
	scene.game.setup()

	scene.home = new Home()
	scene.home.setup()

	scene.button = new Button(
		"Start",
		(width / 2),
		(height / 2),
		() => scene.setCurrent("game"),
		"home-button"
	)

  frameRate(40)
}

function keyPressed() {
  scene.current.keyPressed(key)
}

function draw() {
  scene.current.draw()
}
