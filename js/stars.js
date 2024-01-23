class Stars {
  constructor() {
    this.starCount = 101;
    this.stars = [];
  }

  initialize(canvas) {
    for (let i = 0; i < this.starCount; i++) {
      this.stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
      });
    }
    console.log(this.stars);
  }

  draw(ctx) {
    ctx.fillStyle = "#ffffff"; 
    for (const star of this.stars) {
      ctx.fillRect(star.x, star.y, star.size, star.size);
    }
  }

  animate(canvas, ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.draw(ctx);

    requestAnimationFrame(() => this.animate(canvas, ctx));
  }
}
export default Stars;