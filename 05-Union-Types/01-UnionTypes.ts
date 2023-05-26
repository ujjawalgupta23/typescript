/**
 * Union types allows us to give a value a few different value types
 */

let age: number | string = 23;
age++;
age = "Twenty Three";

type Point = {
    x: number;
    y: number;
};

type LatLon = {
    latitude: number;
    longitue: number;
};

let coordinates: Point | LatLon = { x: 23, y: 22 };
coordinates = { latitude: 23.22, longitue: 22.23 };
