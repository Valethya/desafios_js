alert("cuanto sabes sobre nutricion?");

let correctas = 0;
let option = "";

// funcion

function evaluate(option, correct) {
  if (option != "a" && option != "b" && option != "c") {
    alert("ingresa una opcion valida");
  } else {
    if (option == correct) {
      correctas += 1;
      alert("la respuesta es correcta");
    } else {
      alert("respuesta incorrecta");
    }
  }
}

//pregunta uno

while (option != "a" && option != "b" && option != "c") {
  option = prompt(
    "Las zanahorias son naranjas, porque contienen:\na) Antocianina.\nb) Betacaroteno\nc) Clorofila"
  );
  option = option.toLowerCase();
  evaluate(option, "b");
}

//pregunta dos

option = "";
while (option != "a" && option != "b" && option != "c") {
  option = prompt(
    "En que categoria se encuentra el mani:\na) Leguminosas.\nb) Fruto seco.\nc) semillas."
  );
  option = option.toLowerCase();
  evaluate(option, "a");
}

//preguntas tres

option = "";
while (option != "a" && option != "b" && option != "c") {
  option = prompt(
    "El arroz es un cereal con proteina la cual se puede mejorar sirviendola con:\na) Frutas.\nb) Verduras.\nc) Legumbres."
  );
  option = option.toLowerCase();
  evaluate(option, "c");
}

//pregunta cuatro

option = "";
while (option != "a" && option != "b" && option != "c") {
  option = prompt(
    "Cuales son las vitaminas liposolubles(que son solubles en grasas ):\na) A,C,D,B6.\nb) K,D,E,A.\nc) P,C,B12."
  );
  option = option.toLowerCase();
  evaluate(option, "b");
}

//pregunta cinco

option = "";
while (option != "a" && option != "b" && option != "c") {
  option = prompt(
    "La vitamina B9 es mejor conocida como:\na) Acido folico.\nb) Tiamina.\nc)Nicina."
  );
  option = option.toLowerCase();
  evaluate(option, "a");
}

//pregunta seis

option = "";
while (option != "a" && option != "b" && option != "c") {
  option = prompt(
    "Cuales de los siguientes alimentos te ayudan a prevenir el colesterol:\na) Carnes rojas.\nb) Avena.\nc) Mantequilla."
  );
  option = option.toLowerCase();
  evaluate(option, "b");
}

//pregunta siete

option = "";
while (option != "a" && option != "b" && option != "c") {
  option = prompt(
    "Los carbohidratos aportan a las kcal totales de la dieta entre un:\na) 10-15%.\nb) 25-30%.\nc) 55-50%."
  );
  option = option.toLowerCase();
  evaluate(option, "c");
}

//pregunta ocho

option = "";
while (option != "a" && option != "b" && option != "c") {
  option = prompt(
    "Los lipidos aportan a las kcal totales de la dieta entre un:\na) 10-15%.\nb) 45-50%.\nc) 20-30%."
  );
  option = option.toLowerCase();
  evaluate(option, "c");
}

//pregunta nueves

option = "";
while (option != "a" && option != "b" && option != "c") {
  option = prompt(
    "Las proteina aportan a las kcal totales de la dieta entre un:\na) 20-40%.\nb) 10-15%.\nc) 55-65%."
  );
  option = option.toLowerCase();
  evaluate(option, "b");
}

//pregunta once

option = "";
while (option != "a" && option != "b" && option != "c") {
  option = prompt(
    "El hierro es absorbido de mejor forma acompañado de :\na) vitamina C.\nb) vitamina A.\nc) Fosforo."
  );
  option = option.toLowerCase();
  evaluate(option, "a");
}

alert("Has conseguido " + correctas + " respuestas correctas");
