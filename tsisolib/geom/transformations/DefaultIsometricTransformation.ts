/// <reference path="IAxonometricTransformation.ts"/>
/// <reference path="../Point.ts"/>

module tsisolib.geom.transformations {
    export class DefaultIsometricTransformation implements IAxonometricTransformation {
        private radians:number;
        private ratio:number = 2;
        private projectValuesToAxonometricAxes:boolean;
        private maintainZAxisRatio:boolean;
        private axialProjection:number = Math.cos(Math.atan(0.5));
        constructor(projectValuesToAxonometricAxes:boolean = false, maintainZAxisRatio:boolean = false) {
            this.projectValuesToAxonometricAxes = projectValuesToAxonometricAxes;
            this.maintainZAxisRatio = maintainZAxisRatio;
        }
        screenToSpace(p:Point):Point {
            let z:number = p.z;
            let y:number = p.y - p.x / this.ratio + p.z;
            let x:number = p.x / this.ratio + p.y + p.z;

            if (!this.projectValuesToAxonometricAxes && this.maintainZAxisRatio) {
                z = z * this.axialProjection;
            }
            if (this.projectValuesToAxonometricAxes) {
                x = x / this.axialProjection;
                y = y / this.axialProjection;
            }
            return new Point(x, y, z);
        }
        spaceToScreen(p:Point):Point {
            let Pz:number = p.z;
            let Py:number = p.y;
            let Px:number = p.x;
            if (!this.projectValuesToAxonometricAxes && this.maintainZAxisRatio) {
                Pz = Pz / this.axialProjection;
            }
            if (this.projectValuesToAxonometricAxes) {
                Px = Px * this.axialProjection;
                Py = Py * this.axialProjection;
            }

            let z:number = Pz;
            let y:number = (Px + Py) / this.ratio - Pz;
            let x:number = Px - Py;

            return new Point(x, y, z);
        }
    }
}
