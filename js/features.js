var musicPlayed = false;

/*
var musicButton = $('<input/>').attr({
    type: 'reset',
    name: 'musicButton',
    value: 'musicButton',
    id: 'musicButton',
    style: 'position:absolute; top:50px;left:100px; zindex:2'
    
});
$(musicButton).css('z-index',10);
$('body').append(musicButton);



$(document).on("click", "#musicButton", function() {
    if(musicPlayed == true){
        stopMusic();
        musicPlayed = false;
    }
        playMusic();
        musicPlayed = true;   
});

*/
function checkMusicState(){
    if(musicPlayed == true){
        stopMusic();
        document.getElementById("bgm1Player").src="./img/object/stopMusic.png";
        musicPlayed = false;
    }else{
        document.getElementById("bgm1Player").src="./img/object/music.png";
        playMusic();
        musicPlayed = true; 
    }
  
}
var bgm = new Audio("./music/bgm1.mp3");
bgm.volume = 0.4;
function playMusic(){
    bgm.loop = true;
    bgm.play();
}

function stopMusic(){
    bgm.pause();
    bgm.currentTime = 0;
}

