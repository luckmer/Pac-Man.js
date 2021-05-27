import mapGenerator from "../factory/MapGenerator";
import GameOver from "../Game/GameOver";
const table = mapGenerator.get();

class GhostControl {
  controlGhosts(position: number, random: number, Class: string) {
    table[position].classList.remove(Class, "ghost");
    table[position].style.background = "";
    if (table[position + random].classList.contains("space")) {
      table[position].classList.add("space");
    } else if (table[position + random].classList.contains("apple")) {
      table[position].classList.add("apple");
    } else table[position].classList.add("EmptySpace");
    GameOver.endGame(position, random);
  }
}

export default GhostControl;
