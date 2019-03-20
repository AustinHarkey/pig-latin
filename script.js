let input = document.querySelector('.input');
let submit = document.querySelector('.submit');
let output = document.querySelector('.output');
let vowels = ['a', 'e', 'i', 'o', 'u'];

submit.addEventListener('click', function() {
    let outputString;
    
    if(firstLetter == 'a' || firstLetter == 'e' || firstLetter == 'i' || firstLetter == 'o' || firstLetter == 'u') {
        outputString = input.value + '-ay';
        console.log(outputString);
    } else {
        let inputSplit = input.value.split("");
        let firstLetter = inputSplit.shift();
    }
    

    // console.log(inputSplit);
    // console.log(firstLetter);
    
});