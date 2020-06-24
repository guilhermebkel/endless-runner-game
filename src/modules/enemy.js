class Enemy extends Animator {
	constructor(matrix, picture, x, variantY, renderWidth, renderHeight, spriteWidth, spriteHeight, speed, delay) {
		super(matrix, picture, x, variantY, renderWidth, renderHeight, spriteWidth, spriteHeight)

		this.speed = speed

		this.delay = delay

		this.x = width + this.delay
	}

	move() {
		this.x -= this.speed

		if (this.x < -this.width - this.delay) {
			this.x = width
		}
	}
}