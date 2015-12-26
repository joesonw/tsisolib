/// <reference path="./IIsoDisplayObject.ts"/>
/// <reference path="../../typings/createjs/createjs.d.ts"/>
/// <reference path="../events/Event.ts"/>
/// <reference path="../bounds/IBounds.ts"/>
/// <reference path="../bounds/PrimitiveBounds.ts"/>

module tsisolib.core {
    export abstract class IsoDisplayObject extends createjs.EventDispatcher implements IIsoDisplayObject {
            protected _x:number = 0;
            public parent:IIsoDisplayObject;
            protected _renderData:createjs.DisplayObject;

            get bounds():bounds.IBounds {
                return new bounds.PrimitiveBounds(this);
            }
            get renderData():createjs.DisplayObject {
                return this._renderData;
            }
            set renderData(data:createjs.DisplayObject) {
                this._renderData = data;
            }
            flush() {
                this._renderData = null;
                if (this.parent) this.parent.flush();
            }
    		get x():number {
    			return this._x;
    		}
    		set x(x:number) {
    			this._x = x;
                if (this._renderData && this.parent) {
                    this.parent.renderData = null;
                    this.parent.render();
                }
    		}

    		protected _y:number = 0;
    		get y():number {
    			return this._y;
    		}
    		set y(y:number) {
    			this._y = y;
                if (this._renderData && this.parent) {
                    this.parent.renderData = null;
                    this.parent.render();
                }
    		}

    		protected _z:number = 0;
    		get z():number {
    			return this._z;
    		}
    		set z(z:number) {
    			this._z = z;
                if (this._renderData && this.parent) {
                    this.parent.renderData = null;
                    this.parent.render();
                }
    		}

    		protected _width:number = 0;
    		get width():number {
    			return this._width;
    		}
    		set width(width:number) {
    			this._width = width;
                if (this._renderData && this.parent) {
                    this._renderData = null;
                    this.parent.renderData = null;
                    this.parent.render();
                }
    		}

    		protected _height:number = 0;
    		get height():number {
    			return this._height;
    		}
    		set height(height:number) {
    			this._height = height;
                if (this._renderData && this.parent) {
                    this._renderData = null;
                    this.parent.renderData = null;
                    this.parent.render();
                }
    		}

    		protected _length:number = 0;
    		get length():number {
    			return this._length;
    		}
    		set length(length:number) {
    			this._length = length;
                if (this._renderData && this.parent) {
                    this._renderData = null;
                    this.parent.renderData = null;
                    this.parent.render();
                }
    		}
            abstract render():createjs.DisplayObject;

            moveTo(x:number, y:number, z:number) {
                this._x = x;
                this._y = y;
                this._z = z;
                if (this._renderData && this.parent) {
                    this.parent.renderData = null;
                    this.parent.render();
                }
            }
            setSize(width:number, length:number, height:number) {
                this._width = width;
                this._length = length;
                this._height = height;
                if (this._renderData && this.parent) {
                    this._renderData = null;
                    this.parent.renderData = null;
                    this.parent.render();
                }
            }
    }
}
