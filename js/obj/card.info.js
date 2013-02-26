function CardInfo(imageUrl, team, name, title, introduction) {
	this.imageUrl = imageUrl; 
	this.team = team;
	this.name = name;
	this.title = title;
	this.introduction = introduction;	
}

// const CARD_WIDTH = 246;
// const CARD_HEIGHT = 246;
const CARD_WIDTH = 200;
const CARD_HEIGHT = 200;
const CARD_MARGIN = 2 * Math.sqrt(2);
const CARD_MARGIN_X = CARD_MARGIN * Math.sqrt(2) 
const CARD_MARGIN_Y = CARD_MARGIN * Math.sqrt(2)
const CARD_ALL_APPEAR_EFFECT_SPEED = 0.5;
const CARD_ALL_APPEAR_EFFECT_GAP = 0.05;
const CARD_FLIP_EFFECT_SPEED = 0.3;
const CARD_FLIP_EFFECT_GAP = 0.05;


function getCardId(row, col) {
	var id = "card_row_" + row + "_col_" + col;
	return id;
}

var cardData = [];
cardData.push([])
// cardData[0].push(new CardInfo("images/front_card.png", "team", "name", "title", "introduction"));
for (var row = 0; row < 8; row++) {
	cardData.push([]);
	for (var col = 0; col < ((row % 2 == 0) ? 5 : 4); col++) {
		cardData[row].push(new CardInfo("images/front_card.png", "team", "name", "title", "introduction"));	
	}	
}