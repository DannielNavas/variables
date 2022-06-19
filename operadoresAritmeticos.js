// suma
let sum = 2 + 2;
console.log(sum);
// resta
let rest = 2000 - 3 - 4 - 3;
console.log(rest);
// multiplicacion
let mult = 2 * 2;
console.log(mult);
// division
let div = 10 / 2;
console.log(div);

// con parentesis
let div2 = 10 / 2 - 2;
// 5 - 2;
// = 3
console.log(div2);

// concatenar
console.log("Concatenar es asi de facil :D " + div2);

let x = 1;
let y = ++x;
// let y = 3 + x;
console.log(y);
console.log(x);

// operador typeof

let dato1 = "Hola";
console.log(typeof dato1);
let dato2 = 2;
console.log(typeof dato2);
let dato3 = true;
console.log(typeof dato3);
let dato4 = {};
console.log(typeof dato4);
let dato5 = [];
console.log(typeof dato5);

// operador boolean
// Negacion
console.log(!true);
console.log(!false);

console.log(!!false); //-> falso = true = false

// operador igualdad o identidad

// ==
// ===

"3" == 3; //-> true identidad debil
"3" === 3; //-> false identidad fuerte
3 === 3; //-> true identidad fuerte
"hola" === "hola"; //-> true identidad fuerte

"3" !== 3; //-> false identidad fuerte
// ! = = -> identidad fuerte
// ! = ->  identidad debil

console.log(true === false); // true es igual a false
console.log(true !== false); // true es diferente false

// operador de comparacion

console.log(5 > 3);
console.log(5 > 5);
console.log(5 < 3);
console.log(5 >= 3);
console.log(5 >= 5);
console.log(5 <= 5);

// operadores logicos

// operador AND
console.log(true && true); // izquierda es verdadero  Y lo de la  derecha es verdadero?
console.log(true && false);
console.log(5 === 5 && "Hola" === "Hola");
console.log(5 === 6 && "Hola" === "Hola");

// operador OR

console.log(true || true); // izquierda es verdadero O lo de la  derecha es verdadero?
console.log(true || false);

console.log(5 === 6 || "Hola" === "Hola");
console.log(5 === 5 || "Hola" === "Hola");
console.log(5 === 4 || "Hola" === "HolX");
