import { Global } from "../data/GlobalData";
import mapGenerator from "../factory/MapGenerator";
const table = mapGenerator.get();

class JoystickMoves {
  Left(Blocker: number[]) {
    if (table[Global.PlayerPosition - 2].classList.contains("space")) {
      Global.GlobalPoints += 1;
    }

    if (
      !table[Global.PlayerPosition - 1].classList.contains("wall") &&
      !Blocker.includes(parseFloat(table[Global.PlayerPosition - 1].id))
    ) {
      Global.PlayerPosition -= 1;
    }
  }

  Right(Blocker: number[]) {
    if (table[Global.PlayerPosition + 2].classList.contains("space")) {
      Global.GlobalPoints += 1;
    }

    if (
      !table[Global.PlayerPosition + 1].classList.contains("wall") &&
      !Blocker.includes(parseFloat(table[Global.PlayerPosition + 1].id))
    ) {
      Global.PlayerPosition += 1;
    }
  }

  Bottom(Blocker: number[]) {
    if (
      table[Global.PlayerPosition + Global.width * 2].classList.contains(
        "space"
      )
    ) {
      Global.points += 1;
    }

    if (
      !table[Global.PlayerPosition + Global.width].classList.contains("wall") &&
      !Blocker.includes(
        parseFloat(table[Global.PlayerPosition + Global.width].id)
      )
    ) {
      Global.PlayerPosition += Global.width;
    }
  }

  Top(Blocker: number[]) {
    if (
      table[Global.PlayerPosition - Global.width - 28].classList.contains(
        "space"
      )
    ) {
      Global.points += 1;
    }
    if (
      !table[Global.PlayerPosition - Global.width].classList.contains("wall") &&
      !Blocker.includes(
        parseFloat(table[Global.PlayerPosition - Global.width].id)
      ) &&
      table[Global.PlayerPosition - Global.width].className !== "wall"
    ) {
      Global.PlayerPosition -= Global.width;
    }
  }
}
export default JoystickMoves;
