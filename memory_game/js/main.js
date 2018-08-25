var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
/*{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},*/
  {
 	rank: "king",
 	suit: "diamonds",
 	cardImage: "images/king-of-diamonds.png"
    } 
];


var cardsInPlay = [];

var removeOk = function(){
	var main = document.getElementsByTagName("main")[0];
	var okButton = document.getElementById("ok");
	main.removeChild(okButton);	
};

var checkForMatch = function(){

	if (cardsInPlay.length === 2){
		if ( cardsInPlay[0] === cardsInPlay[1] && cardsInPlay[0] === "images/queen-of-hearts.png" ){
			alert("You have found the Queen");
		}
		else {
			alert("Sorry, Try again.");
		}	
		 removeOk();
	}
	
};


var createBoard = function(){

	for (var i = 0; i < 12; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute("data-id", i);
		document.getElementById("gameboard").appendChild(cardElement);
	}

	var randomValue1 = Math.floor(Math.random() * 12);
	var queen1 = document.getElementsByTagName("img")[randomValue1];
	var queen1Id = queen1.getAttribute("data-id");
	queen1.setAttribute("src", cards[0].cardImage);
	var randomValue2 = Math.floor(Math.random() * 12);
	if ( randomValue2 === randomValue1 && randomValue1 !== 11 ){
		randomValue2 = randomValue1 + 1 ;
	} else if (randomValue2 === randomValue1 && randomValue1 === 11) {
		randomValue2 = randomValue1 - 4 ;
	}
	var queen2 = document.getElementsByTagName("img")[randomValue2];
	var queen2Id = queen2.getAttribute("data-id");
	queen2.setAttribute("src", cards[0].cardImage);

	for (var i = 0; i < 12; i++){
		if (i !== randomValue1 && i !== randomValue2 ){
			var king = document.getElementsByTagName("img")[i];
			king.setAttribute("src", cards[1].cardImage);
			var kingId = king.getAttribute("data-id");
		} 
		else  if (i === randomValue1 && i === randomValue2 && i !== 11){
			var king = document.getElementsByTagName("img")[i+1];
			cardElement.setAttribute("src", cards[1].cardImage);
			var kingId = king.getAttribute("data-id");
		} 
		
	}

	var flipCard = function(){

		var cardId = this.getAttribute('data-id')

		if (cardId === queen1Id || cardId === queen2Id ){
			console.log("User flipped queen");
			cardsInPlay.push(cards[0].cardImage);
			this.setAttribute("src", cards[0].cardImage);
		} 
		else {
			console.log("User flipped king");
			cardsInPlay.push(cards[1].cardImage);
			this.setAttribute("src", cards[1].cardImage);
		}

		checkForMatch();

	};	

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

