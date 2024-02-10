
document.getElementById("btn").addEventListener
("click" , function() {


    var numberOfDice1 = Math.floor(Math.random()*6) + 1 ;
    var fileName = "./images/dice" + numberOfDice1 + ".png"
    document.querySelector(".img1").setAttribute("src",fileName )


    var numberOfDice2 = Math.floor(Math.random()*6) + 1 ;
    var fileName = "./images/dice" + numberOfDice2 + ".png"
    document.querySelector(".img2").setAttribute("src",fileName )



    if ( numberOfDice1 > numberOfDice2) {
        document.querySelector("h1").textContent = "p1 wins" ;
    } else if ( numberOfDice2 > numberOfDice1) {
        document.querySelector("h1").textContent = "p2 wins";
    }
    else {
        document.querySelector("h1").textContent = "tie";
    }





}) ;



