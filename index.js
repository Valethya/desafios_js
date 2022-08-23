alert("Todos los dias estamos rodeados de comida, desde que nos levantamos hasta que nos vamos a la cama, las reuniones sociales son entorno a ello y aun asi la mayoria de las cosas con referente a la comida, la nutricion las desconocemos, siendo un factor tan importante en nuestra salud tanto fisica como psicologica.\nEntonces, tu, cuanto sabes sobre nutricion?")

let correctas=0
let option=""

//pregunta uno

    while((option!="a")&&(option!="b")&&(option!="c"))
{
 option=prompt("Las zanahorias son naranjas, porque contienen:\na) Antocianina.\nb) Betacaroteno\nc) Clorofila")
option=option.toLowerCase()
    if((option!="a")&&(option!="b")&&(option!="c")){
        alert("ingresa una opcion valida")
    }
    else{
        if(option="b"){
            correctas+=1
        }
        else{correctas+=0}
    }
}

//pregunta dos

option=""
    while((option!="a")&&(option!="b")&&(option!="c"))
{
 option=prompt("En que categoria se encuentra el mani:\na) Leguminosas.\nb) Fruto seco.\nc) semillas.")
option=option.toLowerCase()
    if((option!="a")&&(option!="b")&&(option!="c")){
        alert("ingresa una opcion valida")
    }
    else{
        if(option="a"){
            correctas+=1
        }
        else{correctas+=0}
    }
}

//preguntas tres

option=""
    while((option!="a")&&(option!="b")&&(option!="c"))
{
 option=prompt("El arroz es un cereal con proteina la cual se puede mejorar sirviendola con:\na) Frutas.\nb) Verduras.\nc) Legumbres.")
option=option.toLowerCase()
    if((option!="a")&&(option!="b")&&(option!="c")){
        alert("ingresa una opcion valida")
    }
    else{
        if(option="c"){
            correctas+=1
        }
        else{correctas+=0}
    }
}

//pregunta cuatro

option=""
    while((option!="a")&&(option!="b")&&(option!="c"))
{
 option=prompt("Cuales son las vitaminas liposolubles(que son solubles en grasas ):\na) A,C,D,B6.\nb) K,D,E,A.\nc) P,C,B12.")
option=option.toLowerCase()
    if((option!="a")&&(option!="b")&&(option!="c")){
        alert("ingresa una opcion valida")
    }
    else{
        if(option="b"){
            correctas+=1
        }
        else{correctas+=0}
    }
}

//pregunta cinco

option=""
    while((option!="a")&&(option!="b")&&(option!="c"))
{
 option=prompt("La vitamina B9 es mejor conocida como:\na) Acido folico.\nb) Tiamina.\nc)Nicina.")
option=option.toLowerCase()
    if((option!="a")&&(option!="b")&&(option!="c")){
        alert("ingresa una opcion valida")
    }
    else{
        if(option="a"){
            correctas+=1
        }
        else{correctas+=0}
    }
}


//pregunta seis

option=""
    while((option!="a")&&(option!="b")&&(option!="c"))
{
 option=prompt("Cuales de los siguientes alimentos te ayudan a prevenir el colesterol:\na) Carnes rojas.\nb) Avena.\nc) Mantequilla.")
option=option.toLowerCase()
    if((option!="a")&&(option!="b")&&(option!="c")){
        alert("ingresa una opcion valida")
    }
    else{
        if(option="b"){
            correctas+=1
        }
        else{correctas+=0}
    }
}


//pregunta siete

option=""
    while((option!="a")&&(option!="b")&&(option!="c"))
{
 option=prompt("Los carbohidratos aportan a las kcal totales de la dieta entre un:\na) 10-15%.\nb) 25-30%.\nc) 55-50%.")
option=option.toLowerCase()
    if((option!="a")&&(option!="b")&&(option!="c")){
        alert("ingresa una opcion valida")
    }
    else{
        if(option="c"){
            correctas+=1
        }
        else{correctas+=0}
    }
}

//pregunta ocho

option=""
    while((option!="a")&&(option!="b")&&(option!="c"))
{
 option=prompt("Los lipidos aportan a las kcal totales de la dieta entre un:\na) 10-15%.\nb) 45-50%.\nc) 20-30%.")
option=option.toLowerCase()
    if((option!="a")&&(option!="b")&&(option!="c")){
        alert("ingresa una opcion valida")
    }
    else{
        if(option="c"){
            correctas+=1
        }
        else{correctas+=0}
    }
}

//pregunta nueves

option=""
    while((option!="a")&&(option!="b")&&(option!="c"))
{
 option=prompt("Las proteina aportan a las kcal totales de la dieta entre un:\na) 20-40%.\nb) 10-15%.\nc) 55-65%.")
option=option.toLowerCase()
    if((option!="a")&&(option!="b")&&(option!="c")){
        alert("ingresa una opcion valida")
    }
    else{
        if(option="b"){
            correctas+=1
        }
        else{correctas+=0}
    }
}


//pregunta once

option=""
    while((option!="a")&&(option!="b")&&(option!="c"))
{
 option=prompt("El hierro es absorbido de mejor forma acompañado de :\na) vitamina C.\nb) vitamina A.\nc) Fosforo.")
option=option.toLowerCase()
    if((option!="a")&&(option!="b")&&(option!="c")){
        alert("ingresa una opcion valida")
    }
    else{
        if(option="a"){
            correctas+=1
        }
        else{correctas+=0}
    }
}

alert("Has conseguido "+correctas+" respuestas correctas")
/*quizz de cultura y era!!!!
pregunta multiples... una correcta, se van sumando las correctas y luego al final se le da una nota
determinado por la cantidad de respuestas correctas, de este modo no me caliento la cabeza y sigo avanzando en esta pobre y triste vida ...(chora)*/