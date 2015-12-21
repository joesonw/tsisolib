/// <reference path="./IIsoDisplayObject.ts"/>
module tsisolib.core {
    export interface IIsoContainer extends IIsoDisplayObject {
        depthCalculator:geom.IDepthCalculator;
        addChild(child:IIsoDisplayObject);
        addChildAt(child:IIsoDisplayObject, index:number);
        children:Array<IIsoDisplayObject>;
        setChildIndex(child:IIsoDisplayObject, index:number);
        removeChild(child:IIsoDisplayObject);
        removeChildAt(index:number);
        removeAll();
    }
}
