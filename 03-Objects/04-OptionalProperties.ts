type Point = {
    x: number;
    y: number;
    z?: number; // this will tell TS, that it is not required
};

const point1: Point = { x: 23, y: 9 };
const point2: Point = { x: 8, y: 16, z: 9 };
