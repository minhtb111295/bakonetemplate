$('.portfolio button').click(function (e) { 
    // Perfomance
    if ($(this).hasClass('active')) {
        // Dừng chương trình, không thực thi code bên dưới nữa
        return;
    }

    // Remove active class
    $('.portfolio button.active').removeClass('active');

    // Add active class
    $(this).addClass('active');

    // Get data value
    const dataValue = $(this).attr('data');

    // Get all divs
    const allDivs = $('.portfolio .row > div');

    if (dataValue == 'all') {
        allDivs.show();
        return;
    }

    // Get show divs
    const showDivs = $(`.portfolio .row > div[data=${dataValue}]`);
    showDivs.show();

    // Get hide divs
    const hideDivs = allDivs.not(showDivs);
    hideDivs.hide();
});

$('.contact form').validate({
    rules: {
        name: {
            required: true,
            maxlength: 30 
        },
        email: {
            required: true,
            email: true
        },
        message: {
            required: true
        }
    },
    messages: {
        name: {
            required: 'Vui lòng nhập họ và tên',
            maxlength: 'Tên bạn nhập quá dài'
        },
        email: {
            required: 'Email không được để trống',
            email: 'Email bạn nhập chưa đúng định dạng'
        },
        message: {
            required: 'Điền tin nhắn bạn muốn gửi đến hệ thống!'
        }
    }
});

$(window).scroll(function () { 
    if ($(window).scrollTop() >= $('.home').offset().top) {
        $('.navbar').addClass('fixed-top');
        $('header').addClass('dummy-padding-top');
    }
    else {
        $('.navbar').removeClass('fixed-top');
        $('header').removeClass('dummy-padding-top');
    }
});