let htmlHiddenWord = document.getElementById("hidden");
let htmlMessage = document.getElementById("message");
let htmlLetterInput = document.getElementById("letter");
let htmlWrongLetters = document.getElementById("wrongLetters");

let displayHiddenWord = "";
let displayWrongLetters = "";

let words = "";

let randomNumber = 0;
let randomWord = 0;

let hiddenWord = [];
let testedLetters = [];
let wrongLetters = [];


htmlLetterInput.addEventListener("keyup",checkletter ,false);

if(randomWord === 0) {
    words = ["siggi", "finnur", "gaman", "keila", "forritun"];

    randomNumber = math.floor(math.random() * words.length);

    randomWord = words[randomNumber];

    for (let i = 0;i < randomWord.length; i++) {
        hiddenWord.push("_");
        if(i === randomWord.length-1) {
            displayHiddenWord = hiddenWord.toString();
            htmlHiddenWord.textContent = displayHiddenWord;
            console.log(hiddenWord);
            console.log(randomWord);
        }
    }
}

function checkletter() {
    if(testedLetters.includes(htmlLetterInput.value);
    htmlMessage.textContent = "Búin að prófa þennan staf";
    htmlLetterInput.value = "";

else{
    htmlMessage.textContent = "";
    testedLetters.push(htmlLetterInput.value);
    testedLetters.sort();
    if(randomWord.includes(htmlLetterInput.value)){
        for (let i=0;i<randomWord.length;i++){
            if(randomWord[i] === htmlLetterInput.value){
                hiddenWord[i] = htmlLetterInput.value;
            }
            if (i===hiddenWord.length-1) {
                displayHiddenWord = hiddenWord.toString();
                htmlHiddenWord.textContent = displayHiddenWord;
                htmlLetterInput.value = "";
            }
        }
    }else{
        wrongLetters.push(htmlLetterInput.value);
        wrongLetters.sort();
        displayWrongLetters = wrongLetters.toString();
        htmlWrongLetters.textContent = displayWrongLetters;
        htmlLetterInput.value = "";
    }
}