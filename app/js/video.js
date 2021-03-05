let video=document.querySelector('.block-video');
let btnPlayVideo=document.querySelector('.btn-play');
let svg=document.querySelector('.svg');
let btnPlayPause = document.querySelector('.play-pause-btn');
let btnMute = document.querySelector('.mute')
let btnFullScreen = document.querySelector('.full-screen')
let progressLine = document.querySelector('.progress-line');
let btnPlay = document.querySelector('.play-btn-svg');
let btnPause = document.querySelector('.pause-btn-svg');
let btnMuted = document.querySelector('.mute-btn-svg');
let btnUnmuted = document.querySelector('.unmute-btn-svg');

video.ontimeupdate = progressUpdate;
progressLine.onclick = videoRewind;

function removeControls(e){
    e.removeAttribute("controls")
}

function showControls(e){
    e.setAttribute("controls","")
}

window.onload=removeControls(video)
window.onload=btnPause.classList.add("hidden-playing");
window.onload=btnMuted.classList.add("hidden-playing");

btnPlayVideo.onclick=function(){
    video.play();
    svg.classList.add("hidden-playing");
    btnPlayVideo.classList.add("hidden-playing");
    btnPlay.classList.add("hidden-playing");
    btnPause.classList.remove("hidden-playing");
};

btnPlayPause.onclick=function(){
    if (video.paused){
        video.play();
        svg.classList.add("hidden-playing");
        btnPlayVideo.classList.add("hidden-playing");
        btnPlay.classList.add("hidden-playing");
        btnPause.classList.remove("hidden-playing");
    } else
    if (!video.paused) {
        video.pause();
        svg.classList.remove("hidden-playing");
        btnPlayVideo.classList.remove("hidden-playing");
        btnPlay.classList.remove("hidden-playing");
        btnPause.classList.add("hidden-playing");
    }
};

btnMute.onclick=function(){
    if (video.muted) {
        video.muted = false;
        btnMuted.classList.add("hidden-playing");
        btnUnmuted.classList.remove("hidden-playing");
    } else 
    if (!video.muted) {
        video.muted = true;
        btnMuted.classList.remove("hidden-playing");
        btnUnmuted.classList.add("hidden-playing");
    }
};

btnFullScreen.onclick=function(){
    const rfs = video.requestFullscreen || video.webkitRequestFullScreen || video.mozRequestFullScreen || video.msRequestFullscreen;
    rfs.call(video);
};

function progressUpdate() {
    let dur = video.duration;
    let curTime = video.currentTime;
    progressLine.value = (100 * curTime)/dur;
    if (progressLine.value == 100) {
        videoEnd();
    }
}

function videoRewind() {
    let progressLineWidth = this.offsetWidth;
    let offSetX = event.offsetX;
    this.value = (100 * offSetX) / progressLineWidth;
    video.currentTime = video.duration * (offSetX/progressLineWidth);
}

function videoEnd () {
    if (video.ended) {
        video.currentTime = 0;
        progressLine.value = 0;
        svg.classList.remove("hidden-playing");
        btnPlayVideo.classList.remove("hidden-playing");
        btnPlay.classList.remove("hidden-playing");
        btnPause.classList.add("hidden-playing");
    }
}
