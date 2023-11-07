document.addEventListener("DOMContentLoaded", function () {
    const startPrintingButton = document.getElementById("startPrintingButton");

    startPrintingButton.addEventListener("click", startPrinting);

    function startPrinting() {
        const userInput = document.getElementById("userInput").value;
        const outputDiv = document.getElementById("output");
        outputDiv.innerHTML = ''; // Очистити вміст виводу

        let index = 0;
        const interval = 100; // Інтервал між виведенням символів (в мілісекундах)

        const printInterval = setInterval(() => {
            if (index < userInput.length) {
                outputDiv.innerHTML += userInput.charAt(index);
                index++;
            } else {
                clearInterval(printInterval); // Зупинити інтервал, якщо всі символи виведено
            }
        }, interval);
    }
});
