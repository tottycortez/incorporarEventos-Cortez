//Evento
let evento1 = document.getElementById('evento1');
let evento2 = document.getElementById('evento2');
//Calcular
let calcular = document.getElementById('calcular');
//numero
let numero = document.getElementById('numero');

numero.addEventListener('click', click);
numero.addEventListener('keydown', keydown)

function click() {
    evento1.innerText = 'Aquí debe ingresar su monto'
}

function keydown() {
    evento1.innerText = 'Usted esta ingresando el monto a calcular...'
}

//Boton enviar
calcular.addEventListener('click', calculo);

function calculo() {
    let costo1 = numero.value / 1;
    let costo2 = numero.value / 2;
    let costo3 = numero.value / 3;
    let costo4 = numero.value / 4;
    let costo5 = numero.value / 5;
    let costo6 = numero.value / 6;
    let costo7 = numero.value / 7;
    let costo8 = numero.value / 8;
    let costo9 = numero.value / 9;
    let costo10 = numero.value / 10;
    let costo11 = numero.value / 11;
    let costo12 = numero.value / 12;

    evento2.innerHTML = `<h1>Financiar $ ${numero.value}:</h1>
    <ul>
        <li> 1 cuotas de $ ${costo1}</li>
        <li> 2 cuotas de $ ${costo2}</li>
        <li> 3 cuotas de $ ${costo3}</li>
        <li> 4 cuotas de $ ${costo4}</li>   
        <li> 5 cuotas de $ ${costo5}</li>   
        <li> 6 cuotas de $ ${costo6}</li>
        <li> 7 cuotas de $ ${costo7}</li>   
        <li> 8 cuotas de $ ${costo8}</li>   
        <li> 9 cuotas de $ ${costo9}</li>   
        <li> 10 cuotas de $ ${costo10}</li>   
        <li> 11 cuotas de $ ${costo11}</li>   
        <li> 12 cuootas de $ ${costo12}</li>
    </ul>`
}