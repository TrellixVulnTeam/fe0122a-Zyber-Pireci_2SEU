// quando il documento è pronto...(forma breve)...
$(() => {
    $('#l-btn').click(function () {
        let w = $('#img-l').width();
        let lProp = parseInt($('#img-l').css('left'));
        if(lProp -600 >= -w){
            $('#img-l').animate({
            left: '-=300px'
            });
        }else {
        $('#img-l').animate({
            left: '0px'
        });
    
        }
    });

    $('#r-btn').click(function () {
        let w = $('#img-l').width();
        let lProp = parseInt($('#img-l').css('left'));
        if(lProp +600 <= +w){
            $('#img-l').animate({
            left: '0px'
            });
        }else {
        $('#img-l').animate({
            left: '+=300px'
        });
    
        }
    });

    
    
    

    
})