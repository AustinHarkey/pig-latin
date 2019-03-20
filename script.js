let input = document.querySelector('.input');
let submit = document.querySelector('.submit');
let output = document.querySelector('.output');

submit.addEventListener('click', function() {
    let splitInput = input.value.split("");
    let reverseInput = splitInput.reverse("");
    let finalOutput = reverseInput.join("");
    output.innerHTML = finalOutput;
});