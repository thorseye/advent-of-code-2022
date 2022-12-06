import { tinput, input } from './5-input.mjs'

function fillCrates(input) {
	const rows = input
		.substr(0, input.indexOf('move'))
		.split(/\n/)
		.filter(r => r.length > 0)
		.map(row => row.split(''))

	const crates = [];
	for (const row of rows) {
		const numberOfCrates = Math.floor((row.length + 1) / 4);
		for (let i = 0; i < numberOfCrates; i++) {
			const c = row[i * 4 + 1]
			if (!crates[i]) {
				crates[i] = [];
			}
			if (/[A-Z]/.test(c)) {
				crates[i].push(c);
			}
		}
	}

	// reverse crates order to make it easier to work with
	return crates.map(c => c.reverse());
}

function move(input, crates) {
	const moves = input
		.substr(input.indexOf('move'))
		.split(/\n/)
		.filter(row => row.length > 0)
		.map(row => {
			const moves = row
				.split(/\D/)
				.filter(a => a.length > 0)
				.map(i => parseInt(i));
			return {
				move: moves[0], from: moves[1], to: moves[2]
			}
		});

	for (const move of moves) {
		try {

			if (move.move == 1) {
				crates[move.to - 1].push(crates[move.from - 1].pop());
			} else {
				crates[move.to - 1].push(...crates[move.from - 1].splice(crates[move.from - 1].length - move.move));
			}
		} catch (e) {
			console.log(e);
		}
	}

	return crates;

}

function run(input) {
	const crates = fillCrates(input);
	const moved = move(input, crates);
	const result = moved.map(c => c.pop()).join('')
	console.log(result)
}

try {
	run(input)
} catch (e) {
	console.log(e);
}