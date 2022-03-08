var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

//We added the randomNumbers and this provides us statically png's has turned out to dynamically png.
var randomDiceImage = "images/dice" + randomNumber1 + ".png"

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png"

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

// Function Part
player1 = randomNumber1;
player2 = randomNumber2;

// Compare Part
    if(player1>player2){
        document.querySelector("h1").innerHTML = "  🚩 Player 1 Wins"
    } else if(player2>player1){
        document.querySelector("h1").innerHTML = "   Player 2 Wins 🚩"
    } else{
        document.querySelector("h1").innerHTML = " Draw!"
    }