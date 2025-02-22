const car1 = document.getElementById('car1');
const car2 = document.getElementById('car2');
const startButton = document.getElementById('start-button');

let car1Position = 0;
let car2Position = 0;

function startRace() {
    car1Position = 0;
    car2Position = 0;
    car1.style.bottom = '10px';
    car2.style.bottom = '10px';
    
    const raceInterval = setInterval(() => {
        car1Position += Math.random() * 10;
        car2Position += Math.random() * 10;

        car1.style.bottom = `${car1Position}px`;
        car2.style.bottom = `${car2Position}px`;

        if (car1Position >= 390) {
            clearInterval(raceInterval);
            alert("Car 1 wins!");
        } else if (car2Position >= 390) {
            clearInterval(raceInterval);
            alert("Car 2 wins!");
        }
    }, 100);
}

startButton.addEventListener('click', startRace);
