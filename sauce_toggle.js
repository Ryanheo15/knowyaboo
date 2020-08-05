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
    $("#xxxsauce").prop("checked", true);

    $("main").css("background-color", "#5e2e2b");
    $(".shuffle_btn").css("background-color", "#ba8e80");
})

$('#xxxsauce').change(function () {
    if ($(this).is(':checked')) {

    } else {
        $("main").css("background-color", "#eab5a0");
        $(".shuffle_btn").css("background-color", "#d8a793");
    }
});