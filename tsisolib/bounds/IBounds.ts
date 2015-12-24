/// <reference path="../geom/Point.ts"/>
module tsisolib.bounds {
    export interface IBounds {
        volume:number;

        width:number;
        length:number;
        height:number;

        left:number;
        right:number;

        back:number;
        front:number;

        bottom:number;
        top:number;

        centerPoint:geom.Point;
        getPoints():Array<geom.Point>;

        intersects(bounds:IBounds):boolean;
        contains(point:geom.Point):boolean;
    }
}
