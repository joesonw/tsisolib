export declare module tsisolib.geom {
    class Point {
        x: number;
        y: number;
        z: number;
        constructor(x: number, y: number, z?: number);
        static distance(a: Point, b: Point): number;
        static theta(a: Point, b: Point): number;
        static angle(a: Point, b: Point): number;
        static polar(p: Point, radius: number, theta?: number): Point;
        static interpolate(a: Point, b: Point, f: number): Point;
        length: number;
    }
}
