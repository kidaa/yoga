var CORRECT_COLOR = "green";
var INCORRECT_COLOR = "red";
var SELECTED_COLOR = "yellow";
var DESELECTED_COLOR = "#f5f5f5";

// answers is an array of answers
// answer[0] is always the correct answer
function QuestionSet (question, answers) {
	this.question = question,
	this.answers = answers
};

function SelectedAnswer (question, answer) {
	this.question = question,
	this.answer = answer
};
/*
function handleAnswerClick (count, questionSet, answerElementClicked) {
	answerElementClicked.onlick = function () {
		responses[count] = new SelectedAnswer (questionSet.question, answerElementClicked.innerHTML);
	};
};
*/
// returns a shuffled version of the array in what is probably the ugliest code I've ever seen!
function shuffle(theArray){ //v1.0
	var o = theArray.slice (0);
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
function setAnswerContent (answerElements, answerContents) {
	for (var i = 0; i < 4; i++) {
		answerElements[i].innerHTML = answerContents[i];
	}
};

function resetAnswerColors () {
	var ansColor = document.getElementsByClassName("ansColor");
	for (var i = 0; i < ansColor.length; i++) {
		ansColor[i].style.backgroundColor = DESELECTED_COLOR;
	}
};

// loads question set content into template
function loadSet (currentSet, questionElement, answerElements) {
	if (typeof currentSet == 'undefined')
		return;
	document.getElementById("correctAnswer").innerHTML = currentSet.answers[0];
	shuffledAnswers = shuffle(currentSet.answers);
	questionElement.innerHTML = currentSet.question;
	setAnswerContent (answerElements, shuffledAnswers);
};
