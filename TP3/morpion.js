var currentPlayer = 1;
var blueScore = 0;
var redScore = 0;
//pour initialiser tous les cases
function initialiserCase(caseId) {
document.getElementById(caseId).classList.remove("bleu");
document.getElementById(caseId).classList.remove("rouge");
document.getElementById(caseId).classList.add("case");
document.getElementById(caseId).classList.add("green");
}
//pour recommencer le joue
function reloadGame() {
activerButton();
initialiserCase("case11"); initialiserCase("case12"); initialiserCase("case13");
initialiserCase("case21"); initialiserCase("case22"); initialiserCase("case23");
initialiserCase("case31"); initialiserCase("case32"); initialiserCase("case33");
document.getElementById("info").innerHTML = "Bonjour! Cliquez sur la grille pour jouer.";
}
//quand on clique sur une grille
function play(thisCase) {
if (document.getElementById(thisCase.id).classList.contains("green")) {
document.getElementById(thisCase.id).classList.remove("green");
if (currentPlayer === 1) {
document.getElementById(thisCase.id).classList.add("bleu");
testVictoire();
currentPlayer = 2;
} else {
document.getElementById(thisCase.id).classList.add("rouge");
testVictoire();
currentPlayer = 1;

}
} else {
document.getElementById("info").innerHTML = "Case déjà jouée.";
}
}
//pour tester s'il y a de gagnant. S’il y a de gagnante, on termine le joue,
//on incremente le score, on affiche un message
//on affiche le nouveau score et on désactive la grille pour arreter le joue
function testVictoire() {
victoire = 0;
victoire = testGagnant("bleu");
if (victoire > 0) {
blueScore++;
document.getElementById("info").innerHTML = "Partie terminée. Bleu gagne.";
document.getElementById("scoreBleu").innerHTML = blueScore;
desactiverButton();
} else {
victoire = testGagnant("rouge");
if (victoire > 0) {
redScore++;
document.getElementById("info").innerHTML = "Partie terminée. Rouge gagne.";
document.getElementById("scoreRouge").innerHTML = redScore;
desactiverButton();
}
}
}
//on teste s'il y a de gagnant par ligne, par colonne ou par la diagonale
function testGagnant(couleur) {
//test ligne 1
if (document.getElementById("case11").classList.contains(couleur) &&
document.getElementById("case12").classList.contains(couleur) &&
document.getElementById("case13").classList.contains(couleur)) {
return 1;
}
//test ligne 2
if (document.getElementById("case21").classList.contains(couleur) &&
document.getElementById("case22").classList.contains(couleur) &&
document.getElementById("case23").classList.contains(couleur)) {
    return 1;
    }
    //test ligne 3
    if (document.getElementById("case31").classList.contains(couleur) &&
    document.getElementById("case32").classList.contains(couleur) &&
    document.getElementById("case33").classList.contains(couleur)) {
    return 1;
    }
    //test colonne 1
    if (document.getElementById("case11").classList.contains(couleur) &&
    document.getElementById("case21").classList.contains(couleur) &&
    document.getElementById("case31").classList.contains(couleur)) {
    return 1;
    }
    //test colonne 2
    if (document.getElementById("case12").classList.contains(couleur) &&
    document.getElementById("case22").classList.contains(couleur) &&
    document.getElementById("case32").classList.contains(couleur)) {
        return 1;
}
//test colonne 3
if (document.getElementById("case13").classList.contains(couleur) &&
document.getElementById("case23").classList.contains(couleur) &&
document.getElementById("case33").classList.contains(couleur)) {
return 1;
}
//test diagonale 1
if (document.getElementById("case13").classList.contains(couleur) &&
document.getElementById("case22").classList.contains(couleur) &&
document.getElementById("case31").classList.contains(couleur)) {
return 1;
}
//test diagonale 2
if (document.getElementById("case11").classList.contains(couleur) &&
document.getElementById("case22").classList.contains(couleur) &&
document.getElementById("case33").classList.contains(couleur)) {
return 1;
}
//pas de gagnant alors
return 0;
}
//pour arrêter la joue, on désactive tous les cases.
function desactiverButton() {
document.getElementById("case11").disabled = true;
document.getElementById("case12").disabled = true;
document.getElementById("case13").disabled = true;
document.getElementById("case21").disabled = true;
document.getElementById("case22").disabled = true;
document.getElementById("case23").disabled = true;
document.getElementById("case31").disabled = true;
document.getElementById("case32").disabled = true;
document.getElementById("case33").disabled = true;
}
//quand on recommence la joue, on active tous les cases.
function activerButton() {
document.getElementById("case11").disabled = false;
document.getElementById("case12").disabled = false;
document.getElementById("case13").disabled = false;
document.getElementById("case21").disabled = false;
document.getElementById("case22").disabled = false;
document.getElementById("case23").disabled = false;
document.getElementById("case31").disabled = false;
document.getElementById("case32").disabled = false;
document.getElementById("case33").disabled = false;
}