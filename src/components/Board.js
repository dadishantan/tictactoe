import React from "react";
import "../styles.css"; // Importing CSS file

const Board = ({ onGameEnd, isXNext, setIsXNext, gameOver, board, setBoard, winningSquares }) => {
  
  const handleClick = (index) => {
    if (board[index] || gameOver) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const result = calculateWinner(newBoard);
    if (result) {
      onGameEnd(result.winner, result.line);
    }
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line };
      }
    }
    return null;
  };

  return (
    <div>
      <div className="board">
        {board.map((cell, index) => (
          <button
            key={index}
            className={`cell ${cell} ${winningSquares.includes(index) ? "winning" : ""}`}
            onClick={() => handleClick(index)}
          >
            {cell}
            {winningSquares.includes(index) && <div className="strike-line"></div>}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Board;
