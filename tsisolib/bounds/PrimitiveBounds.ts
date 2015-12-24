/// <reference path="./IBounds.ts"/>
/// <reference path="../core/IIsoDisplayObject.ts"/>

module tsisolib.bounds {
    export class PrimitiveBounds implements IBounds {
        private _target:core.IIsoDisplayObject

        constructor(target:core.IIsoDisplayObject) {
            this._target = target;
        }

        get volume():number {
            return this._target.width * this._target.length * this._target.height;
        }

        get width():number {
            return this._target.width;
        }
        get length():number {
            return this._target.length;
        }
        get height():number {
            return this._target.height;
        }

        get left():number {
            return this._target.x;
        }
        get right():number {
            return this._target.x + this._target.width;
        }

        get back():number {
            return this._target.y;
        }
        get front():number {
            return this._target.y + this._target.length;
        }

        get bottom():number {
            return this._target.z;
        }
        get top():number {
            return this._target.z + this._target.height;
        }

        get centerPoint():geom.Point {
            let p = new geom.Point(0, 0, 0);
            p.x = this._target.x + this._target.width / 2;
            p.y = this._target.y + this._target.length / 2;
            p.z = this._target.z + this._target.height / 2;
            return p;
        }
        getPoints():Array<geom.Point> {
            let ret:Array<geom.Point> = [];


            ret.push(new geom.Point(this.left, this.back, this.bottom));
            ret.push(new geom.Point(this.right, this.back, this.bottom));
            ret.push(new geom.Point(this.right, this.front, this.bottom));
            ret.push(new geom.Point(this.left, this.front, this.bottom));

            ret.push(new geom.Point(this.left, this.back, this.top));
            ret.push(new geom.Point(this.right, this.back, this.top));
            ret.push(new geom.Point(this.right, this.front, this.top));
            ret.push(new geom.Point(this.left, this.front, this.top));

            return ret;
        }

        intersects(bounds:IBounds):boolean {
            let p = this.centerPoint;
            if (Math.abs(p.x - bounds.centerPoint.x) <= this._target.width /2 + bounds.width / 2 &&
                Math.abs(p.y - bounds.centerPoint.y) <= this._target.length/2 + bounds.length / 2 &&
                Math.abs(p.z - bounds.centerPoint.z) <= this._target.height/2 + bounds.height / 2) {
                return true;
            }
            return false;
        }
        contains(point:geom.Point):boolean {
            if ((this.left <= this._target.x && this._target.x <= this.right) &&
                (this.back <= this._target.y && this._target.y <= this.front) && 
                (this.bottom <= this._target.z && this._target.z <= this.top)) {
                return true;
            }
            return false;
        }
    }
}
