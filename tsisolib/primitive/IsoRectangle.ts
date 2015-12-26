/// <reference path="../../typings/createjs/createjs.d.ts"/>
/// <reference path="../graphics/Fill.ts"/>
/// <reference path="../graphics/Stroke.ts"/>
/// <reference path="../graphics/IFill.ts"/>
/// <reference path="../graphics/IStroke.ts"/>
/// <reference path="./IsoPolygon.ts"/>
/// <reference path="../geom/Point.ts"/>
/// <reference path="../geom/IsoMath.ts"/>

module tsisolib.primitive {
    export class IsoRectangle extends IsoPolygon {

        render():createjs.DisplayObject {
            let points:Array<geom.Point> = [];
            points.push(new geom.Point(0, 0));

            if (this._width > 0 && this._length > 0 && this._height <=0) {
                points.push(new geom.Point(this._width, 0, 0));
                points.push(new geom.Point(this._width, this._length, 0));
                points.push(new geom.Point(0, this._length, 0));
            } else if (this._width > 0 && this._length <= 0 && this._height > 0) {
                points.push(new geom.Point(this._width, 0, 0));
                points.push(new geom.Point(this._width, 0, this._height));
                points.push(new geom.Point(0, 0, this._height));
            } else if (this._width <= 0 && this._length >0 && this._height > 0) {
                points.push(new geom.Point(0, this._length, 0));
                points.push(new geom.Point(0, this._length, this._height));
                points.push(new geom.Point(0, 0, this._height));
            }

            this.points = [];
            for (let pt of points) {
                this.points.push(geom.IsoMath.isoToScreen(pt));
            }
            let ret = super.render();
            ret.cache(this.points[3].x, 0, this.points[1].x - this.points[3].x , this.points[2].y);
            return ret;
        }

    }
}
