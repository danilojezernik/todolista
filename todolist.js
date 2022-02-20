let dodajToDo = document.getElementById("dodajToDo");
let toDoVsebina = document.getElementById("toDoVsebina");
let dodajPolje = document.getElementById("dodajPolje");
let ustvarjeniElementi = [];


function add() {
    let text = dodajPolje.value;
    let element = document.createElement("div");
    element.innerHTML = `
<div class="d-flex bd-highlight p-2 mb-3 shadow border border-1 rounded-3">
  <div class="p-2 flex-grow-1 bd-highlight"><h2 id="precrtano${ustvarjeniElementi.length}">${text}</h2></div>
  <div class="p-2 bd-highlight"><button class="btn btn-danger" onclick="odstraniElement(${ustvarjeniElementi.length})">Odstrani</button></div>
  <div class="p-2 bd-highlight"><button class="btn btn-success" onclick="opravilElement(${ustvarjeniElementi.length})">Opravljeno</button></div>
</div>`;
    toDoVsebina.appendChild(element);
    ustvarjeniElementi.push(element);
    reset();
}

function odstraniElement(mestoElementa) {
    let element = ustvarjeniElementi[mestoElementa];
    element.remove();
}

function opravilElement(mestoElementa) {
    let precrtano = document.getElementById(`precrtano${mestoElementa}`);
    precrtano.style.cssText = `text-decoration: line-through;`;
}

// izbriše vse
function clearAll() {
    toDoVsebina.innerHTML = "";
    ustvarjeniElementi = [];
}

function reset() {
    document.getElementById("dodajPolje").value = "";
}