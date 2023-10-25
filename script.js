// EXO 1
function updateText() {
  let inputTextSurname = document.getElementById("Surname").value;
  let inputTextName = document.getElementById("Name").value;
  let inputTextAge = parseInt(document.getElementById("Age").value);

  document.getElementById("output1").innerText =
    "Bienvenue !" +
    "\n" +
    "Votre Prenom est : " +
    inputTextSurname +
    "\n" +
    "Votre Nom est : " +
    inputTextName +
    "\n" +
    "Vous avez : " +
    inputTextAge +
    " ans";
}

// EXO 2

function updateText2() {
  let inputTextSentence = document.getElementById("Text").value;

  document.getElementById("output2").innerText =
    "Votre phrase: " +
    "''" +
    inputTextSentence +
    "''. " +
    " Fait " +
    inputTextSentence.length +
    " characteres";
}

// EXO 3

//  ESSAIE AVEC IF/ELSE FONCTIONNEL

// function updateText3() {
//   let inputTextAge2 = parseInt(document.getElementById("Age2").value);
//   let output3 = document.getElementById("output3");

//   function minMaxAge(min, max) {
//     return inputTextAge2 >= min && inputTextAge2 <= max;
//   }

//   if (minMaxAge(0, 18)) {
//     output3.textContent =
//       "A " + inputTextAge2 + " ans, vous n'etes pas encore majeur.";
//   } else if (minMaxAge(18, 49)) {
//     output3.textContent =
//       "A " + inputTextAge2 + " ans, vous etes majeur mais pas encore senior.";
//   } else if (minMaxAge(50, 59)) {
//     output3.textContent =
//       "A " + inputTextAge2 + " ans, vous etes senior mais pas encore retraite.";
//   } else if (minMaxAge(60, 120)) {
//     output3.textContent =
//       "A " +
//       inputTextAge2 +
//       " ans, vous etes retraite, profitez de votre temps libre !";
//   } else {
//     output3.textContent = "Âge invalide petit malin !";
//   }
// }

//  ESSAIE AVEC SWITCH FONCTIONNEL ET INTERESSANT

function updateText3() {
  let inputTextAge2 = parseInt(document.getElementById("Age2").value);
  let output = document.getElementById("output3");

  function minMaxAge(min, max) {
    return inputTextAge2 >= min && inputTextAge2 <= max;
  }

  switch (true) {
    case minMaxAge(0, 17):
      output.textContent = `A ${inputTextAge2} ans, vous n'etes pas encore majeur.`;
      break;
    case minMaxAge(18, 49):
      output.textContent = `A ${inputTextAge2} ans, vous etes majeur mais pas encore senior.`;
      break;
    case minMaxAge(50, 59):
      output.textContent = `A ${inputTextAge2} ans, vous etes senior mais pas encore retraite.`;
      break;
    case minMaxAge(60, 120):
      output.textContent = `A ${inputTextAge2} ans, vous etes retraite, profitez de votre temps libre !`;
      break;
    default:
      output.textContent = "Âge invalide petit malin !";
  }
}

// EXO 4

function updateText4() {
  let compareOne = parseInt(document.getElementById("Compare1").value);
  let compareTwo = parseInt(document.getElementById("Compare2").value);
  let output4 = document.getElementById("output4");

  if (compareOne === compareTwo) {
    output4.textContent =
      "les nombres" + compareOne + " et " + compareTwo + " sont egaux.";
  } else {
    output4.textContent =
      "les nombres" + compareOne + " et " + compareTwo + " ne sont pas egaux.";
  }
}

// EXO 5 & 6

function updateText5() {
  const inputTextScore = parseInt(document.getElementById("Score").value);
  let output5 = document.getElementById("output5");

  function minMaxScore(min, max) {
    return inputTextScore >= min && inputTextScore <= max;
  }

  if (isNaN(inputTextScore)) {
    output5.textContent = "Ce n'est pas un nombre.";
  } else if (minMaxScore(0, 59)) {
    output5.textContent = "Insuffisant.";
  } else if (minMaxScore(60, 69)) {
    output5.textContent = "Suffisant.";
  } else if (minMaxScore(70, 79)) {
    output5.textContent = "Bien.";
  } else if (minMaxScore(80, 89)) {
    output5.textContent = "Tres bien !";
  } else if (minMaxScore(90, 100)) {
    output5.textContent = "Excellent !";
  } else {
    output5.textContent = "Note invalide !";
  }
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

// let msg = "courage";

// console.log(msg.substring(3, 0));
// console.log(msg.lastIndexOf("e"));

// console.log(msg.charAt(msg.length - 1));

// let nb = "5";
// let message = "niveau bas";
// if (nb !== 5) {
//   message = "niveau max";
// }

// console.log(message);
// console.log(nb);

// let somme = 0;
// for (let n = 1; n <= 10; n++) {
//   somme++;
//   console.log(somme);
// }

// let somme = 0;
// let n = 0;
// while (somme < 1000) {
//   n++;
//   somme += n;
//   console.log(n, somme);
// }

function updateText6() {
  let output = document.getElementById("output6");
  let valeur = -1;
  let passage = 0;

  while (passage < 10) {
    valeur++;
    passage++;
    output.innerHTML += `x stock la valeur ${valeur} lors du passage  n${passage} dans la boucle<br/>`;
  }
}

function updateText7() {
  let output = document.getElementById("output7");
  let valeur = -1;
  let passage = 0;

  while (passage < 10) {
    valeur++;
    passage++;
    output.innerHTML += `x stock la valeur ${valeur} lors du passage  n${passage} dans la boucle <br/>`;
  }
}

// function updateText8() {
//   let output = document.getElementById("output8");

//   for (i = 0; i < 1; i++) {
//     let result = "";
//     for (j = 1; j < 11 - i; j++) {
//       result += 1;
//       output.innerHTML += result + "<br/>";
//     }
//   }
// }

function updateText8() {
  let output = document.getElementById("output8");
  let number = document.getElementById("lines").value;
  let letter = document.getElementById("letter").value;
  output.innerHTML = "";

  if (number > 25) {
    output.innerHTML = "Le nombre de ligne ne voit pas exceder 25";
  } else if (letter.length > 1) {
    output.innerHTML = "Un seul caractere requis";
  } else {
    for (i = 0; i < 1; i++) {
      let result = "";
      for (let j = 0; j < number - i; j++) {
        result += letter;
        output.innerHTML += result + "<br/>";
      }
    }
  }
}

function refreshInput() {
  const output = document.getElementById("output9");

  let buttonAddition = document.getElementById("buttonAddition");
  let buttonMultipy = document.getElementById("buttonMultipy");
  let buttonSquare = document.getElementById("buttonSquare");
  let buttonDivide = document.getElementById("buttonDivide");
  let buttonCircumference = document.getElementById("buttonCircumference");

  buttonAddition.addEventListener("click", additionFunction);
  buttonMultipy.addEventListener("click", multiplyFunction);
  buttonSquare.addEventListener("click", squareFunction);
  buttonDivide.addEventListener("click", divideFunction);
  buttonCircumference.addEventListener("click", circumferenceFunction);

  function getNumber() {
    number1 = Number(document.getElementById("number1Exo11").value);
    number2 = Number(document.getElementById("number2Exo11").value);
    return;
  }

  function clear() {
    document.getElementById("number1Exo11").value = "";
    document.getElementById("number2Exo11").value = "";
    return;
  }

  function addition(x1, x2) {
    return x1 + x2;
  }
  function multiply(x1, x2) {
    return x1 * x2;
  }
  function square(x1) {
    return x1 * x1;
  }
  function divide(x1, x2) {
    return x1 / x2;
  }

  function circumference(x1, x2) {
    return x1 * Math.PI * x2;
  }

  function additionFunction() {
    getNumber();
    addition();
    output.innerText =
      number1 + " + " + number2 + " = " + addition(number1, number2);
    clear();
  }

  function multiplyFunction() {
    getNumber();
    multiply();
    output.innerText =
      number1 + " x " + number2 + " = " + multiply(number1, number2);
    clear();
  }

  function squareFunction() {
    getNumber();
    multiply();
    output.innerText = number1 + " au carre = " + square(number1);
    clear();
  }

  function divideFunction() {
    getNumber();
    divide();
    output.innerText =
      number1 + " / " + number2 + " = " + divide(number1, number2);
    clear();
  }

  function circumferenceFunction() {
    getNumber();
    multiply();
    output.innerText =
      " Circonference de " +
      number1 +
      " par le rayon " +
      number2 +
      " " +
      circumference(number1, number2);
    clear();
  }
}
refreshInput();

// const table1 = [12, 45, 47, 83];

// const output12 = document.getElementById("output12");
// let buttonSearch = document.getElementById("buttonSearch");
// buttonSearch.addEventListener("click", updateText13);

// function tablesearchIn(x1, x2) {
//   if (x1 <= x2.length) {
//     table1.indexOf(x1);
//     output12.innerText = "Valeur " + x2[x1] + " a l'index " + x1 + ".";
//   } else {
//     output12.innerText = "Pas de valeur avec cet indice dans la table.";
//   }
// }

// let elt = Number(document.getElementById("numberExo12"));
const output13 = document.getElementById("output13");
let buttonValidate = document.getElementById("buttonValidate13");
buttonValidate.addEventListener("click", updateText13);

let refTable = [];

function getFocus() {
  let elt = document.getElementById("numberExo13");
  elt.focus();
}

let input = document.getElementById("numberExo13");
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("buttonValidate13").click();
  }
});

function updateText13() {
  if (refTable.length <= 5) {
    let elt = Number(document.getElementById("numberExo13").value);
    refTable.push(elt);
    console.log(refTable);
    document.getElementById("numberExo13").value = "";
    getFocus();
    output13.innerText = refTable;
  }
  for (i = 0; refTable.length == 5; i++) {
    output13.innerText = refTable.reverse();
    return;
  }
}

let buttonReset = document.getElementById("buttonReset13");
buttonReset.addEventListener("click", resetText13);
function resetText13() {
  refTable = [];
  output13.innerText = refTable;
}
