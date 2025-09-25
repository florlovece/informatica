function calcular() {
    // Pedimos la edad
    let numero1 = prompt("Ingresa su edad:");
    // Convertimos los valores de texto a número
    numero1 = Number(numero1);
    // Validamos que sean números
    if (!isNaN(numero1) >= 18 ) {
    alert("Permitido");
    } else {
    alert("Denegado");
    }
    }