
function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}

function setYear() {
    var d = new Date();
    $("#copyright-year").html(d.getFullYear());
}

$(function () {
    
    preload([
        'assets/Github-color.svg',
        'assets/Linkedin-color.svg',
        'assets/stackoverflow-color.svg',
        'assets/Spotify-color.svg',
        'assets/Twitter-color.svg'
    ]);


    setYear();



});
