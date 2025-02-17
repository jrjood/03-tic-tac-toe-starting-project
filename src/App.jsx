import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

/**
* Renders the main application component which includes players and the game board.
* @example
* App()
* <main>...</main>
* @returns {JSX.Element} The JSX structure of the main application component.
* @description
*   - Contains a div with id 'game-container' which wraps player and game board components.
*   - Utilizes two Player components with initial names "Player 1" and "Player 2", and symbols "X" and "O" respectively.
*   - Includes a GameBoard component for rendering the game area.
*/
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
      log
    </main>
  );
}

export default App;
