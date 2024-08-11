import React, { useState } from "react";
import SqaureBoxContainer from "./SqaureBoxContainer";
import { CheckWinner } from "./Common/functions/CheckWinner";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [size, setSize] = useState(3);
  const [currentSquares, setCurrentSquares] = useState(
    Array(size).fill(Array(size).fill(null))
  );
  const [currentMove, setCurrentMove] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const handleBoxSize = (e) => {
    const newSize = parseInt(e.target.value);
    setSize(newSize);
    setCurrentSquares(Array(newSize).fill(Array(newSize).fill(null)));
    setXIsNext(true);
  };

  const handleBoxClick = (row, colummn) => {
    const newSquare = currentSquares.map((square) => square.slice());
    console.log(newSquare);
    if (CheckWinner(newSquare, size) || newSquare[row][colummn]) return;
    newSquare[row][colummn] = xIsNext ? "X" : "O";
    setCurrentSquares(newSquare);
    setXIsNext(!xIsNext);
    const nextHistory = [...history.slice(0, currentMove + 1), row];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const winner = CheckWinner(currentSquares, size);
  let isDraw = true;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (currentSquares[i][j] === null) {
        isDraw = false;
        break;
      }
    }
    if (!isDraw) break;
  }
 
  // Copy from the tictactoe example provided by the interviewer -start
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  //  Copy from the tictactoe example provided by the interviewer -end
  return (
    <div>
      <input type="number" value={size} onChange={handleBoxSize} min="3" />
      <div className="game">
        <div className="game-board">
          <SqaureBoxContainer
            squares={currentSquares}
            handleBoxClick={handleBoxClick}
          />
        </div>
        <div className="game-info">
          <ol>
            {winner
              ? `Winner: ${winner}`
              : isDraw
              ? "Draw"
              : `Next player: ${xIsNext ? "X" : "O"}`}
          </ol>
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  );
};

export default Game;
