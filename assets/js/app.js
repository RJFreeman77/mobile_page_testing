const player = document.getElementById('player');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const captureButton = document.getElementById('capture');
const imgElement = document.getElementById('myImage');

const constraints = {
    video: {
        facingMode: "environment",
    },
    audio: false,

};


captureButton.addEventListener('click', () => {
    // Draw the video frame to the canvas.
    context.drawImage(player, 0, 0, canvas.width, canvas.height);
    // Stop all video streams.
    player.srcObject.getVideoTracks().forEach(track => track.stop());
    // let dataURL = canvas.toDataURL('image/png');
    let dataURL = canvas.toDataURL('image/png');
    // .replace(/^data:image\/(png|jpg);base64,/, '');
    console.log(dataURL);
    imgElement.setAttribute('src', dataURL);
});

// Attach the video stream to the video element and autoplay.
navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
        player.srcObject = stream;
    });