import { tinput, input } from './4-input.mjs';

function fillSet(floors) {
	const set = new Set();
	const [first, last] = floors.split('-').map(a => parseInt(a));
	for (let i = first; i <= last; i++) {
		set.add(i);
	}
	return set;
}

function clean(input) {
	const res = input
		.split(/\n/)
		.map(row => row.split(','))
		.filter(f => {
			const [f1, f2] = f.map(ff => fillSet(ff));
			const joined = new Set([...f1, ...f2]);
			if (joined.size > f1.size && joined.size > f2.size) {
				return false;
			}
			return true;
		})
		.length

	console.log(res);
}

clean(input);