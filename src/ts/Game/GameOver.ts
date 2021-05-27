import { Global } from "../data/GlobalData";
import mapGenerator from "../factory/MapGenerator";
const table = mapGenerator.get();

class GameOver {
  endGame(position: number, random: number) {
    if (
      table[position + random].classList.contains("Player") &&
      Global.GhostScream === false
    ) {
      alert("Game Over");
      setTimeout(() => {
        location.reload();
      }, 500);
    }

    if (Global.GlobalPoints >= 300) {
      alert("You Won");
      Global.GlobalPoints = 0;
      setTimeout(() => location.reload(), 500);
    }
  }
}

const gameOver = new GameOver();
export default gameOver;
