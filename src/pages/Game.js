import React, { useState } from "react";
import Board from "../components/Board";
import "../styles.css"; // Importing CSS file

const Game = () => {
  const [history, setHistory] = useState([]);
  const [isXNext, setIsXNext] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [currentWinner, setCurrentWinner] = useState(null);
  const [board, setBoard] = useState(Array(9).fill(null)); // Lifted board state
  const [winningSquares, setWinningSquares] = useState([]); // Store winning squares

  // Handles end of game and updates history
  const handleGameEnd = (winner, winningLine) => {
    if (winner) {
      setHistory([...history, winner]); // Store only winner
      setCurrentWinner(winner);
      setGameOver(true);
      setWinningSquares(winningLine || []);
    }
  };

  // Resets the game to initial state
  const resetGame = () => {
    setIsXNext(true);
    setGameOver(false);
    setCurrentWinner(null);
    setBoard(Array(9).fill(null)); // Reset board
    setWinningSquares([]); // Reset winning squares
  };

  return (
    <div className="game-container">

      {/* Show current turn or winner */}
      {gameOver ? (
        <h2 className="winner-text">
          {currentWinner ? `Winner: ${currentWinner === "X" ? "Player 1 (X)" : "Player 2 (O)"}` : "It's a Draw!"}
        </h2>
      ) : (
        <h2>Turn: {isXNext ? "Player 1 (X)" : "Player 2 (O)"}</h2>
      )}

      <Board 
        onGameEnd={handleGameEnd} 
        isXNext={isXNext} 
        setIsXNext={setIsXNext} 
        gameOver={gameOver} 
        board={board} 
        setBoard={setBoard} 
        winningSquares={winningSquares}
      />

      {gameOver && (
        <button className="new-game-btn" onClick={resetGame}>New Game</button>
      )}

      {/* Display Game History Once */}
      <div className="game-history">
        <h2>Game History</h2>
        {history.length === 0 ? (
          <p>No games played yet.</p>
        ) : (
          history.map((winner, index) => (
            <p key={index}>Game {index + 1}: Winner - {winner === "X" ? "Player 1 (X)" : "Player 2 (O)"}</p>
          ))
        )}
      </div>
    </div>
  );
};

export default Game;
