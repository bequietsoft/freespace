//import App from "./client.js";

export default class Panel  {

    //static lines = ["Test000000000000000000000000000000000000000000000000000000000000000", "Test1"];
    static element;

	static init() {
        Panel.element = document.createElement("div");
        Panel.element.id = "panel";
        Panel.element.style.position = "fixed";
        Panel.element.style.background = "black";
        Panel.element.style.color = "white";
        Panel.element.style.fontFamily = "Consolas";
        Panel.element.style.width = "400px";
        Panel.element.style.height = "400px";
        Panel.element.style.marginLeft = "-200px";
        Panel.element.style.marginTop = "-200px";
        Panel.element.style.top = "50%";
        Panel.element.style.left = "50%";
        Panel.element.style.opacity = "1";
        Panel.element.style.display = "none";
        

        
        document.body.appendChild(Panel.element);
        Panel.update();
    }

    static update() {
        // Panel.element.innerHTML = "";
        // Panel.lines.forEach(line => {
        //     Panel.element.innerHTML += line + "<br>";
        // });
    }

    static ShowHide() {
        if(Panel.element.style.display == "none") 
            Panel.element.style.display = "block";
        else 
            Panel.element.style.display = "none";
    }
}