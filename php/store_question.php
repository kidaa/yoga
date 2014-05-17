<?php

if (!isset ($_POST['question'])) {
	echo "question not set";
} else if (!isset ($_POST['answer0'])) {
	echo "answer0 not set";
} else if (!isset ($_POST['answer1'])) {
	echo "answer1 not set";
} else if (!isset ($_POST['answer2'])) {
	echo "answer2 not set";
} else if (!isset ($_POST['answer3'])) {
	echo "answer3 not set";
}

$fileName = '../data/questions.dat';

$outputString = "{$_POST['question']}\t"
				."{$_POST['answer0']}\t"
				."{$_POST['answer1']}\t"
				."{$_POST['answer2']}\t"
				."{$_POST['answer3']}\t\n";

$success = file_put_contents ($fileName, $outputString, FILE_APPEND);

if ($success) {
	$message = "Your question was successfully submitted!";
} else {
	$message = "Uh oh! Something happened and your question didn't get saved!";
}

?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Question Submitted</title>
	<style>
		body {
			font-family: sans-serif;
			color: #FFAC00;
			background: #6EC5B8;
			font-size: 18px;
			padding: .4em 1.8em;
		}
		h1 {
			border-bottom: double thick #C7BAA7;
			color: #DC5C05;
		}
		a {
			text-decoration: none;
			color: #DC5C05;
		}
		button {
			border-radius: 5px;
			padding: 10px;
			background: #C7BAA7;
		}

	</style>
</head>
<body>
	<h1>Yoga Teacher Training Quiz</h1>
	<h2>Question Submission</h2>
	<p><?php echo $message; ?></p>
	<button type="button"><a href="../question_form.html">Submit Another Question</a></button>
</body>
</html>
