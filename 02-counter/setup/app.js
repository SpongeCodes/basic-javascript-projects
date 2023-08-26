// set inital value to zero
let count = 0;
// select value and buttons
const counter = document.querySelector("#value");

const buttons = document.querySelectorAll("button.btn");

buttons.forEach( (button) => {

    button.addEventListener("click",
    (clickEvent) => {
        // returns all class names of clicked element
        const styles = clickEvent.currentTarget.classList;
        if(styles.contains("decrease")) {
            count--;
        }
        else if(styles.contains("increase")) {
            count++;
        }
        else {
            count=0;
        }
        counter.textContent = count;
        if (count > 0) {
            counter.style.color = "green";
        }
        if (count < 0) {
            counter.style.color = "red";
        }
        if (count === 0) {
            counter.style.color = "#222";
        }
    })
});
