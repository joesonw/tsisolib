/// <reference path="../../typings/createjs/createjs.d.ts"/>
/// <reference path="./IFill.ts"/>

module tsisolib.graphics {
    export class Fill implements IFill{
        public color:string;
        constructor(color:string) {
            this.color = color;
        }
        apply(target:createjs.Graphics) {
            target.beginFill(this.color);
        }
    }
}
