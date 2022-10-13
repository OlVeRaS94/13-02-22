//let coche = 'Volkswagen';

console.log(suma(3, 4));


//diHolaMundo('');


function printTexto(texto = 'hola mundo', num1, num2) {
  console.log(texto);
  return num1 + num2;

}


//operacion vs expresion vs sentencia

//let nuevoTexto = 'a'+'b'; //let es una expresion y a+b operacion

//function expresion
let imprimeTexto = printTexto;

imprimeTexto('Hola toni');
printTexto('Hola Toni');

let suma = function (num1,num2){
  return num1 + num2;
};

function suma2(num1, num2) {
  return num1 + num2;
  
}



