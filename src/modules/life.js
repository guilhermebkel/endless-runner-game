class Life {
	constructor(maxLife, initialLife) {
		this.maxLife = maxLife
		this.initialLife = initialLife
		this.currentLife = this.initialLife

		this.width = 25
		this.height = 25

		this.initialX = 20
		this.y = 20
	}

	draw() {
		for (let i = 0; i < this.currentLife; i++) {
			const margin = i * 10
			const position = this.initialX * (1 + i)

			image(picture.heart, (position + margin), this.y, this.width, this.height)
		}
	}

	incrementLife() {
		if (this.currentLife < this.maxLife) {
			this.currentLife++
		}
	}

	decrementLife() {
		if (this.currentLife > 0) {
			this.currentLife--
		}
	}

	get isAlive() {
		return this.currentLife > 0
	}
}
