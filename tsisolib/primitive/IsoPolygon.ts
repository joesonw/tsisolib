/// <reference path="./IsoPrimitive.ts"/>
/// <reference path="../../typings/createjs/createjs.d.ts"/>
/// <reference path="../graphics/Fill.ts"/>
/// <reference path="../graphics/Stroke.ts"/>
/// <reference path="../graphics/IFill.ts"/>
/// <reference path="../graphics/IStroke.ts"/>
/// <reference path="../geom/Point.ts"/>

module tsisolib.primitive {
    export class IsoPolygon extends IsoPrimitive {

        protected _stroke:graphics.IStroke = null;
        protected _fill:graphics.IFill = null;
        protected points:Array<geom.Point> = [];

        constructor() {
            super();
            this._stroke = new graphics.Stroke();
        }

        set stroke(stroke:graphics.IStroke) {
            this._stroke = stroke;
        }

        set fill(fill:graphics.IFill) {
            this._fill = fill;
        }

        render():createjs.DisplayObject {
            if (this._renderData) {
                return this._renderData;
            }
            let g:createjs.Graphics = new createjs.Graphics();
            let fill:graphics.IFill = this._fill;

            let stroke:graphics.IStroke;

            if (fill) {
                fill.apply(g);
            }
            g.moveTo(this.points[0].x, this.points[0].y);

            let i = 0;
            let l = this.points.length;
            stroke = this._stroke || new graphics.Stroke();
            stroke.apply(g);
            while (i < l) {
                g.lineTo(this.points[i].x, this.points[i].y);
                i++;
            }
            g.lineTo(this.points[0].x, this.points[0].y);
            this._renderData = new createjs.Shape(g);
            return this._renderData;
        }

    }
}
