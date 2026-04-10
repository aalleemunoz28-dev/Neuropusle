import React, { useState, useEffect } from 'react';

const DecisionGame = () => {
    const [timeLeft, setTimeLeft] = useState(10); // 10 seconds for decision
    const [isTimeUp, setIsTimeUp] = useState(false);
    const [decision, setDecision] = useState(null);

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else {
            setIsTimeUp(true);
        }
    }, [timeLeft]);

    const handleDecision = (newDecision) => {
        setDecision(newDecision);
        setIsTimeUp(true);
        clearInterval(); // Stop the timer
    };

    return (
        <div>
            <h1>Decision Game</h1>
            <p>Time left: {timeLeft} seconds</p>
            {isTimeUp ? (
                <div>
                    <h2>{decision ? `You chose: ${decision}` : 'Time is up! No decision was made.'}</h2>
                </div>
            ) : (
                <div>
                    <button onClick={() => handleDecision('Option 1')}>Option 1</button>
                    <button onClick={() => handleDecision('Option 2')}>Option 2</button>
                    <button onClick={() => handleDecision('Option 3')}>Option 3</button>
                </div>
            )}
        </div>
    );
};

export default DecisionGame;