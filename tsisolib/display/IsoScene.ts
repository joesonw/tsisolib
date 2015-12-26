/// <reference path="../core/IsoContainer.ts"/>
/// <reference path="../geom/IsoMath.ts"/>
/// <reference path="../geom/Point.ts"/>
/// <reference path="../../typings/createjs/createjs.d.ts"/>
/// <reference path="../geom/DepthCalculator.ts"/>

module tsisolib.display {
    export class IsoScene extends core.IsoContainer {
        render():createjs.DisplayObject {
            if (this._renderData) {
                return this._renderData;
            }
            let container:createjs.Container = new createjs.Container();
            let children = this._children;
            if (this.depthCalculator) {
                children = this.depthCalculator.calculate(children);
            }
            let top:number = -999;
            let bottom:number = 999;
            let right:number = -999;
            let left:number = 999;
            let front:number = -999;
            let back:number = 999;

            for (let child of children) {
                let d:createjs.DisplayObject = child.render();
                let p:geom.Point = geom.IsoMath.isoToScreen(new geom.Point(child.x, child.y, child.z));
                d.x = p.x;
                d.y = p.y;
                top = Math.max(child.z + child.height, top);
                bottom = Math.min(child.z, bottom);
                right = Math.max(child.x + child.width, right);
                left = Math.min(child.x, left);
                front = Math.max(child.y + child.length, front);
                back = Math.min(child.y, back);
                container.addChild(d);
            }
            console.log(top,bottom,right,left,front,back);
            this._renderData = container;
            this._width = right - left;
            this._height = top - bottom;
            this._length = front - back;
            let LB = geom.IsoMath.isoToScreen(new geom.Point(0, front, bottom));
            let R  = geom.IsoMath.isoToScreen(new geom.Point(right, 0, 0));
            let T  = geom.IsoMath.isoToScreen(new geom.Point(right, front, top));
            this._renderData.cache(LB.x, Math.min(LB.y, 0), R.x - LB.x, T.y - Math.min(LB.y, 0));
            return container;
        }
    }
}
