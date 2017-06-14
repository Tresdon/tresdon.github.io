var email_notification = new Noty({
    type:  'notification',
    text: 'tresdonj@gmail.com',
    theme: 'semanticui',
    closeWith: []
});
Noty.setMaxVisible(1);
var emailNotificationVisible = false;

function preload(arrayOfImages) {
    $(arrayOfImages).each(function () {
        $('<img/>')[0].src = this;
    });
}

function setYear() {
    var d = new Date();
    $("#copyright-year").html(d.getFullYear());
}

$('#email-icon').mouseenter(function () {
    if(!emailNotificationVisible) {
        emailNotificationVisible = true;
        email_notification.show();
        setTimeout(function () {
            emailNotificationVisible = false;
            email_notification.close();
        }, 5000)
    }

});


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
        'img/social-icons/Twitter-color.svg',
        'img/social-icons/resume-color.svg',
        'img/social-icons/email-color.svg'
    ]);

    // Set the year of the copyright
    setYear();
});
