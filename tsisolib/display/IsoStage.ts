/// <reference path="../core/IsoContainer.ts"/>
/// <reference path="../../typings/createjs/createjs.d.ts"/>
/// <reference path="../../typings/createjs/createjs.d.ts"/>
/// <reference path="./IsoScene.ts"/>
/// <reference path="../primitive/IsoRectangle.ts"/>
/// <reference path="../core/IIsoContainer.ts"/>
/// <reference path="../core/ICamera.ts"/>
/// <reference path="../events/MouseEvent.ts"/>
/// <reference path="../core/Camera.ts"/>
/// <reference path="../events/KeyboardEvent.ts"/>


module tsisolib.display {
    export class IsoStage extends core.IsoContainer {
        private _camera:core.ICamera;
        private _stage:createjs.Stage;

        get stage():createjs.Stage {
            return this._stage;
        }

        constructor(width:number, height:number, element:string) {
            super();
            this._stage = new createjs.Stage(element);
            this._camera = new core.Camera(width, height);
            this._width = width;
            this._height = height;
            this._camera.container = this;
            let self = this;

            (this._stage.canvas as HTMLCanvasElement).addEventListener('mousewheel', (e) => {
                self.dispatchEvent(new events.MouseEvent(e));
                return false;
            });

            let targetFlag = false;

            document.addEventListener('mousedown', (e: MouseEvent) => {
                if (e.target == self.stage.canvas) {
                    if (targetFlag) {
                        // dispatch mouse event;
                        return false;
                    }
                    targetFlag = true;
                } else {
                    targetFlag = false;
                }
            });

            document.addEventListener('keydown', (e: KeyboardEvent) => {
                if (targetFlag) {
                    self.dispatchEvent(new events.KeyboardEvent(e));
                }
                return false;
            });
        }

        get camera():core.ICamera {
            return this._camera;
        }

        update() {
            if (this._stage.numChildren != 0) {
                this._stage.removeAllChildren();
            }
            this._stage.addChild(this.render());
            this._stage.update();
        }

        render():createjs.DisplayObject {
            if (this._renderData) {
                return this._renderData;
            }
            let container:createjs.Container = new createjs.Container();
            let children = this._children;
            if (this.depthCalculator) {
                children = this.depthCalculator.calculate(children);
            }
            for (let child of children) {
                let d:createjs.DisplayObject = child.render();
                let p:geom.Point = geom.IsoMath.isoToScreen(new geom.Point(child.x, child.y, child.z));
                d.x = p.x;
                d.y = p.y;
                container.addChild(d);
            }
            let shadow = this.shadowRenderer.render(this);
            container.addChildAt(shadow, 1);
            this._renderData = container;
            this._camera.render();
            return container;
        }
    }
}
