histories = []

function resetHistory() {
	history = [];
}

function addHistory(position, rewardType) {
	let { x, y } = position;
	let obj = [x, y, rewardType];
	history.push(obj);
}

function logHistory() {
	let string = JSON.stringify(history);
	histories.push(history);
	let log = {
		rounds,
		history: string,
	};

	// let body = JSON.stringify(log);
	// fetch('http://10.12.1.221:5000/log', {
	// 	method: 'POST',
	// 	mode: 'no-cors',
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 	},
	// 	body,
	// });

	rounds += 1;
	console.log(rounds)

	if (rounds > 5) loadResults();
}
