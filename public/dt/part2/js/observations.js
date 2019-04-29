function createObservations(size) {
	let board = Array(size).fill(0).map(x => Array(size).fill(0));
	for (let i=0; i<size; i++)
		for (let j=0; j<size; j++)
			board[i][j] = {
				neutral: 0,
				monster: 0,
				treasure: 0,
			};
	return board;
}

function updateObservations(position, rewardType) {
	let { x, y } = position;
	observations[y][x][rewardType] += 1;
}