/// <reference path="../../typings/createjs/createjs.d.ts"/>
/// <reference path="../bounds/IBounds.ts"/>
module tsisolib.core {
    export interface IIsoDisplayObject {
        x:number;
        y:number;
        z:number;
        width:number;
        length:number;
        height:number;
        parent:IIsoDisplayObject;
        renderData:createjs.DisplayObject;
        bounds:bounds.IBounds;
        render():createjs.DisplayObject;
        moveTo(x:number, y:number, z:number);
        setSize(width:number, length:number, height:number);
    }
}
