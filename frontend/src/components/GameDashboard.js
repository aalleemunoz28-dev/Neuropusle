import React from 'react';

const GameDashboard = () => {
    const [difficulty, setDifficulty] = React.useState('Easy');
    const [scoreHistory, setScoreHistory] = React.useState([100, 200, 300]);
    const [userStats, setUserStats] = React.useState({ wins: 10, losses: 2 });

    const handleDifficultyChange = (event) => {
        setDifficulty(event.target.value);
    };

    return (
        <div className="game-dashboard">
            <h1>Game Dashboard</h1>
            <div className="game-selection">
                <h2>Select a Game</h2>
                <button>Game 1</button>
                <button>Game 2</button>
                <button>Game 3</button>
            </div>
            <div className="user-stats">
                <h2>Your Stats</h2>
                <p>Wins: {userStats.wins}</p>
                <p>Losses: {userStats.losses}</p>
            </div>
            <div className="difficulty-level">
                <h2>Current Difficulty Level</h2>
                <select value={difficulty} onChange={handleDifficultyChange}>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>
            <div className="score-history">
                <h2>Score History</h2>
                <ul>
                    {scoreHistory.map((score, index) => (
                        <li key={index}>{score}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default GameDashboard;