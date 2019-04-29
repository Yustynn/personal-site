let gameIndex = 0;  // game number to select preset board -- [0, 4]
let boardProbabilities;
let remainingSteps, totalReward, position;
let observations = createObservations(BOARD_SIZE);

let rounds = 1;
let history = [];


function reset() {
	boardProbabilities = presetBoards[gameIndex];

	remainingSteps = 20;
	totalReward = 0;
	position = {
		x: Math.floor(BOARD_SIZE / 2),
		y: Math.floor(BOARD_SIZE / 2),
	};
	resetHistory();

	renderGrid(position);
	renderReward();
}

function changePreset(index) {
	gameIndex = index;
	observations = createObservations(BOARD_SIZE);
	reset();
}

reset();
$('#reset').click('on', reset);
