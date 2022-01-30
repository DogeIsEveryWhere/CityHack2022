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

    // require cookies
    balanceLoading(){
        const balanceImage = new Image();
        balanceImage.src = "./img/object/balance.png";
        balanceImage.onload = () =>{
            this.context.drawImage(balanceImage,575,5);
        }
    }

    balanceNumberLoading(){
        var currentBalance = 123; //cookies (now set to 000)
        var tempBalance =currentBalance;
        var widthX = 16; // 16 pixel 
        var heightY = 16; // 16 pixel 
        var Xlocation = 645; // - 15 per
        var Ylocation = 13;       
        const scale = 1;
        var balanceNumberSprite = new Image(); // 999 = 789%10 = 9 . 999/=10 %10 = 8
        // 0 ~ 9 inital 000 ~ 999 ( if >999 notice will not get money )
        balanceNumberSprite.src ="./img/object/number.png";
        var decimalPlace = [3];
        for(let i=0; i<3; i++){
            decimalPlace[i] = tempBalance%10;
            tempBalance/=10;
            tempBalance = parseInt(tempBalance,10);
        }
        setInterval(() =>{
            //this.context.drawImage(balanceNumberSprite,0,0,16,16,13,13,16,16);
            this.context.drawImage(balanceNumberSprite,decimalPlace[0]*16,0,16,16,Xlocation,Ylocation,widthX,heightY);
            this.context.drawImage(balanceNumberSprite,decimalPlace[1]*16,0,16,16,Xlocation-15,Ylocation,widthX,heightY);
            this.context.drawImage(balanceNumberSprite,decimalPlace[2]*16,0,16,16,Xlocation-30,Ylocation,widthX,heightY);
        },1000);
    }

    
}