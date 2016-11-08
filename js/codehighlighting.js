/**
 * Created by Tresdon on 11/7/2016.
 */
$(document).ready(function() {
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
});