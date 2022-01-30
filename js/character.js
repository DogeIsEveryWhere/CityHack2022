const FACE_UP = 0;
const FACE_DOWN = 1;
const FACE_LEFT = 2;
const FACE_RIGHT = 3;

const leftAnimation = ["img/character/left1.png","img/character/left2.png","img/character/left3.png","img/character/left4.png"];
const rightAnimation = ["img/character/right1.png","img/character/right2.png","img/character/right3.png","img/character/right4.png"]
const upAnimation =["img/character/forward1.png","img/character/forward2.png","img/character/forward3.png"]
const downAnimation =["img/character/backward1.png","img/character/backward2.png","img/character/backward3.png"]
var up=0,down=0,left=0,right=0;
function getleftAnimation(){
        if(left != 3){
         return leftAnimation[left++];
    }else{
        left = 0
        return leftAnimation[left++];
    }


}
function getrightAnimation(){
    if(right != 3){
        return rightAnimation[right++];
    }else{
        right = 0
        return rightAnimation[right++];
    }
    
}
function getupAnimation(){
    if(up != 2){
        return upAnimation[up++];
    }else{
        up = 0
        return upAnimation[up++];
    }
}
function getdownAnimation(){
    if(down != 2){
        return downAnimation[down++];
    }else{
        down = 0
        return downAnimation[down++];
    }
}




var guy=document.getElementById('guy');
var container=document.getElementById('container');
var currDirection = FACE_DOWN;

//var guyLeft=10;
//var guyTop=-5;
var guyLeft = 10; //(10) 270 ~280 school , 
var guyTop = 185;  //(180 ~185) 

function changeAnim(facing) {
    switch(facing) {
        case FACE_LEFT:
            document.querySelector("img#charaImg").src =  getrightAnimation();
            break;
        case FACE_RIGHT:
            document.querySelector("img#charaImg").src = getleftAnimation();
            break;
        case FACE_UP:
            document.querySelector("img#charaImg").src = getdownAnimation();
            break;
        case FACE_DOWN:
            document.querySelector("img#charaImg").src = getupAnimation();
            break;
    }
}

function getRandomIdx(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min);
}

function checkSchoolDoor(){
    if((guyLeft>262 && guyLeft<292)&&(guyTop>162&& guyTop<171)){
        var questionIdx = getRandomIdx(1, 3);
        var gameLocation = `game.html?question=${questionIdx}`;
        location.replace(gameLocation);
    }
}


function anim(e){
    checkSchoolDoor();
    if(e.keyCode==39){ // left
        if(guyLeft >640){
            guyLeft = 640;
        }else{
            guyLeft+=3;
            guy.style.left=guyLeft+'px';
            changeAnim(FACE_LEFT);
            currDirection = FACE_LEFT;
        }

    }
    if (e.keyCode==37) { // right
        if(guyLeft <-15){
            guyLeft = -15;
        }else{
            guyLeft-=3;
            guy.style.left=guyLeft+'px';
            changeAnim(FACE_RIGHT);
            currDirection = FACE_RIGHT;
        }

    }
    if(e.keyCode==38){
        if(guyTop <165){
            guyTop = 165;
            if(guyTop <-25){
                guyTop = -25;
            }
        }else{
            guyTop-=3;
            guy.style.top=guyTop+'px';
            changeAnim(FACE_DOWN);
            currDirection = FACE_DOWN;
        }

    }
    if (e.keyCode==40) {
        if(guyTop > 290){
            guyTop = 290;
        }else{
            guyTop+=3;
            guy.style.top=guyTop+'px';
            changeAnim(FACE_UP);
            currDirection = FACE_UP;
        }

    }
}

document.onkeydown=anim;
