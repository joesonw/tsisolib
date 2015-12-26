/// <reference path="./ICamera.ts"/>
/// <reference path="../geom/Point.ts"/>
/// <reference path="./IIsoContainer.ts"/>
/// <reference path="../geom/IsoMath.ts"/>
module tsisolib.core {
    export class Camera implements ICamera {
        private _x:number = 0;
        private _y:number = 0;
        private _scale:number = 1.0;
        private _screenWidth:number = 0;
        private _screenHeight:number = 0;
        private _container:IIsoContainer;

        constructor(width:number, height:number) {
            this._screenWidth = width;
            this._screenHeight = height;
        }

        get scale():number {
            return this._scale;
        }

        set scale(scale:number) {
            this._scale = scale;
            this.render();
        }

        moveTo(x:number, y:number) {
            this._x = x;
            this._y = y;
            this.render();
        }
        get x():number {
            return this._x;
        }
        get y():number {
            return this._y;
        }
        get screenWidth():number {
            return this._screenWidth;
        }
        get screenHeight():number {
            return this._screenHeight;
        }
        set x(x:number) {
            this._x = x;
            this.render();
        }
        set y(y:number) {
            this._y = y;
            this.render();
        }
        set screenWidth(screenWidth:number) {
            this._screenWidth  = screenWidth;
            this.render();
        }
        set screenHeight(screenHeight:number) {
            this._screenHeight = screenHeight;
            this.render();
        }

        get container():IIsoContainer {
            return this._container;
        }
        set container(container:IIsoContainer) {
            this._container = container;
        }
        render() {
            let data = this._container.renderData;
            let p:geom.Point = geom.IsoMath.isoToScreen(new geom.Point(this._x, this._y));
            data.x = this._screenWidth / 2 - p.x;
            data.y = this._screenHeight / 2 - p.y;
            data.scaleX = this._scale;
            data.scaleY = this._scale;
            //this._container.renderData = data;
        }
    }
}
