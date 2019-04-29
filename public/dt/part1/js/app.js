var clicks = 0;
var pastReward = 0;
var totalReward = 0;

var distributions = {
	1: {
		mean: 1,
		variance: 1,
	},
	2: {
		mean: 1,
		variance: 2,
	},
	3: {
		mean: 1,
		variance: 5,
	},
	4: {
		mean: 1.1,
		variance: 100,
	},
};


function randomNormal(mean, variance) {
	// Box-Muller transform for generating Gaussian values
	let u = 0, v = 0;
	while (u === 0) u = Math.random();
	while (v === 0) v = Math.random();
	z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

	return mean + Math.sqrt(variance) * z;
}

function onClick(distribution) {
	let { mean, variance } = distribution;
	let reward = randomNormal(mean, variance);

	clicks += 1;
	pastReward = reward;
	totalReward += reward;

	updateRewardsOnHtml();
}

function updateRewardsOnHtml() {
	document.getElementById('clicks').innerHTML = String(clicks);
	document.getElementById('past').innerHTML = pastReward.toFixed(2);
	document.getElementById('total').innerHTML = totalReward.toFixed(2);
}


document.getElementById('btn1').addEventListener('click', onClick.bind(this, distributions[1]));
document.getElementById('btn2').addEventListener('click', onClick.bind(this, distributions[2]));
document.getElementById('btn3').addEventListener('click', onClick.bind(this, distributions[3]));
document.getElementById('btn4').addEventListener('click', onClick.bind(this, distributions[4]));
