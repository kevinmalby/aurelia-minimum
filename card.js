export class Card {
	cardValues = ['2','3','4','5','6','7','8','9','10',
		'J','Q','K','A'];
	cardSuits = ['Diamonds', 'Clubs', 'Hearts', 'Spades'];

	value;
	suit;

	activate() {
		this.value = this.pickRandomItem(this.cardValues);
		this.suit = this.pickRandomItem(this.cardSuits);
	}

	pickRandomItem(data) {
	    let index = Math.floor(Math.random() * (data.length -1));
	    return data[index];
	}
}