/// <reference path="./Event.ts"/>
/// <reference path="../../typings/createjs/createjs.d.ts"/>

type SystemMouseEvent = MouseEvent;
module tsisolib.events {
    export class MouseEvent extends Event {
        public altKey:boolean;
        public buttonDown:boolean;
        public clickCount:number;
        public commandKey:boolean;
        public controlKey:boolean;
        public delta:number;
        public localX:number;
        public localY:number;
        public movementX:number;
        public movementY:number;
        public shiftKey:number;
        public stageX:number;
        public stageY:number;
        constructor(e) {
            super(Event.MOUSE_SCROLL);
            if (e instanceof WheelEvent) {
                this.delta = e.deltaY;
            }
        }
    }
}
