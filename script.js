let input = document.querySelector('.input');
let submit = document.querySelector('.submit');
let output = document.querySelector('.output');
let vowels = ['a', 'e', 'i', 'o', 'u'];

submit.addEventListener('click', function() {
    let outputString;
    let inputSplit = input.value.split("");
    let firstLetter = inputSplit.shift();

    // if it starts with a vowel 
    if(firstLetter == 'a' || firstLetter == 'e' || firstLetter == 'i' || firstLetter == 'o' || firstLetter == 'u') {
        outputString = input.value + '-ay';
        output.innerText = outputString;
    } else {   
        outputString = inputSplit.join('') + '-' + firstLetter + 'ay';
        output.innerText = outputString;
    }
});