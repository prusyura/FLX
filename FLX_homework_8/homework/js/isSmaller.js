function isBigger(a, b){
    return a > b;
}
function isSmaller(a, b) {
	if (a < b) {
		return isBigger(5, -1);
	} else {
		return false;
	}
}
isSmaller(5, -1);