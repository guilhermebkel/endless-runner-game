class Character extends Animator {
	constructor(matrix, picture, x, renderWidth, renderHeight, spriteWidth, spriteHeight) {
		super(matrix, picture, x, renderWidth, renderHeight, spriteWidth, spriteHeight)

		this.initialY = height - this.height
		this.y = this.initialY

		this.jumpSpeed = 0
		this.gravity = 3
	}

	jump() {
		this.jumpSpeed = -30
	}

	applyGravity() {
		this.y += this.jumpSpeed
		
		this.jumpSpeed += this.gravity

		if (this.y > this.initialY) {
			this.y = this.initialY
		}
	}

	isColliding(enemy) {
		const precision = 0.7

		const hit = collideRectRect(
			this.x,
			this.y,
			this.width * precision,
			this.height * precision,
			enemy.x,
			enemy.y,
			enemy.width * precision,
			enemy.height * precision
		)

		return hit
	}
}