module tsisolib.geom {
    export class Point {
        public x:number = 0;
        public y:number = 0;
        public z:number = 0;

        constructor(x:number, y:number, z:number = 0) {
            this.x = x;
            this.y = y;
            this.z = z;
        }

        static distance(a:Point, b:Point):number {
            let tx:number = b.x - a.x;
            let ty:number = b.y - a.y;
            let tz:number = b.z - a.z;
            return Math.sqrt(tx * tx + ty * ty + tz * tz);
        }
        static theta(a:Point, b:Point):number {
            let tx:number = b.x - a.x;
            let ty:number = b.y - a.y;
            let rad:number = Math.atan(ty / tx);
            if (tx < 0) {
                rad += Math.PI;
            }
            if (tx >= 0 && ty < 0) {
                rad += Math.PI * 2;
            }
            return rad;
        }
        static angle(a:Point, b:Point):number {
            return Point.theta(a, b) * 180 / Math.PI;
        }
        static polar(p:Point, radius:number, theta:number = 0):Point {
            let tx = p.x + Math.cos(theta) * radius;
            let ty = p.y + Math.sin(theta) * radius;
            let tz = p.z;
            return new Point(tx, ty, tz);
        }
        static interpolate(a:Point, b:Point, f:number):Point {
            if (f <= 0) {
                return a;
            }
            if (f >= 1) {
                return b;
            }
            let nx = (b.x - a.x) * f + a.x;
            let ny = (b.y - a.y) * f + a.y;
            let nz = (b.z - a.z) * f + a.z;

            return new Point(nx, ny, nz);
        }
        get length():number {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        }
    }
}
