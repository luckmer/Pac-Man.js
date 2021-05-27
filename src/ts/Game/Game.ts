import { Global } from "../data/GlobalData";
import Collider from "../Colliders/Collider";
import { Points } from "./import";
import ghosts from "../Ghosts/Ghosts";
import GhostScare from "../Ghosts/ScareGhost";

class Game extends Collider {
  PlayPacMan() {
    this.Collider();
    GhostScare.ScareGhost();
    Points ? (Points.innerHTML = `points: ${Global.GlobalPoints}`) : "";
  }

  set() {
    Global.counter += 1;
    if (Global.counter <= 1) {
      ghosts.CreateGhosts();
      Global.ClearInterval = setInterval(() => this.PlayPacMan(), 300);
    }
  }
}
export default Game;
