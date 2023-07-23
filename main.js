const circles = document.querySelectorAll('.ball');
const answerElement = document.getElementById('answer');
const resetButton = document.getElementById('reset-game');
const scoreElement = document.getElementById('score');

let targetColorRGB;
let score = 0;

function getRandomColorRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function updateScore() {
  scoreElement.innerText = score; // Atualizar o texto do placar com a pontuação atual
}

function checkColor(event) {
  const selectedColor = event.target.style.backgroundColor; // Obter a cor selecionada pelo usuário

  if (selectedColor === targetColorRGB) {
    answerElement.innerText = 'Acertou!';
    score += 3; // Incrementar 3 pontos para cada acerto
    updateScore(); // Atualizar o placar
  } else {
    answerElement.innerText = 'Errou! Tente novamente!';
  }
}

function initializeGame() {
  targetColorRGB = getRandomColorRGB(); // Gerar a cor de destino
  document.getElementById('rgb-color').innerText = targetColorRGB;
  const availableColors = Array.from(circles).map((circle) => circle.style.backgroundColor);

  if (!availableColors.includes(targetColorRGB)) {
    const randomCircleIndex = Math.floor(Math.random() * circles.length);
    circles[randomCircleIndex].style.backgroundColor = targetColorRGB;
  }
  circles.forEach((circle) => {
    if (circle.style.backgroundColor !== targetColorRGB) {
      const randomColor = getRandomColorRGB();
      // eslint-disable-next-line no-param-reassign
      circle.style.backgroundColor = randomColor;
    }
    circle.addEventListener('click', checkColor);
  });

  answerElement.innerText = 'Escolha uma cor';
}

resetButton.addEventListener('click', () => {
  circles.forEach((circle) => {
    circle.removeEventListener('click', checkColor);
  });

  circles.forEach((circle) => {
    circle.style.backgroundColor = '';
  });

  initializeGame();
});

initializeGame();
