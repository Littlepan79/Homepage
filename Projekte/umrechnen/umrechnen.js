function lbsinkg(){
    let umr = document.querySelector("#number").value;
    var umr3 = "2.20462";
    var umr2 = umr / umr3;
    document.getElementById("ausgabe").innerHTML = Math.floor(umr2) + "  Kg";
}
function kginlbs(){
    let umr = document.querySelector("#number").value;
    var umr3 = "2.20462";
    var umr2 = umr * umr3;
    document.getElementById("ausgabe").innerHTML = Math.floor(umr2) + "  lbs";
}
function literinkg(){
    let umr = document.querySelector("#number").value;
    var umr3 = "1.21";
    var umr2 = umr * umr3;
    document.getElementById("ausgabe").innerHTML = Math.floor(umr2) + "  kg";
}
function kginliter(){
    let umr = document.querySelector("#number").value;
    var umr3 = "1.21";
    var umr2 = umr / umr3;
    document.getElementById("ausgabe").innerHTML = Math.floor(umr2) + "  Liter";
}