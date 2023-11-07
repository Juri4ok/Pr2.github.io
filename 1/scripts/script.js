chas = document.getElementById("chas");
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

    chas.value = hours + ":" + minutes + ":" + seconds;
    setTimeout(updateTime, 1000);
}

updateTime();