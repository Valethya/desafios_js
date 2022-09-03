alert("cuanto sabes sobre nutricion?");

let correctas = 0;
let option = "";
let answer = [];
// funcion

function evaluate(option, correct, question) {
  if (option != "a" && option != "b" && option != "c") {
    alert("ingresa una opcion valida");
  } else {
    if (option == correct) {
      alert("la respuesta es correcta");
      correctas += 1;
    } else {
      alert("respuesta incorrecta");
      answer.push(
        "\nEn la pregunta " +
          question +
          " has respondido " +
          option +
          " y la respuesta correcta es " +
          correct
      );
    }
  }
}

//pregunta uno

while (option != "a" && option != "b" && option != "c") {
  option = prompt(
    "Las zanahorias son naranjas, porque contienen:\na) Antocianina.\nb) Betacaroteno\nc) Clorofila"
  );
  option = option.toLowerCase();
  let question = "1";
  evaluate(option, "b", question);
}

//pregunta dos

option = "";
while (option != "a" && option != "b" && option != "c") {
  option = prompt(
    "En que categoria se encuentra el mani:\na) Leguminosas.\nb) Fruto seco.\nc) semillas."
  );
  option = option.toLowerCase();
  let question = "2";
  evaluate(option, "a", question);
}

//preguntas tres

option = "";
while (option != "a" && option != "b" && option != "c") {
  option = prompt(
    "El arroz es un cereal con proteina la cual se puede mejorar sirviendola con:\na) Frutas.\nb) Verduras.\nc) Legumbres."
  );
  option = option.toLowerCase();
  let question = "3";
  evaluate(option, "c", question);
}

//pregunta cuatro

option = "";
while (option != "a" && option != "b" && option != "c") {
  option = prompt(
    "Cuales son las vitaminas liposolubles(que son solubles en grasas ):\na) A,C,D,B6.\nb) K,D,E,A.\nc) P,C,B12."
  );
  option = option.toLowerCase();
  let question = "4";
  evaluate(option, "b", question);
}

//pregunta cinco

option = "";
while (option != "a" && option != "b" && option != "c") {
  option = prompt(
    "La vitamina B9 es mejor conocida como:\na) Acido folico.\nb) Tiamina.\nc)Nicina."
  );
  option = option.toLowerCase();
  let question = "5";
  evaluate(option, "a", question);
}

//pregunta seis

option = "";
while (option != "a" && option != "b" && option != "c") {
  option = prompt(
    "Cuales de los siguientes alimentos te ayudan a prevenir el colesterol:\na) Carnes rojas.\nb) Avena.\nc) Mantequilla."
  );
  option = option.toLowerCase();
  let question = "6";
  evaluate(option, "b", question);
}

//pregunta siete

option = "";
while (option != "a" && option != "b" && option != "c") {
  option = prompt(
    "Los carbohidratos aportan a las kcal totales de la dieta entre un:\na) 10-15%.\nb) 25-30%.\nc) 55-50%."
  );
  option = option.toLowerCase();
  let question = "7";
  evaluate(option, "c", question);
}

//pregunta ocho

option = "";
while (option != "a" && option != "b" && option != "c") {
  option = prompt(
    "Los lipidos aportan a las kcal totales de la dieta entre un:\na) 10-15%.\nb) 45-50%.\nc) 20-30%."
  );
  option = option.toLowerCase();
  let question = "8";
  evaluate(option, "c", question);
}

//pregunta nueves

option = "";
while (option != "a" && option != "b" && option != "c") {
  option = prompt(
    "Las proteina aportan a las kcal totales de la dieta entre un:\na) 20-40%.\nb) 10-15%.\nc) 55-65%."
  );
  option = option.toLowerCase();
  let question = "9";
  evaluate(option, "b", question);
}

//pregunta once

option = "";
while (option != "a" && option != "b" && option != "c") {
  option = prompt(
    "El hierro es absorbido de mejor forma acompañado de :\na) vitamina C.\nb) vitamina A.\nc) Fosforo."
  );
  option = option.toLowerCase();
  let question = "10";
  evaluate(option, "a", question);
}

alert("Has conseguido " + correctas + " respuestas correctas");
alert("aqui tienes una correccion:" + answer.toString());
