var Régime
var Jours 
var date 
var heure
var Lundi = 0
var Mardi = 0 
var Mercredi = 0
var Jeudi = 0
var Vendredi = 0
var ext = "EXTERNE LIBRE"
var dmps = "DEMI PENSIONNAIRE"
var PP
var Sjrs 


//heure et date 

function affichZero(nombre) {

    return nombre < 10 ? '0' + nombre : nombre;
    }
    function dateEtHeure() {

    
    let cejour = new Date();
    let options = {weekday: "long", year: "numeric", month: "long", day: "2-digit"};
    let date = cejour.toLocaleDateString("fr-FR", options);

    const infos = new Date();
     

     
    document.getElementById('heure_exacte').innerHTML = date + " " + "-" + ' ' + affichZero(infos.getHours()) + ':' + affichZero(infos.getMinutes()) + ":" + affichZero(infos.getSeconds());
    }
     

    window.onload = function() {
    setInterval("dateEtHeure()", 100);
    };



function Lundi1()
{
    if (Lundi == 0){

        Lundi = 1

    }else{
        Lundi = 0
    }
        
}
function Mardi1()
{
    if (Mardi == 0){

        Mardi = 1

    }else{
        Mardi = 0
    }}
function Mercredi1()
{
    if (Mercredi == 0){

        Mercredi = 1

    }else{
        Mercredi = 0
    }
}
function Jeudi1()
{
    if (Jeudi == 0){

        Jeudi = 1

    }else{
        Jeudi = 0
    }
}
function Vendredi1()
{
    if (Vendredi == 0){

        Vendredi = 1

    }else{
        Vendredi = 0
    }
}


function Generer()
{
    //Nom et Prénom
    var Prénom = document.getElementById("Prénom1").value;
    var Nom = document.getElementById("Nom1").value;
	var PN = Prénom + " " + Nom
    var paragraphe1 = document.getElementById("PrénomNom"); 
    paragraphe1.innerHTML = PN
    
    //Classe
    var Classe = document.getElementById("Classe1").value;
    var paragraphe2 = document.getElementById("Classe")
    paragraphe2.innerHTML = Classe

    //Régime
    var Sjrs = Lundi + Mardi + Mercredi + Jeudi + Vendredi;
    if (Sjrs == 0){
        var Regime = document.getElementById("Regime");
        Regime.innerHTML = ext
    }else{
        var Regime = document.getElementById("Regime");
        Regime.innerHTML = dmps

    }

    //Jours d'inscription
    //Lundi
    if (Lundi == 0){
        document.getElementById('CrgriseL').src = "Croixgrise.png"
    }else{
        document.getElementById('CrgriseL').src = "Vvert.png"
    }
    //Mardi
    if (Mardi == 0){
        document.getElementById('CrgriseM').src = "Croixgrise.png"
    }else{
        document.getElementById('CrgriseM').src = "Vvert.png"
    }
    //Mercredi
    if (Mercredi == 0){
        document.getElementById('CrgriseMe').src = "Croixgrise.png"
    }else{
        document.getElementById('CrgriseMe').src = "Vvert.png"
    }    
    //Jeudi
    if (Jeudi == 0){
        document.getElementById('CrgriseJ').src = "Croixgrise.png"
    }else{
        document.getElementById('CrgriseJ').src = "Vvert.png"
    }
    //Vendredi
    if (Vendredi == 0){
        document.getElementById('CrgriseV').src = "Croixgrise.png"
    }else{
        document.getElementById('CrgriseV').src = "Vvert.png"
    }
    
} 
