/**
 * Inicia el juego de adivinanza.
 * El número secreto se define en el código.
 */
function iniciarJuego() {
    // 1. Número Secreto definido en el código
    const NUMERO_SECRETO = 7; // <-- ¡Este es el número que el usuario debe adivinar!

    // 2. Pedimos la adivinanza al usuario
    let adivinanza = prompt("He pensado en un número secreto del 1 al 10. ¿Cuál crees que es?");

    // 3. Validar si el usuario canceló el prompt
    if (adivinanza === null) {
        alert("Juego cancelado. ¡Vuelve a intentarlo cuando quieras!");
        return;
    }

    // 4. Convertimos el valor de texto a número entero
    // Usamos parseInt() para que la comparación sea numérica
    const intento = parseInt(adivinanza);

    // 5. Validamos que el intento sea un número
    if (!isNaN(intento)) {
        // 6. Comparamos la respuesta con el número secreto
        if (intento === NUMERO_SECRETO) {
            // Mensaje de acierto
            alert(`FELICIDADES El número secreto era ${NUMERO_SECRETO}.`);
        } else {
            // Mensaje de fallo
            let mensaje = `Incorrecto No has acertado.`;
            mensaje += `\nEl número secreto era ${NUMERO_SECRETO}.`;
            alert(mensaje);
        }
}
}