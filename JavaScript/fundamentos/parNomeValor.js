// par nome/valor
const saudacao = 'Opa' // contexto lexico 1
console.log(saudacao)

function exec() {
    const saudacao = 'Falaaa' //contexto lexico 2
    return saudacao    
}

console.log(exec())

// Objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(cliente)