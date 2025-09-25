function calcular() {
    // Pedimos los dos números
    let numero1 = prompt("Ingresa su primer nota:");
    let numero2 = prompt("Ingresa su segunda nota:");
    let numero3 = prompt("Ingresa su tercera nota:");
    // Convertimos los valores de texto a número
    numero1 = Number(numero1);
    numero2 = Number(numero2);
    numero3 = Number(numero3);
    // Validamos que sean números
    if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero3) > 6 ) {
    alert("Aprobado");
    } else {
    if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero3) < 6 ) 
    alert("Desaprobado");
    }
    }