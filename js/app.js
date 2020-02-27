navigator.getUserMedia = navigator.getUserMedia || 
    navigator.webkitGetUserMedia || 
    navigator.mozGetUserMedia;

const constraints = {audio: false, video: true}

var video = document.querySelector("video");
function successCallback(stream){
    window.stream = stream;
    if(window.URL){
        video.srcObject = stream
    }else{
        video.src = stream
    }
    video.play();
}

function errorCallback(error){
    console.error(error)
}

navigator.getUserMedia(constraints, successCallback, errorCallback);