const gravity = 0.25;


/*
 App and geometry 
 Handles movement and collisions
*/

function updateBall(canvas) {

    // Gravity
    ball.dy += gravity;

    // ball trail
    trail.push({
        x: ball.x,
        y: ball.y
    });

    // Limit trail length
    if (trail.length > 20) {
        trail.shift();
    }


    // position update
    ball.x += ball.dx;
    ball.y += ball.dy;

    
    // wall collisions. bounce off walls and ceiling upon contact
    

    // Left wall
    if (ball.x - ball.radius < 0) {

        ball.x = ball.radius;

        // Reflect horizontally
        ball.dx *= -1;
    }


    // Right wall
    if (ball.x + ball.radius > canvas.width) {

        ball.x = canvas.width - ball.radius;

        // Reflect horizontally
        ball.dx *= -1;
    }


    // Ceiling
    if (ball.y - ball.radius < 0) {

        ball.y = ball.radius;

        // Reflect downward
        ball.dy *= -1;
    }
    // Paddle collision

    if (

        ball.y + ball.radius > paddle.y &&
        ball.y - ball.radius < paddle.y + paddle.height &&

        ball.x > paddle.x &&
        ball.x < paddle.x + paddle.width &&

        ball.dy > 0

    ) {

        // Prevent sticking
        ball.y = paddle.y - ball.radius;

// end of geometry stage, start of application stage


        // upward bounce
        ball.dy = -12;


        // Paddle hit changes horizontal direction
        let hitPoint =
            ball.x - (paddle.x + paddle.width / 2);

        ball.dx = hitPoint * 0.08;
    }


    // Respawn ball if it falls below canvas. old ball is killed

    if (ball.y > canvas.height + 100) {

        respawnBall(canvas);
    }
}
// spawn new ball at top of canvas with random horizontal velocity.

function respawnBall(canvas) {

    // Clear previous trail
    trail = [];

    ball = {

        x: canvas.width / 2,
        y: 100,

        radius: 20,

        dx: (Math.random() - 0.5) * 8,

        dy: 4
    };
}