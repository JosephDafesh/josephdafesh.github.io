import Circle from "./Circle.js";
import Stars from "./stars.js";
import Planets from "./Planets.js";
import Projectile from "./Projectile.js";

const canvasStars = document.getElementById("starsCanvas"); // Canvas for stars
const ctxStars = canvasStars.getContext("2d");

const canvasPlanets = document.getElementById("planetsCanvas"); // Canvas for the circle
const ctxPlanets = canvasPlanets.getContext("2d");

const canvasCircle = document.getElementById("circleCanvas"); // Canvas for the circle
const ctxCircle = canvasCircle.getContext("2d");

const canvasProjectiles = document.getElementById("projectilesCanvas");
const ctxProjectiles = canvasProjectiles.getContext("2d");

// Set canvas dimensions for all layers
canvasStars.width = canvasCircle.width = window.innerWidth;
canvasStars.height = canvasCircle.height = window.innerHeight;

canvasPlanets.width = canvasCircle.width = window.innerWidth;
canvasPlanets.height = canvasCircle.height = window.innerHeight;

canvasCircle.width = canvasCircle.width = window.innerWidth;
canvasCircle.height = canvasCircle.height = window.innerHeight;

canvasProjectiles.width = canvasCircle.width = window.innerWidth;
canvasProjectiles.height = canvasCircle.height = window.innerHeight;

const circle = new Circle(10, 10, 10);
const stars = new Stars();
const planets = new Planets(10);
const projectiles = [];

// Start the game loop for both layers
stars.initialize(canvasStars);
stars.animate(canvasStars, ctxStars);
planets.initialize(canvasPlanets);
planets.animate(canvasPlanets, ctxPlanets);
// Handle mouse events
let isMousePressed = false;
let mouseX;
let mouseY;
let projectileVelocityX = 0;
let projectileVelocityY = 0;

canvasProjectiles.addEventListener("mousedown", (e) => {
  isMousePressed = true;
  mouseX = e.clientX;
  mouseY = e.clientY;
  const projectile = new Projectile(mouseX, mouseY, 5, 0, 0, 0, 0);
  // Add the projectile to the list
  projectiles.push(projectile);
});

canvasProjectiles.addEventListener("mousemove", (e) => {
  if (isMousePressed) {
    // Check if the left mouse button is pressed (dragging)
    const newMouseX = e.clientX;
    const newMouseY = e.clientY;

    projectileVelocityX = (mouseX - newMouseX) / 100;
    projectileVelocityY = (mouseY - newMouseY) / 100;
    // if (
    //   newMouseX < 10 ||
    //   newMouseX > canvasProjectiles.width -10||
    //   newMouseY < 10 ||
    //   newMouseY > canvasProjectiles.height-10 
    // ) {
    //   projectiles[projectiles.length - 1].hasBeenSet = true;
    //   projectiles[projectiles.length - 1].set(
    //     projectileVelocityX,
    //     projectileVelocityY
    //   );
    // }
  }
});

canvasProjectiles.addEventListener("mouseup", (e) => {
  projectiles[projectiles.length - 1].hasBeenSet = true;
  projectiles[projectiles.length - 1].set(
    projectileVelocityX,
    projectileVelocityY
  );
  // console.log(projectiles);
  // console.log(projectiles.length);
});

// Animation loop for projectiles
function animateProjectiles() {
  ctxProjectiles.clearRect(
    0,
    0,
    canvasProjectiles.width,
    canvasProjectiles.height
  );

  // Draw and update each projectile (extends Circle)
  for (let i = 0; i < projectiles.length; i++) {
    const projectile = projectiles[i];
    projectile.draw(ctxProjectiles);
    projectile.update(planets);

    // Remove projectiles that are out of bounds
    // if (
    //   projectile.x < 0 ||
    //   projectile.x > canvasProjectiles.width ||
    //   projectile.y < 0 ||
    //   projectile.y > canvasProjectiles.height
    // ) {
    //   projectiles.splice(i, 1);
    //   i--;
    // }
  }

  requestAnimationFrame(animateProjectiles);
}

// Start the animation loop for projectiles
animateProjectiles();