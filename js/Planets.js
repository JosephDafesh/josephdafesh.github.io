import Circle from "./Circle.js";

class Planets {
  constructor(_planetCount) {
    this.planetCount = _planetCount;
    this.planets = [];
    this.gravityConstant = Math.pow(0.1,11);
  }

  isWithinBounds(planet, canvas) {
    if (
      planet.x - planet.radius > 0 && // left border
      planet.x + planet.radius < canvas.width && // right border
      planet.y - planet.radius > 0 && // top border
      planet.y + planet.radius < canvas.height // bottom border
    )
      return true;
  }

  planetsIntersect(planet1, planet2) {
    const dx = planet1.x - planet2.x;
    const dy = planet1.y - planet2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < planet1.radius + planet2.radius;
  }

  generatePlanets(canvas) {
    let invalid;
    let planet;
    do {
      invalid = false;
      const radius = Math.random() * 75;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      planet = new Circle(x, y, radius);
      for (const existingPlanet of this.planets) {
        if (
          !this.isWithinBounds(planet, canvas) ||
          this.planetsIntersect(existingPlanet, planet)
        ) {
          invalid = true;
          break;
        }
      }
    } while (invalid);
    return planet;
  }

  // Initialize planets with random radii
  initialize(canvas) {
    for (let i = 0; i < this.planetCount; i++) {
      this.planets.push(this.generatePlanets(canvas));
    }
  }
  // Function to draw stars
  draw(ctx) {
    ctx.fillStyle = "#9B9ADC"; // Planet color (light purple)
    for (const planet of this.planets) {
      ctx.beginPath();
      ctx.arc(planet.x, planet.y, planet.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.closePath();
    }
  }

  // Animation loop
  animate(canvas, ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw planets
    this.draw(ctx);

    requestAnimationFrame(() => this.animate(canvas, ctx));
  }
}
export default Planets;