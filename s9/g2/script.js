"use strict";
//MUSICA
fetch('audio.json')
    .then(response => response.json())
    .then(data => {
    data.forEach((item) => {
        let positionHtml = document.querySelector('#sezioneAudio');
        let bottone = document.createElement('button');
        bottone.innerHTML = item.titolo;
        positionHtml.append(bottone);
        bottone.addEventListener('click', function () {
            let posizionePlayer = document.querySelector('#appendiPlayer');
            let player = document.querySelector('#playerMusica');
            player.setAttribute('src', 'audio/' + item.file);
            player.setAttribute('controls', 'controls');
            posizionePlayer.append(player);
        });
    });
});
//VIDEO
fetch('video.json')
    .then(response => response.json())
    .then(data => {
    data.forEach((item) => {
        let posizioneBV = document.querySelector('#sezioneVideo');
        let bottoneVideo = document.createElement('button');
        bottoneVideo.innerHTML = item.titolo;
        posizioneBV.append(bottoneVideo);
        bottoneVideo.addEventListener('click', function () {
            let posizioneVP = document.querySelector('#appendiVideo');
            let videoPlayer = document.querySelector('#playerVideo');
            videoPlayer.setAttribute('src', 'video/' + item.file);
            videoPlayer.setAttribute('controls', 'controls');
            posizioneVP.append(videoPlayer);
        });
    });
});
