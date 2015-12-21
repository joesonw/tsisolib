/// <reference path="../../typings/createjs/createjs.d.ts"/>
/// <reference path="./IIsoContainer.ts"/>
module tsisolib.core {
    export interface ICamera {
        x:number;
        y:number;
        screenWidth:number;
        screenHeight:number;
        container:IIsoContainer;
        scale:number;
        moveTo(x:number, y:number);
        render();
    }
}
