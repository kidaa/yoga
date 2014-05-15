var CORRECT_COLOR = "green";
var INCORRECT_COLOR = "red";
var SELECTED_COLOR = "yellow";
var DESELECTED_COLOR = "#f5f5f5";

// answers is an array of answers
// answer[0] is always the correct answer
function QuestionSet (question, answers) {
	this.question = question,
	this.answers = answers,
	this.checkAnswer = function (answerGiven) {
		if (answerGiven == this.answers[0])
			return true;
		else
			return false;
	}
};

// stores an answer selected. intended to be used in an array and indexed alongside the quizSet being used
function Response (answerSelected) {
	this.answerSelected = answerSelected
};

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

// sets answer div contents to answers in contents array
function setAnswerContent (answerElements, answerContents) {
	for (var i = 0; i < 4; i++) {
		answerElements[i].innerHTML = answerContents[i];
	}
};

function resetAnswerColors () {
	$(".ansColor").css("background", DESELECTED_COLOR);
};
