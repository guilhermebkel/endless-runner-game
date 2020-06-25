class Home {
	setup() {
	}

	keyPressed(key) {
	}

	draw() {
		this.renderBackground()
		this.renderText()
		this.renderButton()
	}

	renderBackground() {
		image(picture.home, 0, 0, width, height)
	}

	renderText() {
		textFont(font.home)
		textAlign(CENTER)

		textSize(50)
		text("The bad", (width / 2), (height / 4.5))

		textSize(150)
		text("Witch", (width / 2), (height / 2.8))
	}

	renderButton() {
		scene.button.draw()
	}
}