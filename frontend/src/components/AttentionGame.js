import React, { useState, useEffect } from 'react';

const AttentionGame = () => {
    const [patterns, setPatterns] = useState([]);
    const [selectedPattern, setSelectedPattern] = useState(null);
    const [matchedPatterns, setMatchedPatterns] = useState([]);
    const [timeLeft, setTimeLeft] = useState(60);
    const [difficulty, setDifficulty] = useState(3);

    // Initialize patterns and timer
    useEffect(() => {
        generatePatterns(difficulty);
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [difficulty]);

    const generatePatterns = (difficulty) => {
        const newPatterns = [];
        for (let i = 0; i < difficulty * 2; i++) {
            newPatterns.push({ id: i, pattern: `Pattern ${i}` }); // Modify as needed to represent visual patterns
        }
        setPatterns(newPatterns);
    };

    const handlePatternClick = (pattern) => {
        if (matchedPatterns.includes(pattern)) return;
        setSelectedPattern(pattern);
        if (selectedPattern && selectedPattern === pattern) {
            setMatchedPatterns([...matchedPatterns, pattern]);
        }
    };

    return (
        <div>
            <h1>Pattern Recognition Game</h1>
            <h2>Time Left: {timeLeft} seconds</h2>
            <h2>Select Patterns to Match</h2>
            <div className="patterns">
                {patterns.map((item) => (
                    <div key={item.id} onClick={() => handlePatternClick(item.pattern)}>
                        {item.pattern}
                    </div>
                ))}
            </div>
            {matchedPatterns.length === patterns.length && <h2>Congratulations! You've matched all patterns!</h2>}
        </div>
    );
};

export default AttentionGame;
