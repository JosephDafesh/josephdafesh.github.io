import Circle from "./Circle.js";
import Stars from "./stars.js";
import Planets from "./Planets.js";
import Projectile from "./Projectile.js";

const canvasStars = document.getElementById("starsCanvas");
const ctxStars = canvasStars.getContext("2d");

const canvasPlanets = document.getElementById("planetsCanvas");
const ctxPlanets = canvasPlanets.getContext("2d");

const canvasCircle = document.getElementById("circleCanvas");
const ctxCircle = canvasCircle.getContext("2d");

const canvasProjectiles = document.getElementById("projectilesCanvas");
const ctxProjectiles = canvasProjectiles.getContext("2d");

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

stars.initialize(canvasStars);
stars.animate(canvasStars, ctxStars);
planets.initialize(canvasPlanets);
planets.animate(canvasPlanets, ctxPlanets);

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
  projectiles.push(projectile);
});

canvasProjectiles.addEventListener("mousemove", (e) => {
  if (isMousePressed) {
    const newMouseX = e.clientX;
    const newMouseY = e.clientY;

    projectileVelocityX = (mouseX - newMouseX) / 100;
    projectileVelocityY = (mouseY - newMouseY) / 100;
  }
});

canvasProjectiles.addEventListener("mouseup", (e) => {
  projectiles[projectiles.length - 1].hasBeenSet = true;
  projectiles[projectiles.length - 1].set(
    projectileVelocityX,
    projectileVelocityY
  );
});

function animateProjectiles() {
  ctxProjectiles.clearRect(
    0,
    0,
    canvasProjectiles.width,
    canvasProjectiles.height
  );

  for (let i = 0; i < projectiles.length; i++) {
    const projectile = projectiles[i];
    projectile.draw(ctxProjectiles);
    projectile.update(planets);

  }

  requestAnimationFrame(animateProjectiles);
}

animateProjectiles();