$('input[type="checkbox"]').on('change', function (e) {
    if (e.target.checked) {
        $('#age_confirm').modal();
    }
});

$('#no_btn').click(function () {
    $("#xxxsauce").prop("checked", false);
    $("body").css("background-color", "#eab5a0");

});

$('#yes_btn').click(function () {
    // $("body").css("background-image", "url(../images/bg-dark.png) !important;");
    $("#xxxsauce").checked = true;

    // $('#showHideBody').
    $('main').removeClass("normal_body");
    $('main').addClass("updated_body");
    $(".shuffle_btn").css("background-color", "#ba8e80");
})

$('#xxxsauce').change(function () {
    if ($(this).is(':checked')) {

    } else {
        $('main').removeClass("updated_body");
        $('main').addClass("normal_body");
        $("main").css("background-color", "#eab5a0");
        $(".shuffle_btn").css("background-color", "#d8a793");
    }
});