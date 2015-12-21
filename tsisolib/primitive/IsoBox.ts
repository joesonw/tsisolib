/// <reference path="./IsoPrimitive.ts"/>
/// <reference path="../../typings/createjs/createjs.d.ts"/>
/// <reference path="../geom/Point.ts"/>
/// <reference path="../geom/IsoMath.ts"/>
/// <reference path="../graphics/IStroke.ts"/>
/// <reference path="../graphics/Stroke.ts"/>
/// <reference path="../graphics/IFill.ts"/>
/// <reference path="../graphics/Fill.ts"/>
/// <reference path="../events/Event.ts"/>

module tsisolib.primitive {
    export class IsoBox extends IsoPrimitive {
        private strokes:Array<graphics.IStroke>
        private fills:Array<graphics.IFill>
        constructor() {
            super();
            let stroke = new graphics.Stroke();
            this.strokes = [stroke, stroke, stroke, stroke, stroke, stroke];
            let fill = new graphics.Fill('rgba(55, 66, 82, 0.5)');
            this.fills = [fill, fill, fill, fill, fill, fill];
        }

        set stroke(stroke:graphics.IStroke) {
            this.strokes = [stroke, stroke, stroke, stroke, stroke, stroke];
        }

        set fill(fill:graphics.IFill) {
            this.fills = [fill, fill, fill, fill, fill, fill];
        }

        setFill(index:number, fill:graphics.IFill) {
            index = parseInt(index as any);
            if (index < 6 && index >= 0) {
                this.fills[index] = fill;
            }
        }

        render():createjs.DisplayObject {
            if (this._renderData) {
                return this._renderData;
            }
            console.log('rendering box');
            let g:createjs.Graphics = new createjs.Graphics();
            let lbb:geom.Point = geom.IsoMath.isoToScreen(new geom.Point(0, 0, 0));
            let rbb:geom.Point = geom.IsoMath.isoToScreen(new geom.Point(this._width, 0, 0));
            let rfb:geom.Point = geom.IsoMath.isoToScreen(new geom.Point(this._width, this._length, 0));
            let lfb:geom.Point = geom.IsoMath.isoToScreen(new geom.Point(0, this._length, 0));

            let lbt:geom.Point = geom.IsoMath.isoToScreen(new geom.Point(0, 0, this._height));
            let rbt:geom.Point = geom.IsoMath.isoToScreen(new geom.Point(this._width, 0, this._height));
            let rft:geom.Point = geom.IsoMath.isoToScreen(new geom.Point(this._width, this._length, this._height));
            let lft:geom.Point = geom.IsoMath.isoToScreen(new geom.Point(0, this._length, this._height));


            let fill:graphics.IFill;
            let stroke:graphics.IStroke;

            let tl:geom.Point;
            let tr:geom.Point;
            let bl:geom.Point;
            let br:geom.Point;

            // bottom face

            fill = this.fills[5];
            stroke = this.strokes[5] || new graphics.Stroke();

            stroke.apply(g);
            g.moveTo(lbb.x, lbb.y);
            g.lineTo(rbb.x, rbb.y);
            g.lineTo(rfb.x, rfb.y);
            g.lineTo(lfb.x, lfb.y);
            g.lineTo(lbb.x, lbb.y);

            g.endStroke();
            if (fill) {
                fill.apply(g);
                bl = geom.IsoMath.shrinkScreen(lbb, -stroke.weight + 1, -stroke.weight + 1, 0);
                br = geom.IsoMath.shrinkScreen(rbb, stroke.weight - 1, -stroke.weight + 1, 0);
                tr = geom.IsoMath.shrinkScreen(rfb, stroke.weight - 1, stroke.weight - 1, 0);
                tl = geom.IsoMath.shrinkScreen(lfb, -stroke.weight + 1, stroke.weight - 1, 0);
                g.moveTo(tl.x, tl.y);
                g.lineTo(tr.x, tr.y);
                g.lineTo(br.x, br.y);
                g.lineTo(bl.x, bl.y);
                g.lineTo(tl.x, tl.y);
                g.endFill();
            }

            // back-left face

            fill = this.fills[4];
            stroke = this.strokes[4] || new graphics.Stroke();

            stroke.apply(g);
            g.moveTo(lbb.x, lbb.y);
            g.lineTo(lfb.x, lfb.y);
            g.lineTo(lft.x, lft.y);
            g.lineTo(lbt.x, lbt.y);
            g.lineTo(lbb.x, lbb.y);

            g.endStroke();

            if (fill) {
                fill.apply(g);
                bl = geom.IsoMath.shrinkScreen(lbb, 0, -stroke.weight + 1, -stroke.weight + 1);
                br = geom.IsoMath.shrinkScreen(lfb, 0, stroke.weight - 1, -stroke.weight + 1);
                tr = geom.IsoMath.shrinkScreen(lft, 0, stroke.weight - 1, stroke.weight - 1);
                tl = geom.IsoMath.shrinkScreen(lbt, 0, -stroke.weight + 1, stroke.weight - 1);
                g.moveTo(tl.x, tl.y);
                g.lineTo(tr.x, tr.y);
                g.lineTo(br.x, br.y);
                g.lineTo(bl.x, bl.y);
                g.lineTo(tl.x, tl.y);
                g.endFill();
            }

            // back-right face

            fill = this.fills[3];
            stroke = this.strokes[3] || new graphics.Stroke();

            stroke.apply(g);
            g.moveTo(lbb.x, lbb.y)
            g.lineTo(rbb.x, rbb.y);
            g.lineTo(rbt.x, rbt.y);
            g.lineTo(lbt.x, lbt.y);
            g.lineTo(lbb.x, lbb.y);

            g.endStroke();
            if (fill) {
                fill.apply(g);
                bl = geom.IsoMath.shrinkScreen(lbb, -stroke.weight + 1, 0, -stroke.weight + 1);
                br = geom.IsoMath.shrinkScreen(rbb, stroke.weight - 1, 0, -stroke.weight + 1);
                tr = geom.IsoMath.shrinkScreen(rbt, stroke.weight - 1, 0, stroke.weight - 1);
                tl = geom.IsoMath.shrinkScreen(lbt, -stroke.weight + 1, 0, stroke.weight - 1);
                g.moveTo(tl.x, tl.y);
                g.lineTo(tr.x, tr.y);
                g.lineTo(br.x, br.y);
                g.lineTo(bl.x, bl.y);
                g.lineTo(tl.x, tl.y);
                g.endFill();
            }

            // fonrt-left face

            fill = this.fills[2];
            stroke = this.strokes[2] || new graphics.Stroke();

            stroke.apply(g);
            g.moveTo(lfb.x, lfb.y);
            g.lineTo(lft.x, lft.y);
            g.lineTo(rft.x, rft.y);
            g.lineTo(rfb.x, rfb.y);
            g.lineTo(lfb.x, lfb.y);
            g.endStroke();

            if (fill) {
                fill.apply(g);
                bl = geom.IsoMath.shrinkScreen(lfb, -stroke.weight + 1, 0, -stroke.weight + 1);
                br = geom.IsoMath.shrinkScreen(lft, -stroke.weight + 1, 0, stroke.weight - 1);
                tr = geom.IsoMath.shrinkScreen(rft, stroke.weight - 1, 0, stroke.weight - 1);
                tl = geom.IsoMath.shrinkScreen(rfb, stroke.weight - 1, 0, -stroke.weight + 1);
                g.moveTo(tl.x, tl.y);
                g.lineTo(tr.x, tr.y);
                g.lineTo(br.x, br.y);
                g.lineTo(bl.x, bl.y);
                g.lineTo(tl.x, tl.y);
                g.endFill();
            }


            // front-right face

            fill = this.fills[1];
            stroke = this.strokes[1] || new graphics.Stroke();

            stroke.apply(g);
            g.moveTo(rbb.x, rbb.y);
            g.lineTo(rfb.x, rfb.y);
            g.lineTo(rft.x, rft.y);
            g.lineTo(rbt.x, rbt.y);
            g.lineTo(rbb.x, rbb.y);

            g.endStroke();

            if (fill) {
                fill.apply(g);
                bl = geom.IsoMath.shrinkScreen(rbb, 0, -stroke.weight + 1, -stroke.weight + 1);
                br = geom.IsoMath.shrinkScreen(rfb, 0, stroke.weight - 1, -stroke.weight + 1);
                tr = geom.IsoMath.shrinkScreen(rft, 0, stroke.weight - 1, stroke.weight - 1);
                tl = geom.IsoMath.shrinkScreen(rbt, 0, -stroke.weight + 1, stroke.weight - 1);
                g.moveTo(tl.x, tl.y);
                g.lineTo(tr.x, tr.y);
                g.lineTo(br.x, br.y);
                g.lineTo(bl.x, bl.y);
                g.lineTo(tl.x, tl.y);
                g.endFill();
            }

            // top face

            fill = this.fills[0];
            stroke = this.strokes[0] || new graphics.Stroke();


            stroke.apply(g);
            g.moveTo(lbt.x, lbt.y);
            g.lineTo(rbt.x, rbt.y);
            g.lineTo(rft.x, rft.y);
            g.lineTo(lft.x, lft.y);
            g.lineTo(lbt.x, lbt.y);
            g.endStroke();

            if (fill) {
                fill.apply(g);
                bl = geom.IsoMath.shrinkScreen(lbt, -stroke.weight + 1, -stroke.weight + 1, 0);
                br = geom.IsoMath.shrinkScreen(rbt, stroke.weight - 1, -stroke.weight + 1, 0);
                tr = geom.IsoMath.shrinkScreen(rft, stroke.weight - 1, stroke.weight - 1, 0);
                tl = geom.IsoMath.shrinkScreen(lft, -stroke.weight + 1, stroke.weight - 1, 0);
                g.moveTo(tl.x, tl.y);
                g.lineTo(tr.x, tr.y);
                g.lineTo(br.x, br.y);
                g.lineTo(bl.x, bl.y);
                g.lineTo(tl.x, tl.y);
                g.endFill();
            }
            this._renderData = new createjs.Shape(g);
            return this._renderData;
        }
    }
}
