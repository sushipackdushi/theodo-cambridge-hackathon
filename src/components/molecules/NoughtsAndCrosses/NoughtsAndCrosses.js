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
    if (winner === null) {
      if (gameState[squareIndex] === null) {
        var newGameState = [...gameState];
        newGameState[squareIndex] = currentPlayer;
        setGameState(newGameState);
        if (currentPlayer === "X") {
          setCurrentPlayer("O");
        } else {
          setCurrentPlayer("X");
        }
      }
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
  function checkForWinner() {
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

  function checkForDraw() {
    var draw = true;
    gameState.forEach((gameSquare) => {
      if (gameSquare === null) {
        draw = false;
      }
    });
    return draw;
  }

  function displayGameText() {
    if (winner === null) {
      return "Current player: " + currentPlayer;
    } else if (winner === "DRAW") {
      return "It's a draw!";
    } else {
      return "Player " + winner + " wins!";
    }
  }

  function resetGame() {
    setGameState([null, null, null, null, null, null, null, null, null]);
    setCurrentPlayer("X");
    setWinner(null);
  }

  useEffect(() => {
    const possibleWinner = checkForWinner();
    if (possibleWinner !== null) {
      setWinner(possibleWinner);
    } else {
      const possibleDraw = checkForDraw();
      if (possibleDraw === true) {
        setWinner("DRAW");
      }
    }
  }, [gameState]);

  return (
    <div className="boardContainer">
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
      <div>{displayGameText()}</div>
      <div>
        <button type="button" onClick={resetGame}>
          Reset Game
        </button>
      </div>
    </div>
  );
}
