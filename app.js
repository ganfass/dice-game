//Toglogchiin eeljiig hadgalah tog1 = 0 tog2 = 1
var activePlayer = 0;

//Toglogchdiin onoog tsugluulah
var scores = [0, 0];

//Toglogchiin eeljindee hadgalj bgaa onoog hadgalah
var roundScore = 0;

//Shoonii ali talaaraa buusniig hadgalah huvisagch heregtei 1-6 gesen utgatai
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

var diceDom = document.querySelector(".dice"); 
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click",function (){
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = "block";
    diceDom.src = "dice-" +  diceNumber + ".png";   
});
