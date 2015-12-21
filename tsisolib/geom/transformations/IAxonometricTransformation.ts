
module tsisolib.geom.transformations {
    export interface IAxonometricTransformation {
        screenToSpace(p:Point):Point;
        spaceToScreen(p:Point):Point;
    }
}
