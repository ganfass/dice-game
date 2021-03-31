//Toglogchiin eeljiig hadgalah tog1 = 0 tog2 = 1
var activePlayer = 0;

//Toglogchdiin onoog tsugluulah
var scores = [0, 0];

//Toglogchiin eeljindee hadgalj bgaa onoog hadgalah
var roundScore = 0;

//toglogchiin eeljiin bolon idevhtei onoog 0 es ehluulne
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

var diceDom = document.querySelector(".dice"); 
diceDom.style.display = "none";

//shoog shideh tovchluuriin click event hiih
document.querySelector(".btn-roll").addEventListener("click",function (){
    
    //1-6 dotorh sanamsargui too uusgegch
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    //delgetsend shoonii dursiig hargalzuulan gargah
    diceDom.style.display = "block";
    diceDom.src = "dice-" +  diceNumber + ".png";

    //Buusan too ni 1 ees yalgaatai bol idevhtei toglogchiin eeljiin onoog nemegduulne
    if (diceNumber !== 1) {
        // 1ees yalgaatai too buusan ued onoog nemeh
        roundScore = roundScore + diceNumber;
        
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    } else {
        //1 buusan ued idevhtei onoog tegleh
        roundScore = 0;
        document.getElementById("current-" + activePlayer).textContent = 0;
        // 1 buusan tul toglogchiin eeljiig ene hesegt solij ogno
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
        //Ulaan tsegiig shiljuuleh code
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
        //shoog tur alga hiih heseg
        diceDom.style.display = "none";
    }


});
