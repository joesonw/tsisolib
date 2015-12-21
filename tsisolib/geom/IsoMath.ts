/// <reference path="Point.ts"/>
/// <reference path="transformations/DefaultIsometricTransformation.ts"/>
/// <reference path="transformations/IAxonometricTransformation.ts"/>
module tsisolib.geom {
    export class IsoMath {
        private static transformationObj:transformations.IAxonometricTransformation = new transformations.DefaultIsometricTransformation();
        static get transformationObject():transformations.IAxonometricTransformation {
            return this.transformationObj;
        }
        static set transformationObject(value:transformations.IAxonometricTransformation) {
            if (value) {
                this.transformationObj = value;
            } else {
                this.transformationObj = new transformations.DefaultIsometricTransformation();
            }
        }
        static screenToIso(p:Point, createNew:boolean = false): Point {
            let P:Point = this.transformationObj.screenToSpace(p);
            if (createNew) {
                return P;
            } else {
                p.x = P.x;
                p.y = P.y;
                p.z = P.z;
                return p;
            }
        }
        static isoToScreen(p:Point, createNew:boolean = false): Point {
            let P:Point = this.transformationObj.spaceToScreen(p);
            if (createNew) {
                return P;
            } else {
                p.x = P.x;
                p.y = P.y;
                p.z = P.z;
                return p;
            }
        }
        static shrinkScreen(p:Point, x:number, y:number, z:number):Point {
            let offset = this.isoToScreen(new Point(x, y, z));
            //console.log(offset);
            return new Point(p.x - offset.x, p.y - offset.y, p.z - offset.z);
        }
    }
}
