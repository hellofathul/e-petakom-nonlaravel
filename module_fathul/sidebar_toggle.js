//toggle sidebar active
$(function () {
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault()
        oldObjChild = $('.sidebar > a'); //gets active nav-item child nav-link
        oldObj = $('.active'); //gets the active nav-item
        oldObj.removeClass('active'); //remove active from old nav-item
        oldObjChild.css('background', 'transparent'); //clear old active nav-item and nav-link style for bg color
        $(this).addClass('active'); //set the active class on the nav-item that called the function
        // $(this).css('color', '#86848c'); //set the color
        // $(this).css('border-radius', '1rem'); //set the border radius
        $(this).css('background', 'white');
        // $('head').append('<style>.sidebar a.active:before{content:"";width:20px;height:100%;position:absolute;background:#3c37ff;border-radius: 1rem 0rem 0rem 1rem;}</style>');
    });
});