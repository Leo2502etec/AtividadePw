function TelefoneSimples(numero) {
    let parte1 = numero.slice(0, 4)
    let parte2 = numero.slice(4, 8)

    return parte1 + "-" + parte2
}

console.log(TelefoneSimples("940028922"))
