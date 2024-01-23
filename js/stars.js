class Stars {
    constructor() {
      this.starCount = 101;
      this.stars = [];
    }
  
    // Initialize stars with random positions
    initialize(canvas) {
      for (let i = 0; i < this.starCount; i++) {
        this.stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2, // Size of stars
        });
      }
      console.log(this.stars);
    }
  
    // Function to draw stars
    draw(ctx) {
      ctx.fillStyle = "#ffffff"; // Star color (white)
      for (const star of this.stars) {
        ctx.fillRect(star.x, star.y, star.size, star.size);
      }
    }
  
    // Animation loop
    animate(canvas, ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      // Draw starry background
      this.draw(ctx);
  
      // ... (the rest of your code for the bouncing circle)
  
      requestAnimationFrame(() => this.animate(canvas, ctx));
    }
  }
  export default Stars;