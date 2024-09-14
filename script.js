const player = document.getElementById('player');
const ai = document.getElementById('ai');
let playerPos = { x: 50, y: 50 };
let aiPos = { x: 400, y: 400 };
const stepSize = 10; // Distance AI moves towards the player each step
const gameAreaSize = 500;

// Move the player with arrow keys
document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      if (playerPos.y - stepSize >= 0) playerPos.y -= stepSize;
      break;
    case 'ArrowDown':
      if (playerPos.y + stepSize <= gameAreaSize - 40) playerPos.y += stepSize;
      break;
    case 'ArrowLeft':
      if (playerPos.x - stepSize >= 0) playerPos.x -= stepSize;
      break;
    case 'ArrowRight':
      if (playerPos.x + stepSize <= gameAreaSize - 40) playerPos.x += stepSize;
      break;
  }
  updatePositions();
});

// Move AI towards player every 5 seconds
setInterval(() => {
  moveAITowardsPlayer();
}, 5000);

// Update player and AI positions in the game area
function updatePositions() {
  player.style.left = `${playerPos.x}px`;
  player.style.top = `${playerPos.y}px`;
  ai.style.left = `${aiPos.x}px`;
  ai.style.top = `${aiPos.y}px`;
}

// Move AI step by step towards the player
function moveAITowardsPlayer() {
  const dx = playerPos.x - aiPos.x;
  const dy = playerPos.y - aiPos.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance > 0) {
    aiPos.x += (dx / distance) * stepSize;
    aiPos.y += (dy / distance) * stepSize;
  }

  updatePositions();
}
