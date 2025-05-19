/*const buttonIds = ['plus', 'minus', 'multi', 'divi', 'procent'];
buttonIds.forEach(buttonId => {
    document.getElementById(buttonId).addEventListener('click', calculate);
});

function calculate() {
    let num1 =
    +document.getElementById('num1').value;
    let num2 =
    +document.getElementById('num2').value;

let operatorId = this.id;
let operator;
}*/


let memory = [];
// Objekt, das die Operationen definiert
const operations = {
    '+': (num1, num2) => num1 + num2,
    '-': (num1, num2) => num1 - num2,
    '*': (num1, num2) => num1 * num2,
    '/': (num1, num2) => (num2 !== 0) ? num1 / num2 : "Fehler!!!",
    '%': (num1, num2) => (num1 * num2) / 100
};

// Event-Listener für jeden Button hinzufügen
document.getElementById('plus').addEventListener('click', function() {
    calculate('+');
});
document.getElementById('minus').addEventListener('click', function() {
    calculate('-');
});
document.getElementById('multi').addEventListener('click', function() {
    calculate('*');
});
document.getElementById('divi').addEventListener('click', function() {
    calculate('/');
});
document.getElementById('procent').addEventListener('click', function(){
    calculate('%');
})
document.getElementById('reset').addEventListener('click', function() {
    memory = [];
    location.reload();
});



// Funktion zur Berechnung und Anzeige des Ergebnisses
function calculate(operator) {
    // Werte aus den Input-Feldern lesen
    let num1 = +document.getElementById('num1').value;
    let num2 = +document.getElementById('num2').value;

 if (isNaN(num1) || isNaN(num2)) {
        alert('Bitte geben Sie gültige Zahlen ein.');
        return;
    }

    // Ergebnis berechnen
    let result = operations[operator](num1, num2);

      // Ergebnis anzeigen
    document.getElementById('result').textContent = result;

    
    //um ergebnisse zu speichern
    memory.push(result);
}

document.getElementById('recall').addEventListener('click', recall);

    //funktion Abrufen des zuletzt gespeicherten Ergebnisses
    function recall() {
        console.log('recall funktion wird aufgerufen');
        if (memory.length > 0) {
            let lastResult = memory[memory.length - 1];

            document.getElementById('result').textContent = lastResult;
        } else {
            document.getElementById('result'). textContent = 'keine vorherigen Ergebnisse';
        }
        }
    

