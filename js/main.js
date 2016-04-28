function myFunction() {
    setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
}
$(function() {
    var $menu = $('.sec--menu');
    $menu.hide();
    $('.hamburger').on('click', function(event) {
        event.stopPropagation();
        $menu.toggle('slow');
    });
    $('body').on('click', function() {
        $menu.hide();
    });
});