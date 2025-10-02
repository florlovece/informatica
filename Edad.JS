function calcular() {
    // Pedimos la edad
    let numero1 = prompt("Ingresa su edad:");
    // Convertimos los valores de texto a número
    let edad = Number(numero1);
    // Validamos que sean números
    if (edad > 17 ) {
    alert("Permitido");
    } else {
    alert("Denegado");
    }
    }