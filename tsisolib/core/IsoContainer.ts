/// <reference path="./IIsoContainer.ts"/>
/// <reference path="../../typings/createjs/createjs.d.ts"/>
/// <reference path="./IsoDisplayObject.ts"/>
/// <reference path="../geom/IDepthCalculator.ts"/>
/// <reference path="../display/ShadowRenderer.ts"/>
/// <reference path="../display/IShadowRenderer.ts"/>
/// <reference path="../geom/DepthCalculator.ts"/>
/// <reference path="../events/Event.ts"/>
/// <reference path="../bounds/IBounds.ts"/>
/// <reference path="../bounds/ContainerBounds.ts"/>

module tsisolib.core {
    export abstract class IsoContainer extends IsoDisplayObject implements IIsoContainer {
        protected _children:Array<IIsoDisplayObject> = new Array<IIsoDisplayObject>();
        public depthCalculator:geom.IDepthCalculator = new geom.DepthCalculator();
        public shadowRenderer:display.IShadowRenderer = new display.ShadowRenderer();
        get bounds():bounds.IBounds {
            return new bounds.ContainerBounds(this);
        }
        addChild(child:IIsoDisplayObject) {
            this._children.push(child);
            child.parent = this;
            this.flush();
        }
        addChildAt(child:IIsoDisplayObject, index:number) {
            this._children.splice(index, 0 ,child);
            child.parent = this;
            this.flush();
        }
        get children():Array<IIsoDisplayObject> {
            let ret = [];
            for (let child of this._children) {
                ret.push(child);
            }
            return ret;
        }
        hasChild(child:IIsoDisplayObject):boolean {
            for (let c of this._children) {
                if (c == child) {
                    return true;
                }
            }
            return false;
        }
        setChildIndex(child:IIsoDisplayObject, index:number) {
            let i = this.getChildIndex(child);
            if (i == index) return;
            if (i > -1) {
                this._children.splice(i, 1);
                if (index >= this._children.length) {
                    this._children.push(child);
                } else {
                    this._children.splice(index, 0, child);
                }
            }
            this.flush();
        }
        getChildAt(index:number):IIsoDisplayObject {
            return this._children[index] || null;
        }
        getChildIndex(child:IIsoDisplayObject):number {
            let ret = -1;
            let index = 0;
            for (let c of this._children) {
                if (c == child) {
                    ret = index;
                    break;
                }
                index++;
            }
            return ret;
        }
        removeChild(child:IIsoDisplayObject) {
            let i = this.getChildIndex(child);
            if (i > -1) {
                this._children.splice(i, 1);
            }
        }
        removeChildAt(index:number):IIsoDisplayObject {
            let ret:IIsoDisplayObject = null;
            if (index < this._children.length &&
                index >= 0) {
                ret = this._children[index];
                this._children.splice(index, 1);
            }
            this.flush();
            return ret;
        }
        removeAll() {
            for (let child of this._children) {
                child.parent = null;
            }
            this._children = [];
            this.flush();
        }
    }
}
