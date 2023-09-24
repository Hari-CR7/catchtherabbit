var hole = $(".hole");
var count = 0;
var stop = false;
var start = false;
function random() {
    var n = (Math.floor(Math.random() * 9)) + 1;
    $(".h" + n).html('<img src="./img/rabbit.png" alt="" class="rab-img">');
    $(".h" + n).addClass("active");
}
function remove() {
    var act = $(".active");
    act.removeClass("active");
    act.html('');
}
$(document).keypress(function () {
    start = true;
    $(".result").text('');
});
$(".start-btn").click(function () {
    start = true;
    $(".result").text('');
    $(".start-btn").css("display", "none");
});

setInterval(function () {
    if (stop === false && start === true) {
        remove();
        random();
    }

}, 400);



hole.click(function () {
    count++;
    if ($(this).hasClass("active")) {
        $(".result").text("You Caught Me!");
        $(this).html('<img src="./img/caught rabbit.png" alt="" class="rab-img">');
        stop = true;
    }
    $(".attempts-number").text(count);
});

