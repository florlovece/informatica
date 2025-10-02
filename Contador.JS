let timeLeft = 15;   
const timerDisplay = document.getElementById('timer');
const messageDisplay = document.getElementById('message');
timerDisplay.textContent = timeLeft;
function updateCountdown() {
    if (timeLeft <= 0) {
        clearInterval(countdownInterval); 
        messageDisplay.textContent = "¡Misión cumplida!";
        timerDisplay.style.color = "#28a745"; 
        timerDisplay.style.borderColor = "#28a745"; 
        return;
    }
    timeLeft -= 1; 
    timerDisplay.textContent = timeLeft;
}
const countdownInterval = setInterval(updateCountdown, 1000); 
console.log("Contador iniciado desde " + timeLeft + " segundos.");