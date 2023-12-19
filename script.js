let currentNumber = 0;


const counter = document.querySelector('.js-counter-number');

const decreaseButton = document.querySelector('.js-decrease-button');
const resetButton = document.querySelector('.js-reset-button');
const increaseButton = document.querySelector('.js-increase-button');


decreaseButton.addEventListener('click', () => {decreaseCounter()});
resetButton.addEventListener('click', () => {resetCounter()});
increaseButton.addEventListener('click', () => {increaseCounter()});


function decreaseCounter(){
    currentNumber -= 1;

    counter.textContent = currentNumber;

    if(currentNumber < 0){
        counter.style.color = "red";

    }else if(currentNumber === 0){
        counter.style.color = "white";
    }
}

function resetCounter(){
    currentNumber = 0;

    counter.textContent = currentNumber;

    counter.style.color = "white";
}

function increaseCounter(){
    currentNumber += 1;

    counter.textContent = currentNumber;

    if(currentNumber > 0){
        counter.style.color = "rgb(69, 230, 47)";

    }else if(currentNumber === 0){
        counter.style.color = "white";
    }
}





