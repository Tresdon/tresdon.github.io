
function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}

function setYear() {
    var d = new Date();
    $("#copyright-year").html(d.getFullYear());
}


/*
When the document is ready do these things.
 */
$(function () {

    // Load all images initially so they don't need to be loaded on hover
    preload([
        'img/social-icons/Github-color.svg',
        'img/social-icons/LinkedIn-color.svg',
        'img/social-icons/stackoverflow-color.svg',
        'img/social-icons/Spotify-color.svg',
        'img/social-icons/Twitter-color.svg'
    ]);

    // Set the year of the copyright
    setYear();
});
