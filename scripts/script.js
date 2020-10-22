// JavaScript Document
var dropDownTrigger =
document.getElementById("dropdowntrigger");

var dropDown =
document.getElementById("dropdown");

var trigger2 =
document.getElementById("trigger2");

var dropImg =
document.getElementById("dropimg");

dropDownTrigger.addEventListener("click", Activeer);
trigger2.addEventListener("click", Activeer);

function Activeer() {
    console.log("test");
    dropDown.classList.toggle("drop");
    trigger2.classList.toggle("actief");
    dropDownTrigger.classList.toggle("active");
}

var navschuif =
document.getElementById("schuifnav")

var wijnen =
document.getElementById("wijnenknop");

wijnen.addEventListener("click", Schuif)

var terug =
document.getElementById("terug");

terug.addEventListener("click", Schuif)


function Schuif() {
    navschuif.classList.toggle("schuif");
}

var filternav =
document.getElementById("filteren");

var filterbutton=
document.getElementById("filterbutton");

var filterknop =
document.getElementById("filters");

filterknop.addEventListener("click", openFilter);

filterbutton.addEventListener("click", openFilter);

function openFilter() {
    filternav.classList.toggle("filterschuif");
}
