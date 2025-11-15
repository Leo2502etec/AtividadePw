function podeDirigir(idade) {
    if (idade >= 18) {
        return 'Pode ser habilitado(a)'
    } else {
        return 'Ainda não pode'
    }
}

console.log(podeDirigir(75))
