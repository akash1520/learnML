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

        this.lineBreak = document.createElement("br")
        container.appendChild(this.lineBreak);

        this.undoBtn = document.createElement("button")
        this.undoBtn.innerText="UNDO";
        container.appendChild(this.undoBtn);

        // this.path = [];

        // this.paths = []; //replace by reset()
        // this.isDrawing = false;
        //this.#reDraw() //to disable the button in start


        this.ctx = this.canvas.getContext('2d');
        this.reset()
        this.#addEventListeners() // this is call - related to comment on line 27th, '#' = it's private method, can't be called outside this class.

    }

    reset(){
        this.paths = [];
        this.isDrawing = false;
        this.#redraw()
    }



    #addEventListeners() {
        //this isn't a method which allows you to add event listeners, it simply adds all the event listeners in a single call.
        // and this is definition
        this.canvas.onmousedown = (evt) => {
            const mouse = this.#getMouse(evt)
            this.paths.push([mouse]);
            this.isDrawing = true;
        }

        this.canvas.onmousemove = (evt) => {
            if (this.isDrawing) {
                const mouse = this.#getMouse(evt)
                const lastPath = this.paths[this.paths.length - 1]
                lastPath.push(mouse);
                this.#redraw();
            }
        }

        this.canvas.onmouseup = () => {
            this.isDrawing = false;
        }

        // this.canvas.ontouchstart=(evt)=>{  // can use this but below given code perfomance better
        //     const loc = evt.touches[0];
        //     this.canvas.onmousedown(loc);
        // }

        // this.canvas.ontouchmove = (evt) => {
        //     if (this.isDrawing) {
        //         const loc = evt.touches[0];
        //         this.canvas.onmousemove(loc);
        //     }
        // }

        // this.canvas.ontouchend = () => {
        //     this.canvas.onmouseup()
        // }

        this.canvas.addEventListener('touchstart',(evt)=>{
            const loc = evt.touches[0];
            this.canvas.onmousedown(loc);
        },{passive:true})

        this.canvas.addEventListener('touchmove', (evt) => {
            if (this.isDrawing) {
                const loc = evt.touches[0];
                this.canvas.onmousemove(loc);
            }
        },{passive:true})

        this.canvas.addEventListener('touchend', () => {
            this.canvas.onmouseup()
        },{passive:true})

        this.undoBtn.onclick=()=>{
            this.paths.pop();
            this.#redraw();
        }
    }

    #redraw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        draw.paths(this.ctx, this.paths);
        if(this.paths.length){
            this.undoBtn.disabled=false 
        }else{
            this.undoBtn.disabled=true //disables undo button when last stroke is earsed as well and there's nothing to undo
        }
    }


    #getMouse = (evt) => {
        const rect = this.canvas.getBoundingClientRect();
        return [
            Math.round(evt.clientX - rect.left),
            Math.round(evt.clientY - rect.top)
        ];
    }
    


}


