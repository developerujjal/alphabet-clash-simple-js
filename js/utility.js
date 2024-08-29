function addHidden(elmentId){
    let element = document.getElementById(elmentId);
    element.classList.add("hidden");
   
}


function removeHidden(elementId){
    let element = document.getElementById(elementId);
    element.classList.remove("hidden");

}


function setAlphabets(){
    let alphabetString = "abcdefghijklmnopqrstuvwxyz";
    let alphabets = alphabetString.toUpperCase().split("");
    
    let randomAlphabet = Math.random() * alphabets.length;
    let random = Math.floor(randomAlphabet);
    let randomValue = alphabets[random];
    return randomValue;
}


function addBgColor(elementId){
    let element = document.getElementById(elementId);
    element.classList.add("bg-color-box");
}


function addInnerText(elementId){
    let element = document.getElementById(elementId);
    let elementText = element.innerText;
   return elementText;
}


function addInnerTextToNumber(elementId){
    let element = document.getElementById(elementId);
    let elementText = element.innerText;
    let elementValue = parseInt(elementText);
    return elementValue;
}

function removeColor(elementId){
    let element = document.getElementById(elementId);
    element.classList.remove("bg-color-box");

}


function showScore(elementId, value){
    let element = document.getElementById(elementId);
    element.innerText = value;
}