class world{
    constructor(config){
        this.element = config.element;
        this.canvas = document.getElementById("canvas_game");
        this.context = this.canvas.getContext("2d");
    }
    bgLoading(){
        const image = new Image();
        image.src = "img/background/newBackground.png";
        image.onload = () =>{
            this.context.drawImage(image,0,0);
        };

        
    }




    
}