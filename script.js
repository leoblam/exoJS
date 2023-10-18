let num = 23;
let txt = aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa;
let tmp = 0;

// EXO 1
function updateText() {
    let inputTextSurname = document.getElementById("Surname").value;
    let inputTextName = document.getElementById("Name").value;
    let inputTextAge = document.getElementById("Age").value;

    document.getElementById("output1").innerText = ("Bienvenue !" + "\n" + "Votre Prenom est: " + inputTextSurname +  "\n" +"Votre Nom est: " + inputTextName +  "\n" +"Vous avez: " + inputTextAge+"ans");
}

// EXO 2



function updateText2() {
    let inputTextSentence = document.getElementById("Text").value;

    document.getElementById("output2").innerText = ("Votre phrase: " + "''"+inputTextSentence+"''. " +  " Fait " + inputTextSentence.length +  " characteres");
}


// EXO 3


function updateText3() {
    let inputTextAge2 = parseInt(document.getElementById("Age2").value);

    if (inputTextAge2 >= 1 && inputTextAge2 <= 17) {
        document.getElementById("output3").textContent = "Vous n'etes pas encore majeur.";
    } else if (inputTextAge2 >= 18 && inputTextAge2 <= 49) {
        document.getElementById("output3").textContent = "Vous etes majeur mais pas encore senior.";
    } else if (inputTextAge2 >= 50 && inputTextAge2 <= 59) {
        document.getElementById("output3").textContent = "Vous etes senior mais pas encore retraite.";
    } else if (inputTextAge2 >= 60 && inputTextAge2 <= 120) {
        document.getElementById("output3").textContent = "Vous etes retraite, profitez de votre temps libre !";
    } else {
        document.getElementById("output3").textContent = "Âge invalide petit malin !";
    }
}

// EXO 4

function updateText4() {
    let compareOne = parseInt(document.getElementById("Compare1").value);
    let compareTwo = parseInt(document.getElementById("Compare2").value);

    if (compareOne === compareTwo) {
        document.getElementById("output4").textContent = "les nombres" + compareOne + " et " + compareTwo + " sont egaux." ;
    } else{
        document.getElementById("output4").textContent = "les nombres" + compareOne + " et " + compareTwo + " ne sont pas egaux.";
    }
}

// EXO 5 & 6


function updateText5() {
    let inputTextScore = parseInt(document.getElementById("Score").value);

    if (isNaN(inputTextScore)) {
        document.getElementById("output5").textContent = "Ce n'est pas un nombre.";
      } else if
    (inputTextScore >= 0 && inputTextScore <= 59) {
        document.getElementById("output5").textContent = "Insuffisant.";
    } else if (inputTextScore >= 60 && inputTextScore <= 69) {
        document.getElementById("output5").textContent = "Suffisant.";
    } else if (inputTextScore >= 70 && inputTextScore <= 79) {
        document.getElementById("output5").textContent = "Bien.";
    } else if (inputTextScore >= 80 && inputTextScore <= 89) {
        document.getElementById("output5").textContent = "Tres bien !";
    } else if (inputTextScore >= 90 && inputTextScore <= 100) {
        document.getElementById("output5").textContent = "Excellent !";
    } else {
        document.getElementById("output5").textContent = "Note invalide !";
    }
}