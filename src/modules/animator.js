class Animator {
	constructor(matrix, picture, x, renderWidth, renderHeight, spriteWidth, spriteHeight) {
		this.matrix = matrix
		this.picture = picture
	
		this.width = renderWidth
		this.height = renderHeight
	
		this.x = x
		this.y = height - this.height
	
		this.spriteWidth = spriteWidth
		this.spriteHeight = spriteHeight

		this.currentFrame = 0
	}

	show() {
		image(
			this.picture,
			this.x,
			this.y,
			this.width,
			this.height,
			this.matrix[this.currentFrame][0],
			this.matrix[this.currentFrame][1],
			this.spriteWidth,
			this.spriteHeight
		)

		this.animate()
	}

	animate() {
		this.currentFrame++

		if (this.currentFrame >= this.matrix.length - 1) {
			this.currentFrame = 0
		}
	}
}