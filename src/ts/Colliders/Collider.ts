import { Global } from "../data/GlobalData";
import mapGenerator from "../factory/MapGenerator";
const table = mapGenerator.get();
import JoystickMoves from "../Joystick/JoystickMoves";

class Collider extends JoystickMoves {
  Clean() {
    table[Global.PlayerPosition].classList.remove("Player");
    table[Global.PlayerPosition].classList.add("EmptySpace");
  }
  Create() {
    table[Global.PlayerPosition].className = "Player";
  }

  LeftRight(Way: string, Blocker: number[]) {
    this.Clean();
    if (Way.includes("left")) this.Left(Blocker);
    if (Way.includes("right")) this.Right(Blocker);
    this.Create();
  }

  TopBottom(Way: string, Blocker: number[]) {
    this.Clean();
    if (Way.includes("bottom")) this.Bottom(Blocker);
    if (Way.includes("top")) this.Top(Blocker);
    this.Create();
  }

  Collider() {
    const Blocker = Global.UserCenterCollider.map((el) => el);
    this.LeftRight(Global.ColliderWay, Blocker);
    this.TopBottom(Global.ColliderWay, Blocker);
  }
}
export default Collider;
