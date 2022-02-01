$(document).ready(function () {
    console.log("le document est pret");
    $("img").click(function () {
        $(this).toggle().animate({width:["toggle"]});
    })
});