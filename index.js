var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var imagelink1 = "images/dice" + randomNumber1 + ".png";
var imagelink2 = "images/dice" + randomNumber2 + ".png";
document.querySelector("img.img1").setAttribute("src", imagelink1);
document.querySelector("img.img2").setAttribute("src", imagelink2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerText = "Player 1 Wins";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = "Player 2 Wins";
}
else {
    document.querySelector("h1").innerText = "DRAW you both lose";
}


document.querySelector("button.refreshbutton").addEventListener("click", function(){
    location.reload();
});

