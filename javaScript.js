/*  AULA SOBRE LABEL
var x = 0;
var z = 0;

labelCancelaLaco: while(true) {
    console.log("Laço exterior: " + x);
    x += 1;
    z = 1;
    while(true) {
        z += 1;
        if (z === 10 && x === 10) {
            break labelCancelaLaco;
        } else if (z === 10) {
            break;
        }
    }
}
*/

/* AULA SOBRE FUNÇÕES
var a = function(num){
    return num/2;
}
document.write('<br>' + a(20));

var b = (num) => {
    return num*3;
}
document.write('<br>' + b(3));
*/

/* OPERADORES UNÁRIO
Operador Virgula
for (var i=0, j=9; i<= 9; i++, j--)
    console.log("a[" + i + "][" + j + "]=" + a[i][j]);
*/

/* CLOSURES
var pet = function(nome) {
    var getNome = function(){
        return nome;
    }
    return getNome;
}
myPet = pet("Vivie");
myPet();
*/

/* ARGUMENTO DE FUNÇÃO - OBJETO DE PARAMETRO
Pra quando não se sabe quantos parametros vai receber
function myConcat(separador) {
    var result = "", i;
    for (i = 1; i < arguments.length, i++) {
        result += arguments[i] + separador;
    }
    return document.write(result);
}
myConcat(",", "red", "orange", "blue");
//---------------------------------------------------------
function multiplicar (multiplicador, ...args) {
    return args.map(x >= multiplicador * x);
}
var arr = multiplicar(2,1,2,3);
console.log(arr); //[2, 4, 6]
*/

/* PARAMETRO DE FUNÇÃO
Para quando não for passado o parametro, ele vai receber um valor
function multiplicar(a, b=1) {
    return a*b;
}
document.write(multiplicar(5));
*/

/* EXEMPLOS DA FUNÇÃO MATH
Math.PI;
Math.sin(1.56);
Math.abs(-32);
Math.tan(147);
Math.pow(2,3);
Math.exp(6);
Math.log10(32);
Math.floor(562);
Math.ceil(973);
Math.random();
Math.round(7);
Math.trunc(87);
Math.sqrt(49);
*/

/* EXEMPLOS DA FUNÇÃO DATE
var a = Date(); //Recebe a data e horario atual
var b = new Date('17 de Janeiro de 2019, 08:23:10');
var c = new Date('01/01/2001');
*/

/* TRABALHANDO COM STRINGS
var a = 'teste'
var b = new String('teste')
a.length //5 - Mas se perde o objeto resultado
b.length //5 - Mas você ainda possui acesso ao objeto resultado
a.charAt(2) //s - Valor correspondente ao indice
a.indexOf('s') //2 - Indice correspondente ao valor
a.startsWith('t') //true - A string começa com o valor 't'
a.endsWith('te') //true - A string termina com o valor 'te'
a.concat(' nova') //teste nova - Concatena a string no final
a.toUpperCase() //TESTE - Retorna a string com letra maiuscula
a.toLowerCase() //teste - Retorna a string com letra minuscula
a.slice(3,4) //t - extrai uma seção da string e retorna uma nova string
*/

/* TEMPLATE DE STRING
var a = 5;
var b = 10;
console.log(`Quinze é ${a + b} e\nnão ${2 * a + b}.`)
//Quinze é 15 e
//não 20.
*/

/* ARRAYS
var arr = [1, 2, 3, 4, 'String', Array[2]];
var a = arr.length;
var obj = {nome: 'Gregory', idade = 28, cursos: ['Python', 'Django', 'Py2Web']}
arr[3] = 'Novo valor';
arr.forEach(function(c){alert("Valor atual é: " + c)})

a = [1,3,5];
b = [2,4,6];
c = [a,b];

for (var i = 0; i <= c.length; i++){
    for (var j = 0; j <= c.length; j++){
        document.write(c[i][j]);
    }
}
*/
