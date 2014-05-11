var CORRECT_COLOR = "green";
var INCORRECT_COLOR = "red";
var DESELECTED_COLOR = "#f5f5f5";

// answers is an array of answers
// answer[0] is always the correct answer
function QuestionSet (question, answers) {
	this.question = question,
	this.answers = answers,
	this.checkAnswer = function (answerString) {
		if (answerString == this.answers[0])
			return true;
		return false
	}
};

function SelectedAnswer (question, answer) {
	this.question = question,
	this.answer = answer
};

function handleAnswerClick (count, questionSet, answerElementClicked) {
	answerElementClicked.onlick = function () {
		responses[count] = new SelectedAnswer (questionSet.question, answerElementClicked.innerHTML);
	};
};

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
function setAnswerContent (answerElements, answerContents) {
	for (var i = 0; i < 4; i++) {
		answerElements[i].innerHTML = answerContents[i];
	}
};

// loads question set content into template
function loadSet (currentSet, question, answerElements) {
	shuffledAnswers = shuffle(currentSet.answers);
	question.innerHTML = currentSet.question;
	setAnswerContent (answerElements, shuffledAnswers);
};
