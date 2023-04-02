let startBtn = document.getElementById("startBtn");
let fromUserInput = document.getElementById("fromUserInput");
let toUserInput = document.getElementById("toUserInput");
let counterText = document.getElementById("counterText");

startBtn.onclick = function() {
    let fromUserInputValue = parseInt(fromUserInput.value);
    let toUserInputValue = parseInt(toUserInput.value);
    if (fromUserInputValue === "") {
        alert("Enter the from Value");
        return;
    }
    if (toUserInputValue === "") {
        alert("Enter the to Value");
        return;
    }
    let counter = fromUserInputValue;
    counterText.textContent = fromUserInputValue;
    let intervalId = setInterval(function() {
        if (fromUserInputValue < toUserInputValue) {
            counter = counter + 1;
            counterText.textContent = counter;
        } else {
            clearInterval(intervalId);
        }
    }, 1000);
}