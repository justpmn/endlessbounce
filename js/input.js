let leftPressed = false;
let rightPressed = false;

document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowLeft") {
        leftPressed = true;
    }

    if (e.key === "ArrowRight") {
        rightPressed = true;
    }
});

document.addEventListener("keyup", (e) => {

    if (e.key === "ArrowLeft") {
        leftPressed = false;
    }

    if (e.key === "ArrowRight") {
        rightPressed = false;
    }
});