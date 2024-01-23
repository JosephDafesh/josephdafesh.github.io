class Circle {
    constructor(x,y,radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
  
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x - this.radius, this.y - this.radius, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#DC143C";
        ctx.fill();
        ctx.closePath();
    }
  
  }
  
  export default Circle;