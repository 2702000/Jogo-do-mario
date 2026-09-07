const mario = document.querySelector('.mario');
const obstacle = document.querySelector('.obstacle');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}


const loop = setInterval(() => {

    const obstaclePosition = obstacle.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (obstaclePosition <= 120 && obstaclePosition > 0 && marioPosition < 80) {
        obstacle.style.animation = 'none';
        obstacle.style.left = `${obstaclePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${obstaclePosition}px`;

        mario.src = './img/game-over2.webp';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);
