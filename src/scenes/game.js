class Game {
	setup() {
		scenery.forest = new Scenery(picture.forest, 3)

		character.witch = new Character(
			pictureMatrixMap.character,
			picture.witch,
			0,
			30,
			110,
			135,
			220,
			270
		)

		enemy.littleFlyingGout = new Enemy(
			pictureMatrixMap.littleFlyingGout,
			picture.littleFlyingGout,
			width - 52,
			200,
			100,
			75,
			200,
			150,
			10,
			1000
		)

		enemy.littleGout = new Enemy(
			pictureMatrixMap.littleGout,
			picture.littleGout,
			width - 52,
			30,
			52,
			52,
			104,
			104,
			10,
			200
		)

		enemy.troll = new Enemy(
			pictureMatrixMap.troll,
			picture.troll,
			width,
			0,
			200,
			200,
			400,
			400,
			10,
			2500
		)

		hud.score = new Score()

		// sound.game.loop()
	}

	keyPressed(key) {
		if (key === "ArrowUp") {
			const jumped = character.witch.jump()
			
			if (jumped) {
				sound.jump.play()
			}
		}
	}

	draw() {
		scenery.forest.show()
		scenery.forest.move()

		character.witch.show()
		character.witch.applyGravity()

		hud.score.show()
		hud.score.addPoint()

		const currentEnemy = enemy.getCurrent()
		
		currentEnemy.show()
		currentEnemy.move()

		if (currentEnemy.isNotVisible) {
			enemy.changeEnemy()
			currentEnemy.addRandomSpeed()
		}

		if (character.witch.isColliding(currentEnemy)) {
			image(picture.gameOver, ((width / 2) - 200), (height / 3))
			noLoop()
		}
	}
}