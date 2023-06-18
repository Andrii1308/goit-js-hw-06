const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
}
  
function onImputChange(event) {
    refs.output.textContent = event.currentTarget.value.trim();
    if (!event.currentTarget.value) {
        refs.output.textContent = 'Anonymous';
    }        
};

refs.input.addEventListener('input', onImputChange);