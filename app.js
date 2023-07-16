const randomColor = () => {
    const r = Math.floor((Math.random() * 255 + 1))
    const g = Math.floor((Math.random() * 255 + 1))
    const b = Math.floor((Math.random() * 255 + 1))
    return `rgb(${r},${g},${b})`;
}

const title = document.querySelector("h1");
const midSection = document.querySelectorAll(".middle-section button");
const buttons = document.querySelectorAll(".bottom-section button")
const mediumButtons = document.querySelectorAll(".bottom-section .middle-row button")
const hardButtons = document.querySelectorAll(".bottom-section .bottom-row button")
const easyMode = document.querySelector(".middle-section .game-modes #easy-btn")
const mediumMode = document.querySelector(".middle-section .game-modes #medium-btn")
const hardMode = document.querySelector(".middle-section .game-modes #hard-btn")


midSection.forEach((button) => {
    title.innerText = randomColor().toUpperCase();
    button.addEventListener("click", function() {
        title.innerText = randomColor().toUpperCase();
        buttons.forEach((button) => {
            button.style.backgroundColor = randomColor();
        });
    });
  });

buttons.forEach((button) => {
    button.style.backgroundColor = randomColor();
})

mediumButtons.forEach((button) => {
    button.style.display = "none";
})

hardButtons.forEach((button) => {
    button.style.display = "none";
})

easyMode.addEventListener("click", function () {
    mediumButtons.forEach((button) => {
        button.style.display = "none";
    })
    hardButtons.forEach((button) => {
        button.style.display = "none";
    })
})

mediumMode.addEventListener("click", function () {
    mediumButtons.forEach((button) => {
        button.style.display = "flex";
    });
    hardButtons.forEach((button) => {
        button.style.display = "none";
    })
});

hardMode.addEventListener("click", function () {
    mediumButtons.forEach((button) => {
        button.style.display = "flex";
    });
    hardButtons.forEach((button) => {
        button.style.display = "flex";
    });
});


/* mediumMode.addEventListener("click", function () {
    mediumButtons.forEach((button) => {
        button.style.display = "flex";
    })
})

hardMode.addEventListener("click", function () {
    hardButtons.forEach((button) => {
        button.style.display = "flex";
    })
}) */


