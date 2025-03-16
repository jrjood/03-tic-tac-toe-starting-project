import { useState, useEffect } from "react";

export default function GameOver({ winner, onRematch }) {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    setIsHidden(false); // Show the game-over screen when a new winner appears
  }, [winner]);

  function handleRematch() {
    setIsHidden(true); // Fade out the game-over screen
    setTimeout(onRematch, 300); // Wait for animation before resetting game
  }

  return (
    <div id="game-over" className={isHidden ? "hidden" : ""}>
      <h2>Game Over!</h2>
      {winner ? <p>{winner} won!</p> : <p>It's a draw!</p>}
      <p>
        <button onClick={handleRematch}>Rematch!</button>
      </p>
    </div>
  );
}
