let frase = ["Oi", "sumido", "tudo", "bem?", "saudades", "kk"]

let fraseFinal

for (let palavra of frase) {
    if (fraseFinal) {
        fraseFinal = `${fraseFinal} ${palavra}`
    } else {
        fraseFinal = palavra
    }
}

console.log(fraseFinal)
