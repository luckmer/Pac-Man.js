class Ghost {
  public class: string;
  public move: boolean;
  public scared: boolean;
  public speed: number;
  public abilities: { power: boolean };
  public position: number;
  public color: string;

  constructor() {
    this.class = "";
    this.move = true;
    this.scared = false;
    this.speed = 0;
    this.color = "";
    this.abilities = {
      power: false,
    };
    this.position = 0;
  }

  public Create(
    Class: string,
    move: boolean,
    scared: boolean,
    speed: number,
    color: string,
    power: boolean,
    position: number
  ) {
    return {
      Class,
      move,
      scared,
      speed,
      color,
      abilities: {
        power,
      },
      position,
    };
  }
}

class GhostGenerator extends Ghost {
  public ghost: any[];

  constructor() {
    super();
    this.ghost = [];
  }

  set(
    Class: string,
    move: boolean,
    scared: boolean,
    speed: number,
    color: string,
    power: boolean,
    position: number,
    type: number
  ) {
    switch (type) {
      case 1: {
        const create = this.Create(
          Class,
          move,
          scared,
          speed,
          color,
          power,
          position
        );
        this.ghost.push(create);
      }
    }
  }

  get() {
    return this.ghost;
  }
}

const ghostGenerator = new GhostGenerator();

ghostGenerator.set("GhostOne", true, false, 320, "#F21F1F", false, 376, 1);
ghostGenerator.set("GhostTwo", true, false, 320, "#64D901", false, 405, 1);
ghostGenerator.set("GhostThree", true, false, 290, "#F47272", false, 434, 1);
ghostGenerator.set("GhostFour", true, false, 350, "#CF72F4", false, 407, 1);

export default ghostGenerator;
