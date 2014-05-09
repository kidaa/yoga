// returns a shuffled version of the array in what is probably the ugliest code I've ever seen!
function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

// returns a shuffled subarray of subArraySize members from theArray
function shuffledRandomSubArray (theArray, subArraySize) {
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
