document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.getElementById("playButton");
    const resultElement = document.getElementById("result");

    playButton.addEventListener("click", playGame);

    function playGame() {
        const betAmount = parseFloat(document.getElementById("betAmount").value);
        const randomNumber = Math.floor(Math.random() * 11) - 5;

        setTimeout(() => {
            if (randomNumber <= 0) {
                resultElement.textContent = "Ви програли свою ставку.";
            } else {
                const winnings = betAmount * randomNumber;
                resultElement.textContent = `Ви виграли ${winnings} гривень!`;
            }
        }, 1000);
    }
});