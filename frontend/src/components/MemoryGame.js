import React, { useState, useEffect } from 'react';

const MemoryGame = () => {
  const [sequence, setSequence] = useState([]);
  const [userInput, setUserInput] = useState([]);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [difficulty, setDifficulty] = useState(1);

  useEffect(() => {
    startGame();
  }, []);

  const startGame = () => {
    setScore(0);
    setStreak(0);
    setSequence(generateSequence(difficulty));
  };

  const generateSequence = (difficulty) => {
    const length = difficulty + 2; // Increase sequence length with difficulty
    return Array.from({ length }, () => Math.floor(Math.random() * 10));
  };

  const handleInput = (number) => {
    setUserInput([...userInput, number]);
    checkInput([...userInput, number]);
  };

  const checkInput = (input) => {
    if (input.length === sequence.length) {
      if (JSON.stringify(input) === JSON.stringify(sequence)) {
        setScore(score + 1);
        setStreak(streak + 1);
        setDifficulty(Math.min(difficulty + 1, 5));
        setSequence(generateSequence(Math.min(difficulty + 1, 5)));
        setUserInput([]);
      } else {
        alert(`Game Over! Your score: ${score}, Streak: ${streak}`);
        startGame();
      }
    }
  };

  return (
    <div>
      <h1>Memory Game - Difficulty {difficulty}</h1>
      <h2>Score: {score}</h2>
      <h2>Current Streak: {streak}</h2>
      <div>
        {sequence.map((num, index) => (
          <span key={index}>{num} </span>
        ))}
      </div>
      <div>
        <h3>Input Your Sequence:</h3>
        <div>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button key={num} onClick={() => handleInput(num)}>{num}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemoryGame;