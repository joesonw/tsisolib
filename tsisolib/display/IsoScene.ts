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
            for (let child of children) {
                let d:createjs.DisplayObject = child.render();
                let p:geom.Point = geom.IsoMath.isoToScreen(new geom.Point(child.x, child.y, child.z));
                d.x = p.x;
                d.y = p.y;
                container.addChild(d);
            }
            this._renderData = container;
            return container;
        }
    }
}
