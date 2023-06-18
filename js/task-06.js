const input = document.querySelector('#validation-input');

function onImputChange(event) {
   
    const inputEl = event.currentTarget.value.trim().length;
    
    if (inputEl === Number(input.getAttribute('data-length'))){
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }  
}

input.addEventListener('blur', onImputChange);