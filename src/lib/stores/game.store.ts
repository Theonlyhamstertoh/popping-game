import { get, writable } from 'svelte/store';

interface Button {
	id: string;
	clicked: boolean;
	order: number | null;
}

interface GameMode {
	name: 'zen' | 'timed';
	buttons: Button[];
	count: number;
}

const createGameStore = () => {
	const initialGameMode: GameMode = {
		name: 'zen',
		buttons: [...new Array(25)].map(() => ({
			id: crypto.randomUUID(),
			clicked: false,
			order: null
		})),
		count: 25
	};
	const { subscribe, update, set } = writable(initialGameMode);
	return {
		subscribe,
		resetGame: () => {
			set(initialGameMode);
		},
		clickButton: (id: string) => {
			update((gameMode: GameMode) => {
				const buttonIndex = gameMode.buttons.findIndex((button) => button.id === id);
				if (buttonIndex !== -1) {
					gameMode.buttons[buttonIndex].clicked = true;
					gameMode.buttons[buttonIndex].order = gameMode.buttons.filter(
						(button) => button.clicked
					).length;
				}

				// Check if all buttons have been clicked
				if (gameMode.buttons.every((button) => button.clicked)) {
					const initialGameMode: GameMode = {
						name: 'zen',
						buttons: [...new Array(25)].map(() => ({
							id: crypto.randomUUID(),
							clicked: false,
							order: null
						})),
						count: 25
					};
					return initialGameMode;
				} else {
					return gameMode;
				}
			});
			// Check if all buttons have been clicked
		}
	};
};

export const game = createGameStore();
