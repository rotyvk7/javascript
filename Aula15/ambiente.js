let num = [5, 8, 2, 9, 3, 4]
num.push(1)
num.sort()
console.log(num)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`Nosso vetor tem ${num.length} posições`)
let pos = num.indexOf(8)

    if (pos == -1) {
        console.log(`Esse valor não existe`)
    } else {
        console.log(`O valor 8 está na posição ${pos}`)
    }
