let lastResult = '';
let history = [];

function clearScreen() {
    document.getElementById("calculator-screen").value = "";
}

function deleteLast() {
    let screen = document.getElementById("calculator-screen");
    screen.value = screen.value.slice(0, -1);
}

function appendToScreen(value) {
    if (value === 'Ans') {
        document.getElementById("calculator-screen").value += lastResult;
    } else {
        document.getElementById("calculator-screen").value += value;
    }
}

function calculate() {
    let screen = document.getElementById("calculator-screen");
    try {
        lastResult = eval(screen.value);
        screen.value = lastResult;
        history.push(screen.value);
    } catch (e) {
        screen.value = "Error";
    }
}

function calculateSquareRoot() {
    let screen = document.getElementById("calculator-screen");
    try {
        lastResult = Math.sqrt(eval(screen.value));
        screen.value = lastResult;
        history.push(`√${screen.value}`);
    } catch (e) {
        screen.value = "Error";
    }
}

function showHistory() {
    let historyContainer = document.getElementById("history");
    historyContainer.innerHTML = '';
    if (history.length === 0) {
        historyContainer.innerHTML = '<p>No history</p>';
    } else {
        history.forEach(item => {
            let historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            historyItem.textContent = item;
            historyContainer.appendChild(historyItem);
        });
    }
    historyContainer.style.display = historyContainer.style.display === 'none' ? 'block' : 'none';
}