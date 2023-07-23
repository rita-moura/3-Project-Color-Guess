// main.js
const circles = document.querySelectorAll('.ball');
const answerElement = document.getElementById('answer');

function getRandomColorRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

let targetColorRGB;

function checkColor(event) {
  const selectedColor = event.target.style.backgroundColor; // Obter a cor selecionada pelo usuário

  if (selectedColor === targetColorRGB) {
    answerElement.innerText = 'Acertou!';
  } else {
    answerElement.innerText = 'Errou! Tente novamente!';
  }
}

function initializeGame() {
  targetColorRGB = getRandomColorRGB(); // Gerar a cor de destino
  document.getElementById('rgb-color').innerText = targetColorRGB; // Mostrar a cor de destino no parágrafo com o ID 'rgb-color'

  const availableColors = Array.from(circles).map((circle) => circle.style.backgroundColor);

  if (!availableColors.includes(targetColorRGB)) {
    const randomCircleIndex = Math.floor(Math.random() * circles.length);
    circles[randomCircleIndex].style.backgroundColor = targetColorRGB;
  }

  circles.forEach((circle) => {
    if (circle.style.backgroundColor !== targetColorRGB) {
      const randomColor = getRandomColorRGB();
      circle.style.backgroundColor = randomColor;
    }
    circle.addEventListener('click', checkColor);
  });
  answerElement.innerText = 'Escolha uma cor';
}

initializeGame();
