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

// gets four "answer" divs from document by id
function getAnswerElements () {
	var ans = [];
	for (var i = 0; i < 4; i++) {
		ans[i] = document.getElementById("ans" + i);
	}
	return ans;
};

// sets answer div contents to those in ans array
function setAnswerContent (ans) {
	for (var i = 0; i < 4; i++) {
		ans[i].innerHTML = shuffledAnswers[i];
	}
};

// loads question set content into template
function loadSet (currentSet, question, ans) {
	shuffledAnswers = shuffle(currentSet.answers);
	question.innerHTML = currentSet.question;
	
	setAnswerContent (ans);
};

// sets background color when element clicked
function backgroundColorEvent (element, color) {
	element.onclick = function () {
		element.style.backgroundColor = color;
	};
};
