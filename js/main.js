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
        $(this).parents('.nav-box').toggleClass('active');
        e.stopPropagation();
    })
    $('.nav-box').on('click', function (e) {
         e.stopPropagation();
    });
    $('body').on('click', function(e) {
        $('.nav-box').removeClass('active');
    })
});