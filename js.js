



document.querySelector(".second-content").style.display = 'none';

document.querySelector(".login").addEventListener("click",function(){
    document.querySelector(".second-content").style.display = 'block';
    var audio = new Audio('crowd_laughingwav-14578.mp3');
    audio.play();
});


