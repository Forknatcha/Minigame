const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const scoreDisplay = document.getElementById('score');
let score = 0;
let isJumping = false;

// ตรวจสอบการชน
function checkCollision() {
    const dinoRect = dino.getBoundingClientRect();
    const cactusRect = cactus.getBoundingClientRect();

    if (
        dinoRect.x < cactusRect.x + cactusRect.width &&
        dinoRect.x + dinoRect.width > cactusRect.x &&
        dinoRect.y < cactusRect.y + cactusRect.height &&
        dinoRect.height + dinoRect.y > cactusRect.y
    ) {
        alert("Game Over! Your score: " + score);
        document.location.reload();
    }
}

// กระโดด
function jump() {
    if (isJumping) return;
    isJumping = true;

    let jumpHeight = 0;
    const jumpInterval = setInterval(() => {
        if (jumpHeight >= 100) {
            clearInterval(jumpInterval);
            const fallInterval = setInterval(() => {
                if (jumpHeight <= 0) {
                    clearInterval(fallInterval);
                    isJumping = false;
                }
                jumpHeight -= 10;
                dino.style.bottom = `${10 + jumpHeight}px`;
            }, 20);
        }
        jumpHeight += 10;
        dino.style.bottom = `${10 + jumpHeight}px`;
    }, 20);
}

// เพิ่มคะแนน
function increaseScore() {
    score++;
    scoreDisplay.innerText = "Score: " + score;
}

// เริ่มเกม
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        jump();
    }
});

setInterval(() => {
    checkCollision();
    increaseScore();
}, 100);
