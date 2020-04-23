//import * as THREE from "./three.module.js"
import { log } from "./tools.js";
import App from "./client.js";

class Keyboard {
    
	static init() {

        Keyboard.keys = [ 
            { code: "Backquote", event: "App.UI.Panel.ShowHide();" } 
            
            //{ code: "Backquote", event: "console.log(App.UI.Console);" } 
        ];

        document.addEventListener("keydown", Keyboard.onkeydown.bind(this));
    }

    static onkeydown(event) {
        if(App.debug) log(event.code);
        Keyboard.keys.forEach(key => {
            if(key.code == event.code) eval(key.event);
        });

        //console.log(App.UI.Panel.element);
    }
}

export default Keyboard;