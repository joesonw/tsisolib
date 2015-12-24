/// <reference path="./IBounds.ts"/>
/// <reference path="../core/IsoContainer.ts"/>

module tsisolib.bounds {
    export class ContainerBounds implements IBounds {
        private _target:core.IIsoContainer;
        private _excludeAnimatedChildren:boolean = false;
        get volume():number {
            return this._target.width * this._target.length * this._target.height;
        }

        protected _width:number
		get width():number {
            return this._right - this._left;
		}

		protected _length:number
		get length():number {
            return this._front - this._back;
		}

		protected _height:number
		get height():number {
            return this._top - this._bottom;
		}

		protected _left:number
		get left():number {
			return this._left;
		}

		protected _right:number
		get right():number {
			return this._right;
		}

		protected _back:number
		get back():number {
			return this._back;
		}

		protected _front:number
		get front():number {
			return this._front;
		}

		protected _bottom:number
		get bottom():number {
			return this._bottom;
		}

		protected _top:number
		get top():number {
			return this._top;
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

        get excludeAnimatedChildren():boolean {
            return this._excludeAnimatedChildren;
        }
        set excludeAnimatedChildren(v:boolean) {
            this._excludeAnimatedChildren = v;
            this.calculateBounds();
        }


        private calculateBounds() {
            for (let child of this._target.children) {
                if (isNaN(this._left) || child.bounds.left < this._left) {
                    this._left = child.bounds.left;
                }
                if (isNaN(this._right) || child.bounds.right < this._right) {
                    this._right = child.bounds.right;
                }
                if (isNaN(this._back) || child.bounds.back < this._back) {
                    this._back = child.bounds.back;
                }
                if (isNaN(this._front) || child.bounds.front < this._front) {
                    this._front = child.bounds.front;
                }
                if (isNaN(this._bottom) || child.bounds.bottom < this._bottom) {
                    this._bottom = child.bounds.bottom;
                }
                if (isNaN(this._top) || child.bounds.top < this._top) {
                    this._top = child.bounds.top;
                }
            }
            this._left = this._left || 0;
            this._right = this._right|| 0;
            this._back = this._back || 0;
            this._front = this._front || 0;
            this._bottom = this._bottom || 0;
            this._top = this._top || 0;
        }

        constructor(target:core.IIsoContainer) {
            this._target = target;
            this.calculateBounds();
        }
    }

}
