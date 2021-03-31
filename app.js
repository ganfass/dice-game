//Global huvisagchid
var activePlayer,scores,roundScore;
var diceDom = document.querySelector(".dice"); 
//togloomiig ehluulehed beltgeh function
function initGame(){
    //Toglogchiin eeljiig hadgalah tog1 = 0 tog2 = 1
     activePlayer = 0;
    //Toglogchdiin onoog tsugluulah
    scores = [0, 0];
    //Toglogchiin eeljindee hadgalj bgaa onoog hadgalah
    roundScore = 0;
    diceDom.style.display = "none";
    //toglogchiin eeljiin bolon idevhtei onoog 0 es ehluulne
    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
    //Toglogchdiin neriig butsaaj gargah
    document.getElementById("name-0").textContent = "player 1";
    document.getElementById("name-1").textContent = "player 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
}
initGame();

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
        //toglogchiin eeljiig solih
        switchToNextPlayer();
    }
});

//hold tovchnii event listener
document.querySelector(".btn-hold").addEventListener("click", function(){
    // idevhtei toglogchiin tsugluulsan onoog eeljiin onoon deer nemeh
        scores[activePlayer]=scores[activePlayer] + roundScore;
        document.getElementById("score-"+activePlayer).textContent = scores[activePlayer];
    //Idevhtei toglogch hojson eseh
        if(scores[activePlayer]>=100) {
            document.getElementById("name-"+activePlayer).textContent = "Player-" + (activePlayer+1) +" Winner!!!"
            document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
            document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");

        } else{
        //toglogchiin eeljiig solino
            switchToNextPlayer();
        }
        
})
//idevhtei toglogchiin eeljiig daraagiin toglochruu shiljuuleh function
function switchToNextPlayer(){
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

// shine tolgoom ehluuleh tovchnii eventListener
document.querySelector(".btn-new").addEventListener("click",initGame);
