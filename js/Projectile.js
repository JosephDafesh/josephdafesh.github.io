import Circle from "./Circle.js";

class Projectile extends Circle {
  constructor(x, y, radius, vx, vy, ax, ay, canMove) {
    super(x, y, radius);
    this.color = "#ff0000"; // Red color for projectiles
    this.vx = vx;
    this.vy = vy;
    this.ax = ax;
    this.ay = ay;
    this.hasBeenSet= false;
    // this.canDraw = true;
  }

  // Function to draw the projectile
  draw(ctx) {
    // if (this.canDraw == true) {
    ctx.beginPath();
    ctx.arc(this.x - this.radius*2, this.y-this.radius*2, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
    // }
  }

  set(vx, vy) {
    this.vx = vx;
    this.vy = vy;
  }
  // Function to update the projectile's position
  update(planets) {
    // Update projectile's position if it has been set
    if (this.hasBeenSet) {
      for (const planet of planets.planets) {
        let dx = planet.x - this.x;
        let dy = planet.y - this.y;
        // Acceleration is proporational to distance squared, times area squared (proportional to radius) * gravitational constant of the planet
        this.ax +=
          dx < 0
            ? -Math.pow(dx * planet.radius, 2) * planets.gravityConstant
            : Math.pow(dx * planet.webkitURLradius, 2) * planets.gravityConstant;
        this.ay +=
          dy < 0
            ? -Math.pow(dy * planet.radius, 2) * planets.gravityConstant
            : Math.pow(dy * planet.radius, 2) * planets.gravityConstant;

        // if d <= r1 + r2
        // let distance = Math.sqrt(dx*dx + dy*dy);
        // if ( distance <= this.radius + planet.radius )
        //   // Don't draw this projectile
        //   this.canDraw = true;
       
      }
      this.vx += this.ax;
      this.vy += this.ay;
      this.x += this.vx;
      this.y += this.vy;
      this.ax = 0;
      this.ay = 0;
      console.log("I just updated this meteor's position");
    }
  }
}

export default Projectile;