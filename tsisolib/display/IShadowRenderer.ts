/// <reference path="../core/IIsoContainer.ts"/>
/// <reference path="../../typings/createjs/createjs.d.ts"/>
module tsisolib.display {
    export interface IShadowRenderer {
        shadowColor:string;
        drawAll:boolean;
        render(container:core.IIsoContainer):createjs.DisplayObject;
    }
}
