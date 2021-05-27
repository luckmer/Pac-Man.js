import mapGenerator from "../factory/MapGenerator";
const table = mapGenerator.get();
import GhostControl from "./GhostControl";
import { Global } from "../data/GlobalData";
import eatGhost from "./EatGhost";

class GhostMove extends GhostControl {
  MoveGhosts(
    speed: number,
    position: number,
    Class: string,
    Color: string
  ): void {
    let randomGhostMove: number[] = [-1, +1, +Global.width, -Global.width];
    let random: number | false | undefined =
      randomGhostMove[Math.floor(Math.random() * randomGhostMove.length)];
    random = this.LetWalk(
      speed,
      random,
      randomGhostMove,
      position,
      Class,
      Color
    );
  }

  LetWalk(
    speed: number,
    random: number,
    randomGhostMove: number[],
    position: number,
    Class: string,
    Color: string
  ) {
    Global.ClearInterval = setInterval(() => {
      Global.ClearTimeOut = setTimeout(() => {
        if (
          !table[position + random].classList.contains(Class) &&
          !table[position + random].classList.contains("wall")
        ) {
          this.controlGhosts(position, random, Class);
          position += random;
          table[position].classList.add(
            Class,
            Global.GhostScream ? "scream" : "ghost"
          );
          table[position].style.background = Global.GhostScream
            ? "#FF004E"
            : Color;
          table[position].classList.remove("space");
          table[position].classList.remove("apple");
        } else
          random =
            randomGhostMove[Math.floor(Math.random() * randomGhostMove.length)];
        eatGhost.DetectUserTouch(position, random, Class);
      }, 100);
    }, speed);

    setTimeout(() => (Global.PlayerAttack = false), 100);

    return random;
  }
}

export default GhostMove;
