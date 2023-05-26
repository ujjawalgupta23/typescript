type Point = {
    x: number;
    y: number;
};

let coordinate: Point = { x: 23, y: 22 };

function randomCoordinate(): Point {
    return { x: 11, y: 10 };
}

function doublePoint(point: Point): Point {
    return { x: point.x * 2, y: point.y * 2 };
}
