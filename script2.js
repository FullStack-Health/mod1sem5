
var listaDeCarros = ['uno', 'clio', 'sandero', 'fiesta', 'voyage'];
console.log(listaDeCarros);

console.log(listaDeCarros.sort());

var elementoRemovido = listaDeCarros.pop();
console.log("listaDeCarros.pop()");
console.log("Removido o elemento " + elementoRemovido);
console.log(listaDeCarros);
listaDeCarros.shift();
console.log("listaDeCarros.shift()");
console.log(listaDeCarros);

console.log("o array possui " + listaDeCarros.length + " elementos.");

console.log("posição de fusca na lista: " + listaDeCarros.indexOf("fusca"));
console.log("posição de sandero na lista: " + listaDeCarros.indexOf("sandero"));


var anosDeCopa = [2022, 2018, 2014, 2010, 2006, 2002, 1998];

console.log(anosDeCopa[anosDeCopa.length-1]);

console.log(anosDeCopa);

anosDeCopa.push(1994);

console.log(anosDeCopa);
console.log(anosDeCopa[anosDeCopa.length-1]);

anosDeCopa.unshift(2026);
console.log("anosDeCopa.unshift()");
console.log(anosDeCopa);

console.log(anosDeCopa.sort());


anosDeOlimpiadasSeculo21 = [2004, 2008, 2012, 2016, 2020];
console.log(anosDeOlimpiadasSeculo21);
anosDeOlimpiadasSeculo20 = [2000, 1996, 1992, 1988, 1984];
anosDeOlimpiadasSeculo20.sort();
console.log(anosDeOlimpiadasSeculo20);

anosDeOlimpiadas = anosDeOlimpiadasSeculo20.concat(anosDeOlimpiadasSeculo21);
console.log(anosDeOlimpiadas);
console.log(anosDeOlimpiadasSeculo20);
console.log(anosDeOlimpiadasSeculo21);

console.log(anosDeOlimpiadas.includes(2003));

console.log(anosDeOlimpiadas.slice(3, 7));

console.log(anosDeOlimpiadas.join("-"));

console.log("percorrendo a lista usando while");
var cont = 0;
while (cont < anosDeOlimpiadas.length) {
    console.log(anosDeOlimpiadas[cont++]);
    //cont++;
}

console.log("agora usando for, imprimindo invertido:");

for (let i = anosDeOlimpiadas.length - 1; i >= 0; i--) {
    console.log(anosDeOlimpiadas[i]);
}

console.log("percorrendo a lista com forEach:");
anosDeOlimpiadas.forEach(ano => console.log(ano));
