import Joystick from "./Joystick/Joystick";
import { Play } from "./Game/import";
import Game from "./Game/Game";

const joystick = new Joystick();
const game = new Game();

document.addEventListener("keyup", (e) => joystick.Control(e));
Play?.addEventListener("click", () => game.set());
