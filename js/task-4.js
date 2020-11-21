let counterValue = 0;

const increment = () => {
    counterValue += 1;
    render();
};

const decrement = () => {
    counterValue -= 1;
    render();
};
const render = () => ref.htmlValue.textContent = counterValue;
const ref = {
  buttonDecrement: document.querySelector('[data-action="decrement"]'),
  buttonIncrement: document.querySelector('[data-action="increment"]'),
  htmlValue: document.querySelector('#value'),
};

 ref.buttonDecrement.addEventListener('click', () => decrement());
 ref.buttonIncrement.addEventListener('click', () => increment());
 

