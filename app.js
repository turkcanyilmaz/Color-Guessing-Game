
const title = document.querySelector("h1");
const midSection = document.querySelectorAll(".middle-section button");
const buttons = document.querySelectorAll(".bottom-section .color-btn");
const easyButtons = document.querySelectorAll(".bottom-section .top-row .color-btn");
const mediumButtons = document.querySelectorAll(".bottom-section .middle-row .color-btn");
const hardButtons = document.querySelectorAll(".bottom-section .bottom-row .color-btn");  
const easyMode = document.querySelector(".middle-section .game-modes #easy-btn")
const mediumMode = document.querySelector(".middle-section .game-modes #medium-btn")
const hardMode = document.querySelector(".middle-section .game-modes #hard-btn")
const resetGame = document.querySelector(".middle-section .reset-game button")

const randomColor = () => {
  const r = Math.floor((Math.random() * 255 + 1))
  const g = Math.floor((Math.random() * 255 + 1))
  const b = Math.floor((Math.random() * 255 + 1))
  return `rgb(${r},${g},${b})`;
}

const correctColor = () => {
  return randomColor();
}

const generateColorsForEasy = () => {
  const correctButtonIndex = Math.floor(Math.random() * 3);
  const otherColors = [];

  for (let i = 0; i < buttons.length; i++) {
    if (i === correctButtonIndex) {
      const correctColorValue = correctColor();
      buttons[i].style.backgroundColor = correctColorValue;
      title.innerText = correctColorValue.toUpperCase();
    } else {
      let color = randomColor();
      while (otherColors.includes(color)) {
        color = randomColor();
      }
      buttons[i].style.backgroundColor = color;
      otherColors.push(color);
    }
  }
};

const generateColorsForMedium = () => {
  const correctButtonIndex = Math.floor(Math.random() * 6);
  const otherColors = [];

  for (let i = 0; i < buttons.length; i++) {
    if (i === correctButtonIndex) {
      const correctColorValue = correctColor();
      buttons[i].style.backgroundColor = correctColorValue;
      title.innerText = correctColorValue.toUpperCase();
    } else {
      let color = randomColor();
      while (otherColors.includes(color)) {
        color = randomColor();
      }
      buttons[i].style.backgroundColor = color;
      otherColors.push(color);
    }
  }
};

const generateColorsForHard = () => {
  const correctButtonIndex = Math.floor(Math.random() * 9);
  const otherColors = [];

  for (let i = 0; i < buttons.length; i++) {
    if (i === correctButtonIndex) {
      const correctColorValue = correctColor();
      buttons[i].style.backgroundColor = correctColorValue;
      title.innerText = correctColorValue.toUpperCase();
    } else {
      let color = randomColor();
      while (otherColors.includes(color)) {
        color = randomColor();
      }
      buttons[i].style.backgroundColor = color;
      otherColors.push(color);
    }
  }
};

generateColorsForEasy();

  resetGame.addEventListener("click", function() {
    generateColorsForEasy();
  });

  mediumButtons.forEach((button) => {
    button.style.display = "none";
  });
  hardButtons.forEach((button) => {
    button.style.display = "none";
  });  

easyMode.addEventListener("click", function() {
    mediumButtons.forEach((button) => {
      button.style.display = "none";
    });
    hardButtons.forEach((button) => {
      button.style.display = "none";
    });
    easyMode.style.backgroundColor = "#496ba3";
    easyMode.style.color = "#faf8f1";
    mediumMode.style.backgroundColor = "#faf8f1";
    mediumMode.style.color = "#496ba3";
    hardMode.style.backgroundColor = "#faf8f1";
    hardMode.style.color = "#496ba3";
    generateColorsForEasy();

  });
  
  mediumMode.addEventListener("click", function() {
    mediumButtons.forEach((button) => {
      button.style.display = "flex";
    });
    hardButtons.forEach((button) => {
      button.style.display = "none";
    });
    easyMode.style.backgroundColor = "#faf8f1";
    easyMode.style.color = "#496ba3";
    mediumMode.style.backgroundColor = "#496ba3";
    mediumMode.style.color = "#faf8f1";
    hardMode.style.backgroundColor = "#faf8f1";
    hardMode.style.color = "#496ba3";
    generateColorsForMedium();

    resetGame.addEventListener("click", function() {
      generateColorsForMedium();
    });
  });
  
  hardMode.addEventListener("click", function() {
    mediumButtons.forEach((button) => {
      button.style.display = "flex";
    });
    hardButtons.forEach((button) => {
      button.style.display = "flex";
    });
    easyMode.style.backgroundColor = "#faf8f1";
    easyMode.style.color = "#496ba3";
    mediumMode.style.backgroundColor = "#faf8f1";
    mediumMode.style.color = "#496ba3";
    hardMode.style.backgroundColor = "#496ba3";
    hardMode.style.color = "#faf8f1";
    generateColorsForHard();

    resetGame.addEventListener("click", function() {
      generateColorsForHard();
    });
  });