/// <reference path="../../typings/createjs/createjs.d.ts"/>
/// <reference path="./IStroke.ts"/>

module tsisolib.graphics {
    export class Stroke implements IStroke {
        public weight:number = 1;
        public color:string = '#000000';
        public alpha:number;
        public scaleMode:string;
        public caps:STROKE_CAPS = STROKE_CAPS.BUTT;
        public joints:STROKE_JOINTS = STROKE_JOINTS.MITER;
        public miterLimit:number = 10;
        public ignoreScale:boolean = false;

        apply(target:createjs.Graphics) {
            target.setStrokeStyle(this.weight, this.caps, this.joints, this.miterLimit, this.ignoreScale);
            target.beginStroke(this.color);
        }
    }



}
