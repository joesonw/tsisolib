/// <reference path="../core/IIsoDisplayObject.ts"/>
/// <reference path="../graphics/IFill.ts"/>
/// <reference path="../graphics/IStroke.ts"/>

module tsisolib.primitive {
    export interface IIsoPrimitive extends core.IIsoDisplayObject {
        fill:graphics.IFill;
        stroke:graphics.IStroke;
    }
}
