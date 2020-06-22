class Scenery {
  constructor(picture, speed) {
    this.picture = picture
    this.speed = speed
    
    this.x1 = 0
    this.x2 = width
  }

  show() {
    image(this.picture, this.x1, 0, width, height)
    image(this.picture, this.x2, 0, width, height)
  }

  move() {
    this.x1 -= this.speed
    this.x2 -= this.speed

    if (this.x1 < -width) {
      this.x1 = width
    }

    if (this.x2 < -width) {
      this.x2 = width
    }
  }
}