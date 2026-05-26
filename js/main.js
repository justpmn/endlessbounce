const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function animate() {

// rasterization stage: clear canvas for new frame
// trail and ball are drawn in drawBall(), paddle is drawn in drawPaddle()
    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    updatePaddle(canvas);
    updateBall(canvas);

    drawPaddle(ctx);
    drawBall(ctx);

    requestAnimationFrame(animate);
}

animate();