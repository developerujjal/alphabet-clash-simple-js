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
    let random = Math.round(randomAlphabet);
    let randomValue = alphabets[random];
    console.log(randomValue)
    return randomValue;
}


function addBgColor(elementId){
    let element = document.getElementById(elementId);
    element.style.backgroundColor = "#FFA500";
}