/// <reference path="../../typings/createjs/createjs.d.ts"/>
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
        render():createjs.DisplayObject;
        moveTo(x:number, y:number, z:number);
        setSize(width:number, length:number, height:number);
    }
}
