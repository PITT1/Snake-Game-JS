const screen = document.querySelector('.screen');
const scoreDiv = document.querySelector('.score');

let snakeX = 15;
let snakeY = 15;
let snakeDirectionX = 0;
let snakeDirectionY = 0;
let foodX = 22;
let foodY = 12;
let score = 0;

const checkDoorCrash = () => {
    if (snakeX > 30) {
        gameOver();
    }
    if (snakeX < 1) {
        gameOver();
    }
    if (snakeY > 30) {
        gameOver();
    }
    if (snakeY < 1) {
        gameOver();
    }
}

const gameOver = () => {
    updateFoodPosition();
    snakeDirectionX = 0;
    snakeDirectionY = 0;
    snakeX = 15;
    snakeY = 15;
    score = 0;
    alert("GAME OVER :C")
}

const updateFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

const keyPressMove = (tecla) => {
    if (tecla.key == "ArrowUp") {
        snakeDirectionX = 0;
        snakeDirectionY = -1;
    }

    if (tecla.key == "ArrowDown") {
        snakeDirectionX = 0;
        snakeDirectionY = 1;
    }

    if (tecla.key == "ArrowLeft") {
        snakeDirectionX = -1;
        snakeDirectionY = 0;
    }

    if (tecla.key == "ArrowRight") {
        snakeDirectionX = 1;
        snakeDirectionY = 0;
    }
}

const initGame = () => {
    screen.innerHTML = `<div class="Snake" style="grid-area: ${snakeY}/${snakeX};"></div>
                        <div class="food" style="grid-area: ${foodY}/${foodX};"></div>`;
    snakeX += snakeDirectionX;
    snakeY += snakeDirectionY;

    if (snakeX == foodX && snakeY ==foodY) {
        updateFoodPosition();
        score += 1;
        scoreDiv.innerHTML = `Score: ${score}`
    }

    checkDoorCrash();
}

setInterval(initGame, 100);

window.addEventListener('keydown', keyPressMove);