function CalculadoraMedia(N1, N2) {
    let media = (N1 + N2) / 2

    if (media >= 7) {
        return "Aprovado"
    } else {
        return "Reprovado"
    }
}

console.log(CalculadoraMedia(2, 4))
