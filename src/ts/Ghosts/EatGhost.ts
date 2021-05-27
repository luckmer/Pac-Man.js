import { Global } from "../data/GlobalData";
import mapGenerator from "../factory/MapGenerator";
const table = mapGenerator.get();

class EatGhost {
  DetectUserTouch(position: number, random: number, Class: string) {
    setTimeout(() => {
      if (table[Global.PlayerPosition].classList.contains("scream")) {
        table[position + random].classList.remove(Class, "ghost");
        table[position].style.background = "";
        position = 405;
        Global.GlobalPoints += 100;
        table[position + random].classList.add(Class, "ghost");
      }
    }, 50);
  }
}

const eatGhost = new EatGhost();
export default eatGhost;
