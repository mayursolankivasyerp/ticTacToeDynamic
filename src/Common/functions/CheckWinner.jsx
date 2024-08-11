export const CheckWinner = (gameBoard, boardSize) => {
   for (let i = 0; i < boardSize; i++) {
      let winner = gameBoard[i][0];
      if (winner && gameBoard[i].every((cell) => cell === winner)) {
        return winner;
      }
    }
    for (let i = 0; i < boardSize; i++) {
      let winner = gameBoard[0][i];
      if (winner) {
        let columnWin = true;
        for (let j = 1; j < boardSize; j++) {
          if (gameBoard[j][i] !== winner) {
            columnWin = false;
            break;
          }
        }
        if (columnWin) {
          return winner;
        }
      }
    }
    let winner = gameBoard[0][0];
    if (winner) {
      let diagonalWin = true;
      for (let i = 1; i < boardSize; i++) {
        if (gameBoard[i][i] !== winner) {
          diagonalWin = false;
          break;
        }
      }
      if (diagonalWin) {
        return winner;
      }
    }
    winner = gameBoard[0][boardSize - 1];
    if (winner) {
      let reverseDiagonalWin = true;
      for (let i = 1; i < boardSize; i++) {
        if (gameBoard[i][boardSize - 1 - i] !== winner) {
            reverseDiagonalWin = false;
          break;
        }
      }
      if (reverseDiagonalWin) {
        return winner;
      }
    }
  
    return null;
  };
  