//Toglogchiin eeljiig hadgalah tog1 = 0 tog2 = 1
var activePlayer = 0;

//Toglogchdiin onoog tsugluulah
var scores = [0, 0];

//Toglogchiin eeljindee hadgalj bgaa onoog hadgalah
var roundScore = 0;

//Shoonii ali talaaraa buusniig hadgalah huvisagch heregtei 1-6 gesen utgatai
var dice = Math.floor(Math.random() * 6) + 1;''

document.querySelector("#score-0").innerHTML = 0;
document.querySelector("#score-1").innerHTML = 0;
document.querySelector("#current-0").innerHTML = 0;
document.querySelector("#current-1").innerHTML = 0;

document.querySelector(".dice").style.display="none";

console.log("shoo: " + dice);
