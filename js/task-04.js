const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

let counter = 0;

decrement.addEventListener('click', clickDown);

   function clickDown(){
    counter -= 1;  
    value.textContent = counter;
};

increment.addEventListener('click', () => {
    counter += 1;
    value.textContent = counter;
});