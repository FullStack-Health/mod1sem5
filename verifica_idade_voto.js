let idade = parseInt(prompt("Qual a sua idade?"));

function verificaIdadeParaVotar(idade) {
    if (idade < 16) {
        return "Não pode votar.";
    } else if ((idade >= 16 && idade < 18) || idade >= 60) {
        return "Pode votar."
    } else {
        return "Obrigatório votar."
    }
}

alert(verificaIdadeParaVotar(idade));

