import ghostGenerator from "../factory/GhostGenerator";
import GhostMove from "./GhostMove";

class Ghosts extends GhostMove {
  CreateGhosts() {
    const ghosts = ghostGenerator.get();
    for (let ghost of ghosts) {
      const speed = ghost.speed;
      const position = ghost.position;
      const Class = ghost.Class;
      const Color = ghost.color;
      this.MoveGhosts(speed, position, Class, Color);
    }
  }
}

const ghosts = new Ghosts();

export default ghosts;
