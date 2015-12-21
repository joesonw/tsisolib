/// <reference path="./IIsoPrimitive.ts"/>
/// <reference path="../graphics/IFill.ts"/>
/// <reference path="../graphics/Fill.ts"/>
/// <reference path="../graphics/IStroke.ts"/>
/// <reference path="../graphics/Stroke.ts"/>
/// <reference path="../core/IsoDisplayObject.ts"/>
/// <reference path="../../typings/createjs/createjs.d.ts"/>

module tsisolib.primitive {
    export abstract class IsoPrimitive extends core.IsoDisplayObject implements IIsoPrimitive {
        get fill():graphics.IFill {
            return null;
        }
        set fill(fill:graphics.IFill) {

        }
        get stroke():graphics.IStroke {
            return null;
        }
        set stroke(stroke:graphics.IStroke) {
        };
    }
}
