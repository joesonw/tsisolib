/// <reference path="./IIsoDisplayObject.ts"/>
/// <reference path="../display/ShadowRenderer.ts"/>
/// <reference path="../geom/IDepthCalculator.ts"/>
module tsisolib.core {
    export interface IIsoContainer extends IIsoDisplayObject {
        depthCalculator:geom.IDepthCalculator;
        shadowRenderer:display.IShadowRenderer;
        addChild(child:IIsoDisplayObject);
        addChildAt(child:IIsoDisplayObject, index:number);
        hasChild(child:IIsoDisplayObject):boolean;
        children:Array<IIsoDisplayObject>;
        setChildIndex(child:IIsoDisplayObject, index:number);
        removeChild(child:IIsoDisplayObject);
        removeChildAt(index:number);
        removeAll();
    }
}
