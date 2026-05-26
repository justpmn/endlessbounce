const paddle = {

    width: 150,
    height: 20,

    x: window.innerWidth / 2 - 75,
    y: window.innerHeight - 80,

    speed: 10
};
// rasterization stage: draw paddle onto canvas

function drawPaddle(ctx) {

    ctx.fillStyle = "cyan";

    ctx.fillRect(
        paddle.x,
        paddle.y,
        paddle.width,
        paddle.height
    );
}
// application stage: update paddle position based on user input

function updatePaddle(canvas) {

    if (leftPressed && paddle.x > 0) {
        paddle.x -= paddle.speed;
    }

    if (
        rightPressed &&
        paddle.x + paddle.width < canvas.width
    ) {
        paddle.x += paddle.speed;
    }
}