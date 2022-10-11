function getInteiroAletorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

do {
    opcao = getInteiroAletorioEntre(-1, 10)
    console.log(`Opção escolhido foi ${opcao}.`)
} while (opcao != -1)

console.log('Até a proxima!')