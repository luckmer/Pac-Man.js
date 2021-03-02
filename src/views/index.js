const Map = document.querySelector(".map");
const Points = document.querySelector("h1");
const Play = document.querySelector("button");

let width = 28,
    PlayerPosition = 572,
    points = 0;

const UserCenterColider = [
    381,
    409,
    351,
    437,
    463,
    462,
    461,
    460,
    430,
    402,
    374,
    348,
    349,
    350,
];

const grid = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, // 0  28.length
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, // 1
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, // 2
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 3, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, // 3
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, // 4
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, // 5
    1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, // 6
    1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, // 7
    1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, // 8                   
    1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, // 9
    1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, // 10
    1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, // 11
    1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 4, 4, 4, 4, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, // 12
    1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 4, 4, 4, 4, 4, 4, 4, 4, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, // 13
    1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 4, 4, 4, 4, 4, 4, 4, 4, 0, 1, 1, 0, 0, 0, 0, 0, 3, 1, // 14
    1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 4, 4, 4, 4, 4, 4, 4, 4, 3, 1, 1, 0, 1, 1, 1, 1, 0, 1, // 15 
    1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 4, 4, 4, 4, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, // 16
    1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, // 17
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, // 18
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, // 19
    1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, // 20
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, // 21
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, // 22
    1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, // 23
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, // 24
    1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, // 25
    1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 3, 1, // 26
    1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 3, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, // 27
    1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, // 28
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, // 29
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, // 30
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, // 31 
];

let GhostOne = {
        class: "GhostOne",
        move: true,
        scared: false,
        speed: 200,
        color: "#F21F1F",
        abilities: {
            power: false,
        },
        position: 432,
    },
    
    GhostTwo = {
        class: "GhostTwo",
        move: true,
        scared: false,
        speed: 200,
        color: "#64D901",
        abilities: {
            power: false,
        },
        position: 379,
    },

    GhostThree = {
        class: "GhostThree",
        move: true,
        scared: false,
        speed: 200,
        color: "#F47272",
        abilities: {
            power: false,
        },
        position: 377,
    },

    GhostFour = {
        class: "GhostFour",
        move: true,
        scared: false,
        speed: 200,
        color: "#CF72F4",
        abilities: {
            power: false,
        },
        position: 434,
    };

const ghosts = [GhostOne, GhostTwo, GhostThree, GhostFour];

const table = [];

const createBoard = () => {
    for (let i = 0; i < grid.length; i++) {
        const div = document.createElement("div");
        div.id = i;
        if (Map) Map.appendChild(div);
        table.push(div);
        if (grid[i] === 1) {
            table[i].className = "wall";
        }
        if (grid[i] === 2) {
            table[i].className = "EmptySpace";
        }
        if (grid[i] === 0) {
            table[i].className = "space";
        }
        if (grid[i] === 3) {
            table[i].className = "apple";
        }
        if (grid[i] === 4) {
            table[i].className = "EmptySpace";
        }
    }
};

createBoard();

const CreateGhosts = () => {
    for (let ghost of ghosts) {
        MoveGhosts(ghost);
    }
};

const ControlGhosts = (ghost, random) => {
    table[ghost.position].classList.remove(ghost.class, "ghost");
    table[ghost.position].style = "";

    if (table[ghost.position + random].classList.contains("space")) {
        table[ghost.position].classList.add("space");
    } else if (table[ghost.position + random].classList.contains("apple")) {
        table[ghost.position].classList.add("apple");
    } else {
        table[ghost.position].classList.add("EmptySpace");
    }

    Over(ghost, random);
};

const MoveGhosts = (ghost) => {
    let randomGhostMove = [-1, +1, +width, -width];
    let random =
        randomGhostMove[Math.floor(Math.random() * randomGhostMove.length)];
    random = LetWalk(ghost, random, randomGhostMove);

    ScareGhosts(ghost, PlayerPosition);
};

const LetWalk = (ghost, random, randomGhostMove) => {
    setInterval(() => {
        if (
            !table[ghost.position + random].classList.contains(ghost.class) &&
            !table[ghost.position + random].classList.contains("wall")
        ) {
            ControlGhosts(ghost, random);
            ghost.position += random;

            table[ghost.position].classList.add(ghost.class, "ghost");
            table[ghost.position].style = `background-color:${
                ghost.scared ? "#FF004E" : ghost.color
            }`;
            table[ghost.position].classList.remove("space");
            table[ghost.position].classList.remove("apple");
        } else
            random =
                randomGhostMove[
                    Math.floor(Math.random() * randomGhostMove.length)
                ];

        DetectUserTouch(ghost, random);
    }, ghost.speed);
    return random;
};

const DetectUserTouch = (ghost, random) => {
    if (table[ghost.position].classList.contains("Player") && ghost.scared) {
        table[ghost.position + random].classList.remove(
            ghost.className,
            "ghost"
        );
        table[ghost.position].style = "";
        ghost.position = 405;
        points += 100;
        table[ghost.position].classList.add(ghost.className, "ghost");
    }
};

const Colider = (way) => {
    let nextTest = UserCenterColider.map((item) => item);
    LeftRight(way, nextTest);
    TopBottom(way, nextTest);
    Points.innerHTML = `points ${points}`;
};

const LeftRight = (way, nextTest) => {
    if (way.includes("left")) {
        if (table[PlayerPosition - 2].classList.contains("space")) {
            points += 1;
        }

        if (
            !table[PlayerPosition - 1].classList.contains("wall") &&
            !nextTest.includes(parseFloat(table[PlayerPosition - 1].id))
        ) {
            PlayerPosition -= 1;
        }
        ScareGhosts(ghosts, PlayerPosition);
    }

    if (way.includes("right")) {
        if (table[PlayerPosition + 2].classList.contains("space")) {
            points += 1;
        }

        if (
            !table[PlayerPosition + 1].classList.contains("wall") &&
            !nextTest.includes(parseFloat(table[PlayerPosition + 1].id))
        ) {
            PlayerPosition += 1;
        }
        ScareGhosts(ghosts, PlayerPosition);
    }
};

const TopBottom = (way, nextTest) => {
    if (way.includes("bottom")) {
        if (table[PlayerPosition + width * 2].classList.contains("space")) {
            points += 1;
        }
        if (
            !table[PlayerPosition + width].classList.contains("wall") &&
            !nextTest.includes(parseFloat(table[PlayerPosition + width].id))
        ) {
            PlayerPosition += width;
        }
        ScareGhosts(ghosts, PlayerPosition);
    }

    if (way.includes("top")) {
        if (table[PlayerPosition - width - 28].classList.contains("space")) {
            points += 1;
        }
        if (
            !table[PlayerPosition - width].classList.contains("wall") &&
            !nextTest.includes(parseFloat(table[PlayerPosition - width].id)) &&
            table[PlayerPosition - width].className !== "wall"
        ) {
            PlayerPosition -= width;
        }
        ScareGhosts(ghosts, PlayerPosition);
    }
};

const ScareGhosts = (ghost, player) => {
    if (
        table[player - width - 28].classList.contains("apple") ||
        table[player + width].classList.contains("apple") ||
        table[player + 2].classList.contains("apple") ||
        table[player - 2].classList.contains("apple")
    ) {
        points += 10;
        ghost.forEach((enemy) => {
            enemy.scared = true;
            if (enemy.scared)
                setTimeout(() => {
                    enemy.scared = false;
                }, 1000 * 10);
        });
    }
};

const Clear = () => {
    table[PlayerPosition].classList.remove("Player");
    table[PlayerPosition].classList.add("EmptySpace");
};

const MoveUp = () => {
    Clear();
    Colider("top");
    table[PlayerPosition].className = "Player";
};

const MoveDown = () => {
    Clear();
    Colider("bottom");
    table[PlayerPosition].className = "Player";
};

const MoveLeft = () => {
    Clear();
    Colider("left");
    table[PlayerPosition].className = "Player";
};

const MoveRight = () => {
    Clear();
    Colider("right");
    table[PlayerPosition].className = "Player";
};

const joystick = (e) => {
    if (e.keyCode === 38) {
        MoveUp();
    } else if (e.keyCode === 40) {
        MoveDown();
    } else if (e.keyCode === 37) {
        MoveLeft();
    } else if (e.keyCode === 39) {
        MoveRight();
    }
};

const CreatePlayer = () => {
    table[PlayerPosition].className = "Player";
};

const Over = (ghost, random) => {
    if (
        table[ghost.position + random].classList.contains("Player") &&
        ghost.scared === false
    ) {
        alert("Game Over");
        document.removeEventListener("keyup", joystick);
        setTimeout(() => {
            location.reload();
        }, 500);
    }
};

const Winner = () => {
    if (Points >= 400) {
        Points.innerHTML = `Game over`;
        setTimeout(() => {
            location.reload();
        }, 1000);
    }
};

const StartGame = (event) => {
    let StartGame = false;
    event.preventDefault();

    if (!event.detail || (event.detail == 1 && StartGame === false)) {
        CreatePlayer();
        CreateGhosts();
        Winner();
        document.addEventListener("keyup", joystick);
        Play.classList.add("disabled");
        StartGame = true;
    } else StartGame = false;
};

if (Play) {
    Play.addEventListener("click", StartGame);
}

exports.ghosts = ghosts;
exports.table = table;
exports.grid = grid;
exports.UserCenterColider = UserCenterColider;
exports.width = width;
exports.PlayerPosition = PlayerPosition;
exports.points = points;
exports.GhostOne = GhostOne;
exports.GhostTwo = GhostTwo;
exports.Play = Play;
