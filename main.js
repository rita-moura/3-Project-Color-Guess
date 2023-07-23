window.addEventListener('load', () => {
  const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'cyan', 'magenta'];

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function getRandomColor() {
    const index = getRandomInt(0, colors.length);
    return colors[index];
  }

  for (let index = 1; index < 7; index += 1) {
    document.getElementById(`circle${index}`).style.backgroundColor = getRandomColor();
  }
});
