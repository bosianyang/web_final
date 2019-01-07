$(document).ready(function () {
    $('.modalthumb').click(function () {
        $('.modal-body').empty();
        var title = $(this).parent('a').attr("title");
        $('.modal-title').html(title);
        $($(this).parents('div').html()).appendTo('.modal-body');
        $('#myModal').modal({
            show: true
        });
    });


    $('#people-sun').popover({
        title: "Prof. Sun",
        content: "Prof. Sun is my MS, PhD advisor who always encourages me to do research for social public good.",
        trigger: "hover",
        container: 'body'
    });


    //    $('.flip').click();
    $('.flip').click(function () {
        //        $(this).find('p.description').slideToggle(200);
        $(this).find('p.description').slideToggle(500, "easeOutExpo");
        //        $(this).find('p.description').slideToggle(500, "easeOutExpo");
    });
});

//$(window).on("scroll", function() {
//    var s = 400 - Math.min(400, $(document).scrollTop());
//    $("#members img").width(s).height(s);
//});
