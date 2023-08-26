const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector("#btn");

const color = document.querySelector(".color");

btn.addEventListener("click", () => {
    random = getRandomNumber();
    document.body.style.backgroundColor = colors[random];
    color.textContent = colors[random];
})

function getRandomNumber() {
    return Math.floor(colors.length * Math.random());
}
