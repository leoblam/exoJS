let num = 23;
let txt = aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa;
let tmp = 0;

// EXO 1
function updateText() {
    let inputTextSurname = document.getElementById("Surname").value;
    let inputTextName = document.getElementById("Name").value;
    let inputTextAge = parseInt(document.getElementById("Age").value);

    document.getElementById("output1").innerText = ("Bienvenue !" + "\n" + "Votre Prenom est : " + inputTextSurname +  "\n" +"Votre Nom est : " + inputTextName +  "\n" +"Vous avez : " + inputTextAge+" ans");
}

// EXO 2

function updateText2() {
    let texte ="Je suis en distanciel aujourd’hui";
    document.getElementById("output2").innerText = te


}

function updateText2() {
    let inputTextSentence = document.getElementById("Text").value;

    document.getElementById("output2").innerText = ("Votre phrase: " + "''"+inputTextSentence+"''. " +  " Fait " + inputTextSentence.length +  " characteres");
}


// EXO 3


function updateText3() {
    let inputTextAge2 = parseInt(document.getElementById("Age2").value);
    let output3 = document.getElementById("output3")

    function minMaxAge(min, max) {
        return(inputTextAge2 >= min && inputTextAge2 <= max)
    } 

    if (minMaxAge(0, 18)) {
        output3.textContent = "A "+inputTextAge2 +" ans, vous n'etes pas encore majeur.";
    } else if (minMaxAge(18, 49)) {
        output3.textContent = "A "+inputTextAge2 +" ans, vous etes majeur mais pas encore senior.";
    } else if ((minMaxAge(50, 59))) {
        output3.textContent = "A "+inputTextAge2 +" ans, vous etes senior mais pas encore retraite.";
    } else if ((minMaxAge(60, 120))) {
        output3.textContent = "A "+inputTextAge2 +" ans, vous etes retraite, profitez de votre temps libre !";
    } else {
        output3.textContent = "Âge invalide petit malin !";
    }
}
//  ESSAIE AVEC SWITCH NON FONCTIONNEL MAIS INTERESSANT


// function updateText3() {
//     let inputTextAge2 = parseInt(document.getElementById("Age2").value);
//     let output = document.getElementById("output3")
//     let mineur = inputTextAge2 >= 1 && inputTextAge2 <= 17;
//     let majeur = inputTextAge2 >= 18 && inputTextAge2 <= 49;
//     let senior = inputTextAge2 >= 50 && inputTextAge2 <= 59;
//     let retraite = inputTextAge2 >= 60 && inputTextAge2 <= 120;


//     switch (inputTextAge2) {
//         case mineur:
//             output.textContent = "A ${inputTextAge2}  ans, vous n'etes pas encore majeur.";
//             break;
//         case majeur:
//             output.textContent = "A ${inputTextAge2}  ans, vous n'etes pas encore majeur.";
//             break;
//         case senior:
//             output.textContent = "A ${inputTextAge2}  ans, vous n'etes pas encore majeur.";
//             break;
//         case retraite:
//             output.textContent = "A ${inputTextAge2}  ans, vous n'etes pas encore majeur.";
//             break;
//         default:
//             output.textContent = "Âge invalide petit malin !";
//     }
// }
//

// EXO 4

function updateText4() {
    let compareOne = parseInt(document.getElementById("Compare1").value);
    let compareTwo = parseInt(document.getElementById("Compare2").value);
    let output4 = document.getElementById("output4")

    if (compareOne === compareTwo) {
        output4.textContent = "les nombres" + compareOne + " et " + compareTwo + " sont egaux." ;
    } else{
        output4.textContent = "les nombres" + compareOne + " et " + compareTwo + " ne sont pas egaux.";
    }
}

// EXO 5 & 6


const inputTextScore = parseInt(document.getElementById("Score").value);


function updateText5() {
    let output5 = document.getElementById("output5")


    if (isNaN(inputTextScore)) {
        output5.textContent = "Ce n'est pas un nombre.";
    } else if(minMaxScore(0,59)) {
        output5.textContent = "Insuffisant.";
    } else if(minMaxScore(60,69)) {
        output5.textContent = "Suffisant.";
    } else if(minMaxScore(70,79)) {
        output5.textContent = "Bien.";
    } else if(minMaxScore(80,89)) {
        output5.textContent = "Tres bien !";
    } else if(minMaxScore(90,100)) {
        output5.textContent = "Excellent !";
    } else {
        output5.textContent = "Note invalide !";
    }
}

function minMaxScore(min, max) {
    return(inputTextScore >= min && inputTextScore <= max)
} 

// PREMIERE METHODE PLUS LONGUE


// function updateText5() {
//     let inputTextScore = parseInt(document.getElementById("Score").value);


//     if (isNaN(inputTextScore)) {
//         document.getElementById("output5").textContent = "Ce n'est pas un nombre.";
//       } else if (inputTextScore >= 0 && inputTextScore <= 59) {
//         document.getElementById("output5").textContent = "Insuffisant.";
//     } else if (inputTextScore >= 60 && inputTextScore <= 69) {
//         document.getElementById("output5").textContent = "Suffisant.";
//     } else if (inputTextScore >= 70 && inputTextScore <= 79) {
//         document.getElementById("output5").textContent = "Bien.";
//     } else if (inputTextScore >= 80 && inputTextScore <= 89) {
//         document.getElementById("output5").textContent = "Tres bien !";
//     } else if (inputTextScore >= 90 && inputTextScore <= 100) {
//         document.getElementById("output5").textContent = "Excellent !";
//     } else {
//         document.getElementById("output5").textContent = "Note invalide !";
//     }
// }
//