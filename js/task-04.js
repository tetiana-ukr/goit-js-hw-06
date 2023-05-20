let counterValue = 0;

const myCounterEl = document.getElementById("value");

const btnDecrementEl = document.querySelector('button[data-action="decrement"]');
const btnIncrementEl = document.querySelector('button[data-action="increment"]');

const onClickDecrement = () => {
    counterValue -= 1;
    myCounterEl.textContent = counterValue;
}

const onClickIncrement = () => {
    counterValue += 1;
    myCounterEl.textContent = counterValue;
}

btnDecrementEl.addEventListener('click', onClickDecrement);
btnIncrementEl.addEventListener('click', onClickIncrement);
