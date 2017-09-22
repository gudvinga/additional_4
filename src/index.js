module.exports = function multiply(first, second) {
var firstLength = first.length,
	secondLength = second.length,
	res = [],
	trek = 0;
	//init array res
	for (var i = 0; i < (firstLength + secondLength -1); i++) {
		res[i] = 0;
	}

	//multiply first and second
	for (var i = 0; i < firstLength; i++) {
		for (var  j= 0; j < secondLength; j++) {
			res[i + j] += first[i] * second[j];
		}
	}
	//make trek
	for (var i = res.length - 1; i >= 0; i--) {
		if (i != 0) {
			trek = Math.floor(res[i]/10);
			res[i] %= 10;
			res[i-1] += trek;
		}
	}

return(res.join(''));
}
