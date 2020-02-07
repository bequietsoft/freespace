export default class Console  {

    static lines = ["Test0", "Test1"];
    static element;

	static init() {

        Console.element = document.createElement("div");
        Console.element) {
            style.position = "absolute";
            style.background = "black";
            style.opacity = 0.5;
            style.borderWidth = "1px";
            style.width="100%";
            style.height="100%";
            style.visibility = false;
        }

        Console.update();
        document.body.appendChild(Console.element);
    }

    static update() {
        Console.element.innerHtml = "";
        Console.lines.forEach(line => {
            Console.element.innerHtml += line + "<br>";
        });
    }

}