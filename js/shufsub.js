function getShuffledSubArray (theArray, subArraySize) {
	if (subArraySize > theArray.length)
		return null;

	var counter = 0;
	var index;
	var subArray = [];
	
	while (counter < subArraySize) {
		index = Math.floor(Math.random() * theArray.length);
		item = theArray[index];
		if ($.inArray(item, subArray) < 0) {
			subArray[counter] = theArray[index];
			counter++;
		}
	}

	return subArray;
};
