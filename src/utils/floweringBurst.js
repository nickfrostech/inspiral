import confetti from 'canvas-confetti';

// Delicate curved petal path
const petalPath = confetti.shapeFromPath({
  path: 'M 0 16 C -8 11, -9 4, 0 0 C 9 4, 8 11, 0 16 Z',
});

// Delicate 5-petal blossom path
const blossomPath = confetti.shapeFromPath({
  path: 'M 8 1 C 10 4, 13 3, 14 6 C 12 8, 14 11, 11 13 C 9 12, 7 14, 5 13 C 5 11, 2 10, 1 8 C 4 7, 3 4, 5 3 C 7 4, 7 1, 8 1 Z',
});

/**
 * Creates a micro blooming flower blossom at click location
 * Size: reduced to ~40px, Duration: 500ms
 */
function spawnBloomingFlowerDOM(clientX, clientY) {
  if (typeof document === 'undefined') return;

  const container = document.createElement('div');
  container.className = 'pointer-events-none fixed z-50';
  container.style.left = `${clientX}px`;
  container.style.top = `${clientY}px`;
  container.style.transform = 'translate(-50%, -50%)';

  container.innerHTML = `
    <svg width="42" height="42" viewBox="0 0 60 60" fill="none" class="animate-flower-bloom-micro">
      <defs>
        <radialGradient id="bloomStamen" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FAF9F5" />
          <stop offset="60%" stop-color="#D4AF37" />
          <stop offset="100%" stop-color="#B8860B" />
        </radialGradient>
        <linearGradient id="petalSilk" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.95" />
          <stop offset="70%" stop-color="#FDF8EC" stop-opacity="0.85" />
          <stop offset="100%" stop-color="#D4AF37" stop-opacity="0.6" />
        </linearGradient>
      </defs>
      
      <!-- 6 Symmetrical Silk Petals -->
      <g transform-origin="30 30">
        <path d="M 30 30 C 25 20, 26 8, 30 3 C 34 8, 35 20, 30 30 Z" fill="url(#petalSilk)" transform="rotate(0 30 30)" />
        <path d="M 30 30 C 25 20, 26 8, 30 3 C 34 8, 35 20, 30 30 Z" fill="url(#petalSilk)" transform="rotate(60 30 30)" />
        <path d="M 30 30 C 25 20, 26 8, 30 3 C 34 8, 35 20, 30 30 Z" fill="url(#petalSilk)" transform="rotate(120 30 30)" />
        <path d="M 30 30 C 25 20, 26 8, 30 3 C 34 8, 35 20, 30 30 Z" fill="url(#petalSilk)" transform="rotate(180 30 30)" />
        <path d="M 30 30 C 25 20, 26 8, 30 3 C 34 8, 35 20, 30 30 Z" fill="url(#petalSilk)" transform="rotate(240 30 30)" />
        <path d="M 30 30 C 25 20, 26 8, 30 3 C 34 8, 35 20, 30 30 Z" fill="url(#petalSilk)" transform="rotate(300 30 30)" />
      </g>

      <!-- Center Glow Core -->
      <circle cx="30" cy="30" r="5" fill="url(#bloomStamen)" />
    </svg>
  `;

  if (!document.getElementById('flower-micro-styles')) {
    const style = document.createElement('style');
    style.id = 'flower-micro-styles';
    style.innerHTML = `
      @keyframes flowerMicroBloom {
        0% {
          transform: scale(0.2) rotate(-20deg);
          opacity: 0;
        }
        35% {
          transform: scale(1.1) rotate(10deg);
          opacity: 1;
        }
        60% {
          transform: scale(1.0) rotate(0deg);
          opacity: 0.95;
        }
        100% {
          transform: scale(1.18) rotate(15deg);
          opacity: 0;
        }
      }
      .animate-flower-bloom-micro {
        animation: flowerMicroBloom 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }
    `;
    document.head.appendChild(style);
  }

  document.body.appendChild(container);
  setTimeout(() => {
    container.remove();
  }, 550);
}

/**
 * Triggers a crisp, reduced-size botanical bloom (0.5s duration, compact petal drift)
 */
export function triggerFloralBurst(event) {
  let clientX = window.innerWidth / 2;
  let clientY = window.innerHeight / 2;

  if (event && event.clientX && event.clientY) {
    clientX = event.clientX;
    clientY = event.clientY;
  } else if (event && event.currentTarget) {
    const rect = event.currentTarget.getBoundingClientRect();
    clientX = rect.left + rect.width / 2;
    clientY = rect.top + rect.height / 2;
  }

  const x = clientX / window.innerWidth;
  const y = clientY / window.innerHeight;

  // 1. Crisp micro flower blossom at click origin
  spawnBloomingFlowerDOM(clientX, clientY);

  // 2. Compact petal drift
  confetti({
    particleCount: 8,
    angle: 90,
    spread: 100,
    startVelocity: 11,
    origin: { x, y },
    colors: ['#FAF9F5', '#FDF8EC', '#D4AF37', '#2D6A4F'],
    shapes: [petalPath, blossomPath],
    scalar: 1.0,
    ticks: 55,
    gravity: 0.85,
    decay: 0.91,
  });
}
