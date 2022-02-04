let vnesenTextToDo = false;
let vnos = false;
let vneseno = "";



// doda `potreben je vpis!...`
function dodaj() {
    if ( vnos === false) {
        let noviHtml = `<p><input type="checkbox"> ${vneseno}
            <div class="float-end">
                <img src="media/edit.png" alt="Bootstrap" width="25" height="25">
                    <img src="media/delete.png" alt="Bootstrap" width="25" height="25">
            </div></p>`;
        document.getElementById("display").innerHTML += noviHtml;
    } else if (vnos === true){
        let celotenHtml = `Potreben je vpis! Prosim, da vpišete To Do Listo!<br>`;
        document.getElementById("display2").innerHTML += celotenHtml;
    }
}


// izbriše vse
function clearAll (){
    document.getElementById("display").innerHTML = "";
}