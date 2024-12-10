import React, { useState } from "react";
import "./CoinFlipGame.css";
import Confetti from "react-confetti"; // To add confetti animation

function CoinFlipGame() {
  const [flipResult, setFlipResult] = useState(null);
  const [userChoice, setUserChoice] = useState("");
  const [gameMessage, setGameMessage] = useState("");
  const [isFlipping, setIsFlipping] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // Handle user choice (Heads or Tails)
  const handleChoice = (choice) => {
    setUserChoice(choice);
  };

  // Function to simulate coin flip
  const flipCoin = () => {
    setIsFlipping(true);
    setGameMessage("");

    // Simulate coin flip animation
    setTimeout(() => {
      const result = Math.random() > 0.5 ? "Heads" : "Tails";
      setFlipResult(result);
      setIsFlipping(false);

      // Show win or lose message
      if (result === userChoice) {
        setGameMessage("Lucky Ass xD!");
        setShowConfetti(true); // Show confetti on win
      } else {
        setGameMessage("You Lose Fucker!");
        setShowConfetti(false); // No confetti on lose
      }
    }, 2000); // Coin flip animation lasts for 2 seconds
  };

  const handlePlayAgain = () => {
    setFlipResult(null);
    setUserChoice("");
    setGameMessage("");
    setShowConfetti(false);
  };

  return (
    <div className="coin-flip-container">
      <h2>$NFLIP Game</h2>

      <p>Choose Your Side Motherfucker:</p>
      <div className="choices">
        <button
          onClick={() => handleChoice("Heads")}
          disabled={isFlipping || flipResult}
        >
          Heads
        </button>
        <button
          onClick={() => handleChoice("Tails")}
          disabled={isFlipping || flipResult}
        >
          Tails
        </button>
      </div>

      {!flipResult && !isFlipping && userChoice && (
        <div className="play-button">
          <button onClick={flipCoin}>Play</button>
        </div>
      )}

      {isFlipping && <div className="coin-flip-animation">Flipping...</div>}

      {flipResult && (
        <div className="result-container">
          <h3>Result: {flipResult}</h3>
          <p>{gameMessage}</p>
        </div>
      )}

      {showConfetti && <Confetti />}

      {flipResult && (
        <div className="play-again">
          <button onClick={handlePlayAgain}>Play Again</button>
        </div>
      )}
    </div>
  );
}

export default CoinFlipGame;
