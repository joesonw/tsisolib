/// <reference path="./IShadowRenderer.ts"/>
/// <reference path="../geom/Point.ts"/>
/// <reference path="../geom/IsoMath.ts"/>
/// <reference path="../core/IIsoDisplayObject.ts"/>
/// <reference path="../../typings/createjs/createjs.d.ts"/>
module tsisolib.display {
    export class ShadowRenderer implements IShadowRenderer{
        shadowColor:string = 'rgba(0, 0, 0, 0.15)';
        drawAll:boolean = false;
        private g:createjs.Graphics;
        render(container:core.IIsoContainer):createjs.DisplayObject {
            this.g = new createjs.Graphics();
            for (let child of container.children) {
                if (this.drawAll) {
                    this.g.beginFill(this.shadowColor);
                    this.draw(child);
                } else {
                    if (child.z > 0) {
                        this.g.beginFill(this.shadowColor);
                        this.draw(child);
                    }
                }
                this.g.endFill();

            }

            return new createjs.Shape(this.g);
        }

        private draw(child:core.IIsoDisplayObject) {
            let bounds = child.bounds;
            let pt:geom.Point;

            pt = geom.IsoMath.isoToScreen(new geom.Point(bounds.left, bounds.back, 0));
            this.g.moveTo(pt.x, pt.y);

            pt = geom.IsoMath.isoToScreen(new geom.Point(bounds.right, bounds.back, 0));
            this.g.lineTo(pt.x, pt.y);

            pt = geom.IsoMath.isoToScreen(new geom.Point(bounds.right, bounds.front, 0));
            this.g.lineTo(pt.x, pt.y);

            pt = geom.IsoMath.isoToScreen(new geom.Point(bounds.left, bounds.front, 0));
            this.g.lineTo(pt.x, pt.y);

            pt = geom.IsoMath.isoToScreen(new geom.Point(bounds.left, bounds.back, 0));
            this.g.lineTo(pt.x, pt.y);
        }

    }
}
