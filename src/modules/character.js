class Character extends Animator {
	constructor(matrix, picture, x, variantY, renderWidth, renderHeight, spriteWidth, spriteHeight) {
		super(matrix, picture, x, variantY, renderWidth, renderHeight, spriteWidth, spriteHeight)

		this.variantY = variantY
		this.initialY = height - this.height - this.variantY
		this.y = this.initialY

		this.jumpSpeed = 0
		this.jumpHeight = 50

		this.gravity = 6

		this.jumpCount = 0
		this.maxJumpCount = 2
	}

	jump() {
		let jumped = false

		if (this.jumpCount < this.maxJumpCount) {
			this.jumpSpeed = -this.jumpHeight
			this.jumpCount++

			jumped = true
		}

		return jumped
	}

	applyGravity() {
		this.y += this.jumpSpeed
		
		this.jumpSpeed += this.gravity

		if (this.y > this.initialY) {
			this.y = this.initialY
			this.jumpCount = 0
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