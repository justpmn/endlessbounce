let trail = [];

let ball = {

    x: window.innerWidth / 2,
    y: 100,

    radius: 20,

    dx: 4,
    dy: 4
};


// Rasterization stage: draw ball and trail onto canvas

function drawBall(ctx) {

    // Draw trail
    for (let i = 0; i < trail.length; i++) {

        let t = trail[i];

        ctx.beginPath();

        ctx.arc(
            t.x,
            t.y,
            ball.radius * (i / trail.length),
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            `rgba(255, 79, 216, ${i / trail.length})`;

        ctx.fill();

        ctx.closePath();
    }


    // Draw main ball
    ctx.beginPath();

    ctx.arc(
        ball.x,
        ball.y,
        ball.radius,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = "#ff4fd8";

    ctx.fill();

    ctx.closePath();
}