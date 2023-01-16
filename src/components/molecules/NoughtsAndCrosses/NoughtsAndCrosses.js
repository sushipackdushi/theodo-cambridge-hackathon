import React, { useEffect, useState } from "react";
import "./NoughtsAndCrosses.css";

export default function NoughtsAndCrosses() {
  const [gameState, setGameState] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  function playTurn(squareIndex) {
    var newGameState = [...gameState];
    newGameState[squareIndex] = currentPlayer;
    setGameState(newGameState);
    if (currentPlayer === "X") {
      setCurrentPlayer("O");
    } else {
      setCurrentPlayer("X");
    }
  }
  function checkLine(gameSquares) {
    if (
      gameState[gameSquares[0]] === gameState[gameSquares[1]] &&
      gameState[gameSquares[1]] === gameState[gameSquares[2]]
    ) {
      return gameState[gameSquares[0]];
    }
    return null;
  }
  function checkforWinner() {
    const winningRows = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    var winningPlayer = null;
    winningRows.forEach((row) => {
      const rowWinner = checkLine(row);
      if (rowWinner !== null) {
        winningPlayer = rowWinner;
      }
    });
    return winningPlayer;
  }

  useEffect(() => {
    const possibleWinner = checkforWinner();
    if (possibleWinner !== null) {
      setWinner(possibleWinner);
    }
  }, [gameState]);

  return (
    <div className="boardContainer">
      <div>Current player: {currentPlayer}</div>
      <div className="gameBoard">
        {gameState.map((squareValue, squareIndex) => {
          return (
            <div
              key={squareIndex}
              onClick={() => {
                playTurn(squareIndex);
              }}
              className="gameSquare"
            >
              {squareValue}
            </div>
          );
        })}
      </div>
      {winner !== null && <div>Player {winner} wins!</div>}
    </div>
  );
}
