let dodajDatum = document.getElementById("dodajDatum");
let toDoVsebina = document.getElementById("toDoVsebina");
let dodajPolje = document.getElementById("dodajPolje");
let ustvarjeniElementi = [];


function add() {
    let text = dodajPolje.value;
    let datum = dodajDatum.value;
    let element = document.createElement("div");
    element.innerHTML = `

<div class="d-flex bd-highlight p-3 mt-4 shadow border border-1 rounded-3">

  <div class="p-2 flex-grow-1 bd-highlight"><h2 id="precrtano${ustvarjeniElementi.length}">* ${text}</h2></div>
  <div class="p-2 bd-highlight">
  <button class="btn btn-danger" onclick="odstraniElement(${ustvarjeniElementi.length})">Odstrani</button>
  </div>
  <div class="p-2 bd-highlight">
  <button class="btn btn-success" onclick="opravilElement(${ustvarjeniElementi.length})">Opravljeno</button>
  </div>
</div>
<div class="d-flex flex-row-reverse bd-highlight">
  <div class="pt-3 bd-highlight border-bottom border-danger">
  <p id="dodajDatum">Dodano: ${datum}</p>
</div>
</div>

`;
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
    document.getElementById("dodajDatum").value = "";
}