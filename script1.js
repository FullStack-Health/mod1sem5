var idade = prompt("Qual sua idade?");

var par = "Par";
var impar = "Ímpar";
let teste = "teste";
const dataNascimento = "25/02/1991";
//dataNascimento = "01/03/1992";

function parOuImpar(numero) {
    alert(teste);
    if (numero % 2 === 0) {
        return par;
    } else {
        return impar;
    }
}

alert("Usuário tem "+ idade + " anos de idade, que é um número " + parOuImpar(idade));


function soma(a, b) {
    return a+b;
}

if (soma(5,7) % 2 === 0) {
    alert("é par");
} else {
    alert("é ímpar");
}

var x = 1;
var y = x;

x = 3;

alert("x = " + x);
alert("y = " + y);