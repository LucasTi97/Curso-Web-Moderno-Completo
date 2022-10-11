const qauseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' }
console.log(qauseArray)
Object.defineProperty(qauseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(qauseArray[0])

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(qauseArray.toString(), meuArray)