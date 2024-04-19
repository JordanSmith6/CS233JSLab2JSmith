const NUMBER_OF_DIE = 6
let farkelGame = new Game();

window.onload = function () {
    document.getElementById("BeginGame").addEventListener("click", startGame)
    document.getElementById("RollDice").addEventListener("click", rollDice)
    document.getElementById("EndTurn").addEventListener("click", EndTurn)
    document.getElementById("Update").addEventListener("click", updateBoard)
    document.getElementById("BeginGame").disabled = false;
    document.getElementById("RollDice").disabled = true;
    document.getElementById("EndTurn").disabled = true;
}
function startGame() {
   
farkelGame.startNewGame();
document.getElementById("BeginGame").disabled = true;
document.getElementById("RollDice").disabled = false;
document.getElementById("EndTurn").disabled = false;
farkelGame.addPlayer(document.getElementById("name1").value);
farkelGame.addPlayer(document.getElementById("name2").value);
document.getElementById("CurrentPlayer").innerText += 
farkelGame.getCurrentPlayer().name;
document.getElementById("PlayerName1").innerText = 
document.getElementById("name1").value;
document.getElementById("PlayerName2").innerText = 
document.getElementById("name2").value;
farkelGame.startNewGame();
}
function rollDice() {
    for (let i = 0; i < NUMBER_OF_DIE; i++) {
        document.getElementById(`${i}`).addEventListener("click", setAside);
    }
let player = farkelGame.getCurrentPlayer();
console.log(player);
const scores = farkelGame.rollDice();
console.log(farkelGame.dice[0]);
document.getElementById("0").src = `images/die${farkelGame.dice[0].value}.png`;
document.getElementById("1").src = `images/die${farkelGame.dice[1].value}.png`;
document.getElementById("2").src = `images/die${farkelGame.dice[2].value}.png`;
document.getElementById("3").src = `images/die${farkelGame.dice[3].value}.png`;
document.getElementById("4").src = `images/die${farkelGame.dice[4].value}.png`;
document.getElementById("5").src = `images/die${farkelGame.dice[5].value}.png`;
}




function setAside() {
   let value = farkelGame.setDieAside(Number(this.id));
    displayDice();
    document.getElementById(`scored${farkelGame.scoreDice.length - 1}`)
    .src = `images/die${value}.png`;
}

function displayDice() {
    let values = farkelGame.getDiceValues();
    for (let i = 0; i < NUMBER_OF_DIE; i++) {
        if(i < values.length) {
        document.getElementById(`${i}`).src = 
        `images/die${values[i]}.png`;
        }
        else {
          document.getElementById(`${i}`).src = "";
        }
    }
}


function updateBoard(){
    let player = farkelGame.getCurrentPlayer();
    let points = farkelGame.CalculateScore();
    if(player.number == 1) {
        document.getElementById("Player1CurrentScore").innerText = `Current Score: ${points}`;
        
    }
    if(player.number == 2) {
        document.getElementById("Player1CurrentScore").innerText = `Current Score: ${points}`;
        
    }
    farkelGame.clearDice();
}

function EndTurn(){
    



}



