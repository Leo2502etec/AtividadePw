function VerificadorSenha(senha) {
    if (senha.length > 8 && senha !== "12345678") {
        return true
    } else {
        return false
    }
}

console.log(VerificadorSenha("12345678")) 
