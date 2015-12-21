/// <reference path="./IDepthCalculator.ts"/>
/// <reference path="../core/IIsoDisplayObject.ts"/>

module tsisolib.geom {
    export class DepthCalculator implements IDepthCalculator {

        private depth:number = 0;
        private visited:Array<boolean> = [];
        private depthList:Array<number> = [];
        private dependency:Array<Array<{index:number, child:core.IIsoDisplayObject}>> = [];

        calculate(children:Array<core.IIsoDisplayObject>):Array<core.IIsoDisplayObject> {
            let ret:Array<core.IIsoDisplayObject> = [];
            let max = children.length;
            for (let i = 0; i < max; i++) {
                this.depthList[i] = i;
                let behind:Array<{index:number, child:core.IIsoDisplayObject}> = [];
                let objA = children[i];

                let rightA = objA.x + objA.width;
                let frontA = objA.y + objA.length;
                let topA = objA.z + objA.height;

                for (let j = 0; j < max; j++) {
                    let objB = children[j];
                    if ((objB.x < rightA) &&
                        (objB.y < frontA) &&
                        (objB.z < topA) &&
                        (i !== j)) {
                            behind.push({index: j,child: objB});
                    }
                }
                this.dependency[i] = behind;
            }


            for (let i = 0; i < max; i++) {
                if (!this.visited[i]) {
                    this.place(i);
                }
            }

            for (let i = 0; i < max; i++) {
                let depth = this.depthList[i];
                ret[depth] = children[i];
            }

            console.log(this.depthList)
            return ret;
        }

        private place(index:number) {
            this.visited[index] = true;
            for (let inner of this.dependency[index]) {
                if (!this.visited[inner.index]) {
                    this.place(inner.index)
                }
            }
            if (this.depth != this.depthList[index]) {
                this.depthList[index] = this.depth;
            }
            this.depth++;
        }
    }
}
