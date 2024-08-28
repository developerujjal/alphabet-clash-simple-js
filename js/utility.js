function addHidden(elmentId){
    let element = document.getElementById(elmentId);
    element.classList.add("hidden");
    return element;
}



function removeHidden(elementId){
    let element = document.getElementById(elementId);
    element.classList.remove("hidden");
    return element;
}


function setAlphabets(elementId){
    let alphabetString = "abcdefghijklmnopqrstuvwxyz";
    let alphabets = alphabetString.toUpperCase().split("");
    
    let randomAlphabet = Math.random() * alphabets.length;
    let random = Math.round(randomAlphabet);
    let randomValue = alphabets[random];
    
    let elementText = document.getElementById(elementId);
    elementText.innerText = randomValue;
}