/* Desarrolla un programa usando JavaScript y siendo ejecutado desde HTML en el navegador, que permita a partir de tres números enteros indicar:
(2 puntos cada apartado)

a. Si son todos diferentes.
b. Si son todos iguales.
c. El mayor.
d. El menor.
e. La media entre ellos (suma de todos, dividida entre la cantidad de números). */

var n1 = parseInt(window.prompt("Introduce el primer numero"));
var n2 = parseInt(window.prompt("Introduce el segundo numero"));
var n3 = parseInt(window.prompt("Introduce el tercer numero"));


function sonDiferentes() {
  if (n1 != n2 && n1 != n3 && n2 != n3) {
    console.log("Los tres numeros son diferentes");
  } else console.log("No los tres numeros son diferentes");
}

sonDiferentes();

//b. Si son todos iguales.

function sonIguales() {
  if (n1 == n2 && n1 == n3 && n2 == n3) {
    console.log("Los tres numeros son iguales");
  } else console.log("Los tres numeros no son iguales");
}
sonIguales();

// c. El mayor.

function mayor() {
  if ((n1 > n2 && n1 > n3) || (n2 == n3 == n3)) {
    console.log("El mayor es el " + n1);
  } else if (n2 >= n1 && n2 > n3) {
    console.log("El mayor es el " + n2);
  } else console.log("El mayor es el " + n3);
}
mayor();

//d. El menor.

function menor() {
  if ((n1 < n2 && n1 < n3) || (n2 == n3 == n3)){
    console.log("El menor es el " + n1);
  } else if (n2 <= n1 && n2 < n3) {
    console.log("El menor es el " + n2);
  } else console.log("El menor es el " + n3);
}
menor();

//e. La media entre ellos (suma de todos, dividida entre la cantidad de números).

function media() {
  console.log("La media de los tres numeros es: " + (n1 + n2 + n3) / 3);
}
media();
