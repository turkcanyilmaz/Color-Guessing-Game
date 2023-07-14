const randomColor = () => {
    const r = Math.floor((Math.random() * 255 + 1))
    const g = Math.floor((Math.random() * 255 + 1))
    const b = Math.floor((Math.random() * 255 + 1))
    return `rgb(${r},${g},${b})`;
}

const title = document.querySelector("h1");
const midSection = document.querySelectorAll(".middle-section button");
const buttons = document.querySelectorAll(".bottom-section button")




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

// For loop of mid section

/* for (let i = 0; i < midSection.length; i++) {
    const button = midSection[i];
    button.addEventListener("click", function() {
        title.innerText = randomColor();
    });
} */

