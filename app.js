const convertBtn = document.querySelector('#convert-btn');
const celcius = document.querySelector('#cel-fah');
const Fahrenheit = document.querySelector('#fah-cel');
const tempInput = document.querySelector('#text-input');
const result = document.querySelector('#result')


convertBtn.addEventListener('click', () => {
    const inputValue = parseFloat(tempInput.value);

    if(isNaN(inputValue)) {
        result.textContent = "Please enter a valid temperature"
        return;
    }

    if (celcius.checked) {
        const newTemp = (inputValue * (9/5)) - 32
        result.textContent = `${newTemp.toFixed(1)}F`
    }
    else if (Fahrenheit.checked) {
        const newTemp = (inputValue - 32) * 5/9
        result.textContent = `${newTemp.toFixed(1)}C`
    }
});