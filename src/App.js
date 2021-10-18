import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of Sri Lanka?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Colombo', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'What is Sri Lanka national sport?',
			answerOptions: [
				{ answerText: 'Cricket', isCorrect: false },
				{ answerText: 'Volleyball', isCorrect: true },
				{ answerText: 'Rugby', isCorrect: false },
				{ answerText: 'Badminton', isCorrect: false },
			],
		},
		{
			questionText: 'What animal appears on the flag of Sri Lanka?',
			answerOptions: [
				{ answerText: 'Lion', isCorrect: true },
				{ answerText: 'Dragon', isCorrect: false },
				{ answerText: 'Tiger', isCorrect: false },
				{ answerText: 'Eagle', isCorrect: false },
			],
		},
		{
			questionText: 'How many provinces are there in Sri Lanka?',
			answerOptions: [
				{ answerText: '5', isCorrect: false },
				{ answerText: '25', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '9', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}