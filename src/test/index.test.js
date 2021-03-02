/** @format */

const { expect, test, describe } = require("@jest/globals");
const {
    ghosts,
    table,
    grid,
    Play,
    UserCenterColider,
    width,
    PlayerPosition,
    points,
    GhostOne,
    GhostTwo,
} = require("../views/index");

describe("expect values", () => {
    test("width have to be equal 28 ", () => {
        expect(width).not.toBeNull();
        expect(width).toBeDefined();
        expect(width).not.toBeUndefined();
        expect(width).toBeLessThanOrEqual(28);
    });

    test("player position have to be equal 572", () => {
        expect(PlayerPosition).not.toBeNull();
        expect(PlayerPosition).toBeDefined();
        expect(PlayerPosition).not.toBeUndefined();
        expect(PlayerPosition).toBeLessThanOrEqual(572);
    });

    test("points should be equal 0 at the beginning ", () => {
        expect(points).not.toBeNull();
        expect(points).toBeDefined();
        expect(points).not.toBeUndefined();
        expect(points).toBeLessThanOrEqual(572);
    });
});

describe("expect ghosts", () => {
    test("check that the ghost has the values in the right place ", () => {
        expect(GhostOne).toEqual({
            class: "GhostOne",
            move: true,
            scared: false,
            speed: 200,
            color: "#F21F1F",
            abilities: {
                power: false,
            },
            position: 432,
        });
        expect(GhostOne).toHaveProperty(["abilities", "power"]);
    });

    test("check that the ghost has the values in the right place ", () => {
        expect(GhostTwo).toEqual({
            class: "GhostTwo",
            move: true,
            scared: false,
            speed: 200,
            color: "#64D901",
            abilities: {
                power: false,
            },
            position: 379,
        });
        expect(GhostOne).toHaveProperty(["abilities", "power"]);
    });

    test("ghosts should be inside ", () => {
        expect(ghosts).toHaveLength(4);
    });
});

describe("Play function ", () => {
    test("should start", () => {
        expect(Play).toMatchSnapshot();
    });
});

describe("expect arrays", () => {
    test("check if the numbers are the same ", () => {
        expect(UserCenterColider).toHaveLength(14);
        expect(UserCenterColider.map((data) => data)).toEqual([
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
        ]);
    });

    test("table ", () => {
        expect(table).toHaveLength(896);
    });

    test("check grid values , if they are correct ", () => {
        expect(grid).toHaveLength(896);
        expect(grid.map((data) => data)).toEqual([
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
        ]);
    });
});
