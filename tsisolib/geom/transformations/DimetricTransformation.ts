/// <reference path="IAxonometricTransformation.ts"/>
/// <reference path="../Point.ts"/>
module tsisolib.geom.transformations {
    export class DimetricTransformation implements IAxonometricTransformation {
        screenToSpace(p:Point):Point {
            return null;
        }
        spaceToScreen(p:Point):Point {
            let z:number = p.z;
            let y:number = p.y / 4 - p.z;
            let x:number = p.x - p.y / 2;
            return new Point(x, y, z);
        }
    }
}
