import React, { useState } from 'react';
import styles from './GameBoard.module.css';

const GameBoard = ({ users }) => {
  const loadAllPlayerData = () => {
    return users.map((user) => {
      const savedScores = JSON.parse(localStorage.getItem(user.title)) || [];
      return {
        name: user.title,
        currentNumber: Math.floor(Math.random() * 100),
        moves: 0,
        scores: savedScores,
      };
    });
  };

  const [gameStates, setGameStates] = useState(loadAllPlayerData());
  const [currentTurn, setCurrentTurn] = useState(0);

  const handleMove = (index, operation) => {
    setGameStates((prevGameStates) => {
      const newGameStates = [...prevGameStates];
      let newNumber = newGameStates[index].currentNumber;

      switch (operation) {
        case '+1':
          newNumber += 1;
          break;
        case '-1':
          newNumber -= 1;
          break;
        case '*2':
          newNumber *= 2;
          break;
        case '/2':
          newNumber = Math.floor(newNumber / 2);
          break;
        default:
          return prevGameStates;
      }

       if(newNumber!==100){
        setCurrentTurn((index + 1) % newGameStates.length);
       }

      newGameStates[index] = {
        ...newGameStates[index],
        currentNumber: newNumber,
        moves: newGameStates[index].moves + 1,
      };

      return newGameStates;
    });

      

  };

  const handleNewGame = (index) => {
    setGameStates((prevGameStates) => {
      const newGameStates = [...prevGameStates];
      const { name, moves, scores } = newGameStates[index];

      // Save the current score to local storage
      const updatedScores = [...scores, moves];
      localStorage.setItem(name, JSON.stringify(updatedScores));

      // Update the game state with a new game and reset moves
      newGameStates[index] = {
        ...newGameStates[index],
        currentNumber: Math.floor(Math.random() * 100),
        moves: 0,
        scores: updatedScores,
      };
      return newGameStates;
    });

    setCurrentTurn((prevTurn) => (prevTurn + 1) % gameStates.length);
  };

  const handleExit = (index) => {

    const { name, moves, scores } = gameStates[index];
    // Save the current score to local storage
    const updatedScores = [...scores, moves];
    localStorage.setItem(name, JSON.stringify(updatedScores));

    setGameStates((prevGameStates) => {
      const newGameStates = prevGameStates.filter((_, i) => i !== index);
      return newGameStates;
    });
    setCurrentTurn((prevTurn) => prevTurn % (gameStates.length - 1));
  };

  const calculateAverageMoves = (scores) => {
    if (scores.length === 0) return Infinity;
    const totalMoves = scores.reduce((acc, score) => acc + score, 0);
    return totalMoves / scores.length;
  };

  const loadAllPlayersFromStorage = () => {
    const allPlayers = [];
    for (const key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        const scores = JSON.parse(localStorage.getItem(key));
        if (Array.isArray(scores)) {
          allPlayers.push({ name: key, averageMoves: calculateAverageMoves(scores) });
        }
      }
    }
    return allPlayers;
  };

  const topPlayers = loadAllPlayersFromStorage()
    .sort((a, b) => a.averageMoves - b.averageMoves)
    .slice(0, 3);

  return (
    <div className={styles.gameboard}>
    <div className={styles.leaderboard}>
      <h2>Top Players</h2>
      <ol>
        {topPlayers.map((player, index) => (
          <li key={index}>
            {player.name}: {player.averageMoves.toFixed(2)} average scores
          </li>
        ))}
      </ol>
    </div>
    <div className={styles.playersboard}>
    {gameStates.map((gameState, index) => (
      <div
        key={index}
        className={`${styles.gameboard__player} ${currentTurn === index ? styles.active : ''}`}
      >
        <h3>{gameState.name}</h3>
        <p>Current Number: {gameState.currentNumber}</p>
        <p>Moves: {gameState.moves}</p>
        <div>
          <h4>Scores:</h4>
          <p>{gameState.scores.join(', ')}</p>
        </div>
        {gameState.currentNumber !== 100 && currentTurn === index && (
          <div>
            <button onClick={() => handleMove(index, '+1')}>+1</button>
            <button onClick={() => handleMove(index, '-1')}>-1</button>
            <button onClick={() => handleMove(index, '*2')}>*2</button>
            <button onClick={() => handleMove(index, '/2')}>/2</button>
          </div>
        )}
        {gameState.currentNumber === 100 && currentTurn === index && (
          <div>
            <button onClick={() => handleNewGame(index)}>New Game</button>
            <button onClick={() => handleExit(index)}>Exit</button>
          </div>
        )}
      </div>
    ))}
    </div>
  </div>
  );
};

export default GameBoard;
