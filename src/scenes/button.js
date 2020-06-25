class Button {
	constructor(text, x, y, onMousePress, buttonClass) {
		this.text = text

		this.x = x
		this.y = y

		this.button = createButton(this.text)

		this.button.mousePressed(() => {
			onMousePress()

			this.button.remove()
		})

		this.button.addClass(buttonClass)
	}

	draw() {
		this.button.position(this.x, this.y)
		this.button.center("horizontal")
	}
}