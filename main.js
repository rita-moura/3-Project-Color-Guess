window.addEventListener('load', () => {
  const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'cyan', 'magenta'];

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function getRandomColor() {
    const index = getRandomInt(0, colors.length);
    return colors[index];
  }

  document.getElementById('circle1').style.backgroundColor = getRandomColor();
  document.getElementById('circle2').style.backgroundColor = getRandomColor();
  document.getElementById('circle3').style.backgroundColor = getRandomColor();
  document.getElementById('circle4').style.backgroundColor = getRandomColor();
  document.getElementById('circle5').style.backgroundColor = getRandomColor();
  document.getElementById('circle6').style.backgroundColor = getRandomColor();
});
