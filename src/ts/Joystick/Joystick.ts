import { Global } from "../data/GlobalData";

class Joystick {
  Move(way: string) {
    Global.ColliderWay = way;
  }

  Control(e: KeyboardEvent) {
    const code = e.keyCode;

    if (code === 87) {
      this.Move("top");
    } else if (code === 83) {
      this.Move("bottom");
    } else if (code === 68) {
      this.Move("right");
    } else if (code === 65) {
      this.Move("left");
    }
  }
}

export default Joystick;
