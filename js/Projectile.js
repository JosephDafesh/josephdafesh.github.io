import Circle from "./Circle.js";

class Projectile extends Circle {
  constructor(x, y, radius, vx, vy, ax, ay, canMove) {
    super(x, y, radius);
    this.color = "#ff0000";
    this.vx = vx;
    this.vy = vy;
    this.ax = ax;
    this.ay = ay;
    this.hasBeenSet= false;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x - this.radius*2, this.y-this.radius*2, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
  set(vx, vy) {
    this.vx = vx;
    this.vy = vy;
  }

  update(planets) {
    if (this.hasBeenSet) {
      for (const planet of planets.planets) {
        let dx = planet.x - this.x;
        let dy = planet.y - this.y;
       
        this.ax +=
          dx < 0
            ? -Math.pow(dx * planet.radius, 2) * planets.gravityConstant
            : Math.pow(dx * planet.radius, 2) * planets.gravityConstant;
        this.ay +=
          dy < 0
            ? -Math.pow(dy * planet.radius, 2) * planets.gravityConstant
            : Math.pow(dy * planet.radius, 2) * planets.gravityConstant;
      }
      this.vx += this.ax;
      this.vy += this.ay;
      this.x += this.vx;
      this.y += this.vy;
      this.ax = 0;
      this.ay = 0;
    }
  }
}

export default Projectile;