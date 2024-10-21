let input = document.querySelector("input");
let progress = document.querySelector(".progress");
let max = input.getAttribute("maxlength");

input.addEventListener("input", function () {
    progress.style.width = `${(this.value.length / max) * 100}%`;
    progress.classList.remove("red", "green", "blue");

    if (this.value.length < 8) {
        progress.classList.add("red");
    } else if (this.value.length >= 8 && this.value.length < 15) {
        progress.classList.add("green");
    } else {
        progress.classList.add("blue");
    }
})