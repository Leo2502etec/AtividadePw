function GeradorNome(pessoa) {
    return pessoa.primeiroNome + " " + pessoa.sobrenome
}

console.log(GeradorNome({ primeiroNome: "João", sobrenome: "Vitor" }))
