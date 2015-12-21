/// <reference path="../Point.ts"/>
/// <reference path="IAxonometricTransformation.ts"/>
module tsisolib.geom.transformations {
    export class IsometricTransformation implements IAxonometricTransformation {
        private cosTheta:number;
        private sinTheta:number;
        constructor() {
            this.cosTheta = Math.cos(30 * Math.PI / 180);
            this.sinTheta = Math.sin(30 * Math.PI / 180);
        }
        screenToSpace(p:Point):Point {
            let z:number = p.z;
            let y:number = p.y - p.x / (2 * this.cosTheta) + p.z;
            let x:number = p.x / (2 * this.cosTheta) + p.y + p.z;
            return new Point(x, y, z);
        }
        spaceToScreen(p:Point):Point {
            let z:number = p.z;
            let y:number = (p.x + p.y) * this.sinTheta - p.z;
            let x:number = (p.x - p.y) * this.cosTheta;
            return new Point(x, y, z);
        }
    }
}
