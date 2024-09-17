var tomb = [3,6,8];

var kiiras = document.getElementById("kiiras");

function ElsoElemKi(){
    let ki = "";
    ki = "A tömb első eleme: "+ tomb[0];
    kiiras.innerHTML = ki;
}

function MasodikElemKi(){
    let ki = "";
    ki = "A tömb második eleme: "+ tomb[1];
    kiiras.innerHTML = ki;
}
function HarmadikElemKi(){
    let ki = "";
    ki = "A tömb harmadik eleme: "+ tomb[2];
    kiiras.innerHTML = ki;
}

function OsszegElemKi(){
    let ki = "";
    ki = "A tömb elemei: "+ tomb;
    kiiras.innerHTML = ki;
}

function ElemHozzaad(){
    let ki = "";
    let ujElem= document.getElementById("ujElem").value;
    if(ujElem == "" || ujElem == " ")
    {
        ki = "Ilyen elemet nem lehet hozzáadni"
        kiiras.innerHTML = ki;
    }else{
        tomb.push(ujElem);
        ujElem = "";
        OsszegElemKi()
    }
    
}
function TombHossz(){
    let ki = "";
    ki = "A tömb "+ tomb.length +" elemből áll";
    kiiras.innerHTML = ki;
}
function ElemTorol(){
    let ki = "";
    let torlendoIndex= document.getElementById("indexTorol").value ;
    if(torlendoIndex == "" || torlendoIndex == " " || parseInt(torlendoIndex) > tomb.length)
    {
        ki = "Hibás index"
        kiiras.innerHTML = ki;
        torlendoIndex = ""
        
    }else{
        tomb.splice(torlendoIndex-1,1);
        torlendoIndex = "";
        OsszegElemKi()
        torlendoIndex = ""
    }
}