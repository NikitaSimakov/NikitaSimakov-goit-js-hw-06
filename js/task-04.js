let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');
console.log(decrementBtn);
decrementBtn.addEventListener("click", () => {
    counterValue -= 1;
    console.log(counterValue);
    value.textContent = counterValue;
});
incrementBtn.addEventListener("click", () => {
    counterValue += 1;
    console.log(counterValue);
    value.textContent = counterValue;
});

