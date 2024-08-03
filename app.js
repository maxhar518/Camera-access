let video = document.getElementById("camera")

if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({video : true})
        .then((strem) => {
            video.srcObject = strem
        }, () => {
            console.log("error");
            
        })
}