/// <reference path="../../typings/createjs/createjs.d.ts"/>
module tsisolib.events {
    export class Event extends createjs.Event {
        static MOUSE_SCROLL:string = 'scroll';
        static KEY_DOWN:string = 'keydown';
        static RENDER:string = 'render';
        static MOVE:string = 'move';
        constructor(type: string, bubbles: boolean = false, cancelable: boolean = false) {
            super(type, bubbles, cancelable);
        }
    }
}
