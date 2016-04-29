function myFunction() {
    setTimeout(showPage, 2000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
}

$(document).ready(function() {
    myFunction();
    $('.hamburger').on('click', function(e) {
        $('.sec--menu').toggleClass('active');
        e.stopPropagation();
    })
    $('body').on('click', function(e) {
        $('.sec--menu').removeClass('active');
    })
});