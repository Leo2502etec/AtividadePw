function AlertaTemperatura(temp) {
    if (temp < 10) {
        return "Alerta de Frio"
    } else if (temp >= 10 && temp <= 25) {
        return "Temperatura Ideal"
    } else {
        return "Alerta de Calor"
    }
}

console.log(AlertaTemperatura(27))
