/// <reference path="../../typings/createjs/createjs.d.ts"/>

module tsisolib.graphics {
    export interface IStroke {
        weight:number;
        color:string;
        alpha:number;
        scaleMode;
        caps:STROKE_CAPS;
        joints:STROKE_JOINTS;
        miterLimit:number;
        ignoreScale:boolean;
        apply(target:createjs.Graphics);
    }
    export enum STROKE_CAPS {
        BUTT,
        ROUND,
        SQUARE
    }

    export enum STROKE_JOINTS {
        MITER,
        ROUND,
        BEVEL
    }
}
