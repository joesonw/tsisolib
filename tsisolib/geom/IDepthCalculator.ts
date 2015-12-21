/// <reference path="../core/IIsoDisplayObject.ts"/>
module tsisolib.geom {
    export interface IDepthCalculator {
        calculate(children:Array<core.IIsoDisplayObject>):Array<core.IIsoDisplayObject>;
    }
}
