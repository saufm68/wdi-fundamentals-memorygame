var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
  {
 	rank: "king",
 	suit: "diamonds",
 	cardImage: "images/king-of-diamonds.png"
    } 
];

var startingCards = [];

var cardsInPlay = [];

var removeOk = function(){
	var main = document.getElementsByTagName("main")[0];
	var okButton = document.getElementById("ok");
	main.removeChild(okButton);	
};

var checkForMatch = function(){

	if (cardsInPlay.length === 2){
		if ( cardsInPlay[0] === cardsInPlay[1]){
			alert("You have found a match");
		}
		else {
			alert("Sorry, Try again.");
		}	
		 removeOk();
	}
	
};


var flipCard = function(){

	var cardId = this.getAttribute('data-id')

	console.log("User flipped " + startingCards[cardId]);
	
	cardsInPlay.push(startingCards[cardId]);

	this.setAttribute("src", startingCards[cardId]);

	checkForMatch();

};	

var createBoard = function(){

	for (var i = 0; i < 12; i++){
		var cardElement = document.createElement('img');
		var random = cards[Math.floor(Math.random() * 3)];
		cardElement.setAttribute("src", random.cardImage);
		startingCards.push(random.cardImage)
		cardElement.setAttribute("data-id", i);
		document.getElementById("gameboard").appendChild(cardElement);
	}

	var backOfCards = function(){
		for (var i = 0; i < 12; i++){
		var changeToBack = document.getElementsByTagName('img')[i]
		changeToBack.setAttribute("src", "images/back.png");
		changeToBack.setAttribute("data-id", i);
		changeToBack.addEventListener("click", flipCard);
		}
	};

	var ok = document.getElementsByTagName("button")[0];
	ok.addEventListener("click", backOfCards);


};

var resetButton = document.getElementById("reset");
var reset = function(){
	location.reload();
};

resetButton.addEventListener("click", reset); 


		


createBoard();

