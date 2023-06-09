class SketchPad {
    constructor(container, size = 400) {
        this.canvas = document.createElement("canvas");  // "this" keyword references to the object instanciated upon calling the constructor
        this.canvas.width = size;
        this.canvas.height = size;
        this.canvas.style = `
        background-color:white;
        box-shadow:0px 0px 10px 2px black;
        `;
        container.appendChild(this.canvas);

        this.ctx = this.canvas.getContext('2d');
        this.#addEventListeners() // this is call - related to comment on line 27th, '#' = it's private method, can't be called outside this class.
        this.path = [];
        this.isDrawing = false;
    }

  

    #addEventListeners() { 
        //this isn't a method which allows you to add event listeners, it simply adds all the event listeners in a single call.
        // and this is definition
        this.canvas.onmousedown = (evt) => {
            const mouse = this.#getMouse(evt)
            this.path = [mouse];
            this.isDrawing = true;
        }

        this.canvas.onmousemove = (evt) => {
            if (this.isDrawing) {
                const mouse = this.#getMouse(evt)
                this.path.push(mouse);
                console.log(this.path.length);
                this.#redraw();
            }
        }

        this.canvas.onmouseup = () => {
            this.isDrawing = false;
        }
    }

    #redraw(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        draw.path(this.ctx,this.path);
    }


    #getMouse = (evt) => {
        const rect = this.canvas.getBoundingClientRect();
        return [
            Math.round(evt.clientX - rect.left),
            Math.round(evt.clientY - rect.top)
        ];
}


}


