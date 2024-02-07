//gerar número aleatório e guardar numa variável
var numAleatorio = Math.floor(Math.random() * (20 - 10 + 1) + 10);
console.log(numAleatorio);

do {
    // prompt usuário pedindo para adivinhar o número
    var numUsuario = Number(prompt("adivinhe um número de 10 a 20"));
} while(numAleatorio !== numUsuario);
alert("Parabéns, você acertou o número: " + numAleatorio);
//enquanto os números forem diferentes, pede novamente para o usuário