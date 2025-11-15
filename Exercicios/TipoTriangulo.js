function tipoTriangulo(L1, L2, L3) {
    if (L1 == L2 && L2 == L3) {
        return "Equilátero"
    } else if (L1 == L2 || L1 == L3 || L2 == L3) {
        return "Isósceles"
    } else {
        return "Escaleno"
    }
}

console.log(tipoTriangulo(5, 5, 5))  
console.log(tipoTriangulo(5, 5, 3))   
console.log(tipoTriangulo(4, 5, 6))  

