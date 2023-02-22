export function fizzBuzz(divisor1, divisor2, word1, word2) {
	const arr = [];
	for (var i = 1; i <= 100; i++) {
		if (i % (divisor1 * divisor2) === 0) {
			arr.push(word1 + word2);
		} else if (i % divisor1 === 0) {
			arr.push(word1);
		} else if (i % divisor2 === 0) {
			arr.push(word2);
		} else {
			arr.push(i);
		}
	}

	return arr;
}

export function fibonacci(x, y, z) {
	let sequence = [0, 1];
	for (let i = 2; i <= x; i++) {
		if (i < y || i < z) {
			sequence.push(1);
		} else {
			sequence.push(sequence[i - y] + sequence[i - z]);
		}
	}
	return sequence.slice(0, x + 1);
}
