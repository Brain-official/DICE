

var randNumImage1 = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber);

var randNumImage2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImages1 = document.querySelector(".img1").setAttribute("src", "images/dice" + randNumImage1 + ".png");

var randomDiceImages2 = document.querySelector(".img2").setAttribute("src", "images/dice" + randNumImage2 + ".png");


var heading = document.querySelector("h1");

if (randNumImage2 > randNumImage1){
    heading.innerHTML = "Player 2 Wins!"
}else if(randNumImage1 > randNumImage2){
    heading.innerHTML = "Player 1 Wins!"
}else{
    heading.innerHTML= "Draw!"
}




