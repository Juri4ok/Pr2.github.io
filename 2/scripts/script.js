let timer = 0;
const updateMessage = document.getElementById("updateMessage");
function addLeadingZero(value) {
    if (value < 10) {
        return "0" + value;
    }
    return value.toString();
}

function updateTime() {
    let time = new Date();
    const hours = addLeadingZero(time.getHours());
    const minutes = addLeadingZero(time.getMinutes());
    const seconds = addLeadingZero(time.getSeconds());

    timer += 1
    if (timer % 30 === 0) {
        document.getElementById("time").textContent = `${hours}:${minutes}:${seconds}`;
        updateMessage.style.display = "block";

        // Сховати попередження через 5 секунд
        setTimeout(() => {
            updateMessage.style.display = "none";
        }, 5000);
    }
}

updateTime();
setInterval(updateTime, 1000);