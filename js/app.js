const startButton = document.getElementById("start-button");
const inputs = document.querySelectorAll("input");
const completionText = document.getElementById("completion-text");

startButton.addEventListener("click", () => {
    const endDateInput = document.getElementById("end-date-input").value;
    const endDate = new Date(endDateInput).getTime();

    if (!isNaN(endDate)) {
        startCountdown(endDate);
    }
});

function startCountdown(endDate) {
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const diff = endDate - now;

        if (diff <= 0) {
            clearInterval(interval);
            completionText.textContent = "Countdown Completed!";
            inputs.forEach(input => (input.value = "0"));
            return;
        }

        inputs[1].value = Math.floor(diff / (1000 * 60 * 60 * 24));
        inputs[2].value = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        inputs[3].value = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        inputs[4].value = Math.floor((diff % (1000 * 60)) / 1000);

    }, 1000);
}
