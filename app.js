import { Card } from './card';

export class App {
	cards = [];

	newCard() {
		this.cards.push(new Card());
	}
}