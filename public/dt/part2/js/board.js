var BOARD_SIZE = 5;
var rewards = {
	neutral: 0,
	monster: -10,
	treasure: 10,
};


function createProbabilities() {
	let x = Math.random();
	let y = Math.random();

	let lower = Math.min(x, y);
	let upper = Math.max(x, y);
	return [lower, upper - lower, 1 - upper];
}

function createBoard(size) {
	let board = Array(size).fill(0).map(x => Array(size).fill(0));
	for (let i=0; i<size; i++)
		for (let j=0; j < size; j++)
			board[i][j] = createProbabilities();
	return board;
}

function updateReward(position) {
	let { x, y } = position;
	let cellProbabilities = boardProbabilities[y][x];
	let rewardType = getRewardType(cellProbabilities);

	totalReward += rewards[rewardType];
	updateObservations(position, rewardType);

	addHistory(position, rewardType);

	renderReward();
	renderGrid(position, rewardType);
}

function getRewardType(cellProbabilities) {
	let [p1, p2, p3] = cellProbabilities;
	let randVal = Math.random();

	if (randVal < p1) return 'neutral';
	if (randVal < p2) return 'monster';
	return 'treasure';
}
