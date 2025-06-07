
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let x = 50, y = 300, vy = 0, onGround = false;
const gravity = 0.8, jumpPower = -15;
const groundLevel = 400;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Ground
  ctx.fillStyle = "#228B22";
  ctx.fillRect(0, groundLevel, canvas.width, 50);

  // Human
  ctx.fillStyle = "#FFD700";
  ctx.fillRect(x, y, 30, 50);

  // Apply gravity
  vy += gravity;
  y += vy;

  if (y >= groundLevel - 50) {
    y = groundLevel - 50;
    vy = 0;
    onGround = true;
  }

  requestAnimationFrame(draw);
}

function moveLeft() { x -= 20; }
function moveRight() { x += 20; }
function jump() {
  if (onGround) {
    vy = jumpPower;
    onGround = false;
  }
}

draw();
