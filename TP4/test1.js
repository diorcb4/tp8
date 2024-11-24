function test_age() {
    let age= prompt("Quel est votre age ?");
    if(age < 18) {
        document.write("Vous etes mineur");
        document.body.style.backgroundColor="red";  
    }
    else {
        document.write("Vous etes majeur")
         document.body.style.backgroundColor="green";
    }
}
function calcul_moyenne() {
    var n1 = prompt ("Donner la premiere note :");
    var n2 = prompt ("Donner la deuxieme note :");
    var n3 = prompt ("Donner la troisieme note :");

    var somme = Number(n1) + Number(n2) + Number(n3);

    document.write("Voici la somme : " + somme + "<br>");
    var moyenne = somme/3;

    document.write("Voici la moyenne : " + moyenne + "<br>");

    if(moyenne < 10) {
        document.write("Desole.. Redoublant <br>");
        document.body.style.backgroundColor="red";
    }
    else {
        document.write("Felicitations.. Vous etes admis <br>");
        document.body.backgroundColor="green";
    }
}
function test_couleur() {
    let couleur = prompt("Donner une couleur");
    if (couleur == "rouge" || couleur == "red"){
        document.body.backgroundColor = "red"
    }
    else if (couleur == "bleu" || couleur == "blue") {
        document.body.backgroundColor = "blue"
    }
    else if (couleur == "vert" || couleur == "green") {
        document.body.backgroundColor = "green"
    }
    else if (couleur == "rose" || couleur == "pink") {
        document.body.backgroundColor = "pink"
    }
    else { 
        alert("Couleur non comprise")
    }   
}

