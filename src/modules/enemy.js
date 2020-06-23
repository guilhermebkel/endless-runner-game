class Enemy extends Animator {
	constructor(matrix, picture, x, renderWidth, renderHeight, spriteWidth, spriteHeight) {
		super(matrix, picture, x, renderWidth, renderHeight, spriteWidth, spriteHeight)

		this.speed = 10
	}

	move() {
		this.x -= this.speed

		if (this.x < -this.width) {
			this.x = width
		}
	}
}