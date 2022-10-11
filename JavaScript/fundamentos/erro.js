function tratarErrorELacar(erro) {
    // throw new Error('...')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obgj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErrorELacar(e)
    } finally {
        console.log('final')
    }
}

const obj = { name: 'Lucas' }
imprimirNomeGritado(obj)