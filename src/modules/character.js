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
		const hit = collideRectRect(
			this.x,
			this.y,
			this.width,
			this.height,
			enemy.x,
			enemy.y,
			enemy.width,
			enemy.height
		)

		return hit
	}
}