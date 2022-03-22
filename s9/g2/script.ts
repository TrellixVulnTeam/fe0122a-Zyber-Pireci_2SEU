//MUSICA
fetch('audio.json')
.then(response => response.json())
.then(data => {
    data.forEach((item: any) => {
        let positionHtml = document.querySelector('#sezioneAudio') as HTMLBodyElement
        let bottone = document.createElement('button') as HTMLInputElement
        bottone.innerHTML= item.titolo
        positionHtml.append(bottone)
        bottone.addEventListener('click', function(){
            let posizionePlayer = document.querySelector('#appendiPlayer') as HTMLBodyElement
            let player = document.querySelector('#playerMusica') as HTMLAudioElement
            player.setAttribute('src', 'audio/'+item.file)
            player.setAttribute('controls', 'controls', )
            posizionePlayer.append(player)
        })
        
    })
})


//VIDEO
fetch('video.json')
.then(response => response.json())
.then(data => {
    data.forEach((item:any) =>{

    let posizioneBV = document.querySelector('#sezioneVideo') as HTMLBodyElement
    let bottoneVideo = document.createElement('button') as HTMLInputElement
    bottoneVideo.innerHTML= item.titolo
    posizioneBV.append(bottoneVideo)
    bottoneVideo.addEventListener('click', function(){
        let posizioneVP=document.querySelector('#appendiVideo') as HTMLBodyElement
        let videoPlayer = document.querySelector('#playerVideo') as HTMLAudioElement
        videoPlayer.setAttribute('src', 'video/'+item.file)
        videoPlayer.setAttribute('controls', 'controls')
        posizioneVP.append(videoPlayer)
    })

    })
})




