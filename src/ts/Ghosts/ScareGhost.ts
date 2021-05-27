import mapGenerator from "../factory/MapGenerator";
const table = mapGenerator.get();
import { Global } from "../data/GlobalData";

class GhostScare {
  ScareGhost() {
    if (
      table[Global.PlayerPosition - Global.width - 28].classList.contains(
        "apple"
      ) ||
      table[Global.PlayerPosition + Global.width].classList.contains("apple") ||
      table[Global.PlayerPosition + 1].classList.contains("apple") ||
      table[Global.PlayerPosition - 1].classList.contains("apple")
    ) {
      Global.GhostScream = true;
      const timer: number = 1000 * 10;

      if (Global.GhostScream) {
        setTimeout(() => (Global.GhostScream = false), timer);
      }
    }
  }
}

const ghostScare = new GhostScare();

export default ghostScare;
