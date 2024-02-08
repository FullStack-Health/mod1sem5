// let dataAtual = new Date();
// let mes = dataAtual.getMonth();
// mes = 12;

function defineMes(data) {
    let mesAtual = data.getMonth();
    mesAtual++;

    switch (mesAtual) {
        case 1:
            return "Janeiro";
        case 2:
            return "Fevereiro";
        case 3:
            return "Março";
        case 4:
            return "Abril";
        case 5:
            return "Maio";
        case 6:
            return "Junho";
        case 7:
            return "Julho";
        case 8:
            return "Agosto";
        case 9:
            return "Setembro";
        case 10:
            return "Outubro";
        case 11:
            return "Novembro";
        case 12:
            return "Dezembro";
        default:
            return "Não foi possível identificar o mês";
    }
}

console.log("Mês atual: " + defineMes(new Date()));
