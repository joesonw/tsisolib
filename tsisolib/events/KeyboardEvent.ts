/// <reference path="./Event.ts"/>

type SystemKeyboardEvent = KeyboardEvent;
module tsisolib.events {
    export class KeyboardEvent extends Event {
        public altKey:boolean;
        public char:string;
        public charCode:number;
        public commandKey:boolean;
        public ctrlKey:boolean;
        public keyCode:number;
        public keyLocation:number;
        public shiftKey:boolean;
        constructor(e:SystemKeyboardEvent) {
            super(Event.KEY_DOWN);
            this.altKey = e.altKey;
            this.charCode = e.charCode;
            this.commandKey = e.metaKey;
            this.ctrlKey = e.ctrlKey;
            this.keyCode = e.keyCode;
            this.keyLocation = e.location;
            this.shiftKey = e.shiftKey;
            this.char = e.char;
        }
    }
}
