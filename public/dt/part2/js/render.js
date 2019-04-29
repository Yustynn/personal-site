function renderGrid(position, rewardType = 'neutral') {
	let style = 'repeat(' + String(BOARD_SIZE) + ', 128px)';
	$('#grid').css('grid-template-columns', style);
	$('#grid').css('grid-template-rows', style);

	let htmlString = '';
	for (let i=0; i<BOARD_SIZE; i++) {
		for (let j=0; j<BOARD_SIZE; j++) {
			if (i == position.y && j == position.x) {
				let bgColor;
				if (rewardType === 'monster') bgColor = 'lightsalmon';
				else if (rewardType === 'treasure') bgColor = 'lightgreen';

				let activeCell = `
					<div class="cell active" style="background-color: ${bgColor}">
						<i class="large material-icons">face</i>
					</div>\n
				`;
				htmlString += activeCell;
			}
			else {
				let { neutral, monster, treasure } = observations[i][j];
				let ordinaryCell = `
					<div class="cell">
						<div class="board-info"><i class="material-icons">fiber_manual_record</i><span>${neutral}</span></div>
						<div class="board-info"><i class="material-icons">mood_bad</i><span>${monster}</span></div>
						<div class="board-info"><i class="material-icons">monetization_on</i><span>${treasure}</span></div>
					</div>\n
				`;
				htmlString += ordinaryCell;
			}
		}
	}
	$('#grid').html(htmlString);
}

function renderReward() {
	$('#steps').html(remainingSteps);
	$('#reward').html(totalReward);
}