var tsisolib;
(function (tsisolib) {
    var geom;
    (function (geom) {
        var Point = (function () {
            function Point(x, y, z) {
                if (z === void 0) { z = 0; }
                this.x = 0;
                this.y = 0;
                this.z = 0;
                this.x = x;
                this.y = y;
                this.z = z;
            }
            Point.distance = function (a, b) {
                var tx = b.x - a.x;
                var ty = b.y - a.y;
                var tz = b.z - a.z;
                return Math.sqrt(tx * tx + ty * ty + tz * tz);
            };
            Point.theta = function (a, b) {
                var tx = b.x - a.x;
                var ty = b.y - a.y;
                var rad = Math.atan(ty / tx);
                if (tx < 0) {
                    rad += Math.PI;
                }
                if (tx >= 0 && ty < 0) {
                    rad += Math.PI * 2;
                }
                return rad;
            };
            Point.angle = function (a, b) {
                return Point.theta(a, b) * 180 / Math.PI;
            };
            Point.polar = function (p, radius, theta) {
                if (theta === void 0) { theta = 0; }
                var tx = p.x + Math.cos(theta) * radius;
                var ty = p.y + Math.sin(theta) * radius;
                var tz = p.z;
                return new Point(tx, ty, tz);
            };
            Point.interpolate = function (a, b, f) {
                if (f <= 0) {
                    return a;
                }
                if (f >= 1) {
                    return b;
                }
                var nx = (b.x - a.x) * f + a.x;
                var ny = (b.y - a.y) * f + a.y;
                var nz = (b.z - a.z) * f + a.z;
                return new Point(nx, ny, nz);
            };
            Object.defineProperty(Point.prototype, "length", {
                get: function () {
                    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
                },
                enumerable: true,
                configurable: true
            });
            return Point;
        })();
        geom.Point = Point;
    })(geom = tsisolib.geom || (tsisolib.geom = {}));
})(tsisolib = exports.tsisolib || (exports.tsisolib = {}));
