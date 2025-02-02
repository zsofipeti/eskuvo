document.addEventListener("DOMContentLoaded", function () {
    const countdownElement = document.getElementById("days");
    const weddingDate = new Date("2025-06-27").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeDifference = weddingDate - now;
        
        let daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        daysRemaining = daysRemaining < 0 ? 0 : daysRemaining;

        countdownElement.textContent = daysRemaining;
    }
    
    updateCountdown();
    setInterval(updateCountdown, 86400000);
});