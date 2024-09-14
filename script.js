const player = document.getElementById('player');
const ai = document.getElementById('ai');
let playerPos = { x: 50, y: 50 };
let aiPos = { x: 400, y: 400 };
const playerStepSize = 10; // Distance the player moves per key press
const aiStepSize = 20; // Distance the AI moves towards the player each step
const gameAreaSize = 500;

// Move the player with arrow keys
document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      if (playerPos.y - playerStepSize >= 0) playerPos.y -= playerStepSize;
      break;
    case 'ArrowDown':
      if (playerPos.y + playerStepSize <= gameAreaSize - 40) playerPos.y += playerStepSize;
      break;
    case 'ArrowLeft':
      if (playerPos.x - playerStepSize >= 0) playerPos.x -= playerStepSize;
      break;
    case 'ArrowRight':
      if (playerPos.x + playerStepSize <= gameAreaSize - 40) playerPos.x += playerStepSize;
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
    aiPos.x += (dx / distance) * aiStepSize;
    aiPos.y += (dy / distance) * aiStepSize;
  }

  updatePositions();
}
