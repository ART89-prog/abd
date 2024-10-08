$(() => {


    // Ширина окна для ресайза
    WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
    WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
    BODY = document.getElementsByTagName('body')[0]
    OVERLAY = document.querySelector('.overlay')


    // Моб. меню
    $('header .mob_menu_btn').click((e) => {
        e.preventDefault()

        $('header .mob_menu_btn').addClass('active')
        $('body').addClass('menu_open')
        $('header .menu').addClass('show')
        $('.overlay').fadeIn(300)
    })

    $('header .close_btn, header .menu .item a, .overlay').click((e) => {
        e.preventDefault()

        $('header .mob_menu_btn').removeClass('active')
        $('body').removeClass('menu_open')
        $('header .menu').removeClass('show')
        $('.overlay').fadeOut(300)
    })


    $('body').on('click', '.modal_link', function (e) {
        e.preventDefault()

        Fancybox.close(true)
        Fancybox.show([{
            src: $(this).data('content'),
            type: 'inline',
        }]);
    })


    // Fancybox
    Fancybox.defaults.autoFocus = false
    Fancybox.defaults.trapFocus = false
    Fancybox.defaults.dragToClose = false
    Fancybox.defaults.placeFocusBack = false
    Fancybox.defaults.l10n = {
        CLOSE: "Закрыть",
        NEXT: "Следующий",
        PREV: "Предыдущий",
        MODAL: "Вы можете закрыть это модальное окно нажав клавишу ESC"
    }

    Fancybox.defaults.template = {
        closeButton: '<img src=images/close.svg>',
        // spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
        // main: null
    }


    $('.callback_form button').click(function(e) {
        e.preventDefault()
        $('.callback_form').css('display', 'none');
        $('.callback_box').addClass('active');
    });

     

      
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			IMask(el, {
				mask: '+{7} (000) 000-00-00',
				lazy: true
			})
		})
	}


    // Скрол к пунктам меню
    $(".scroll").on("click", function (e) {
        e.preventDefault();
        let id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(id).offset().top - 0
        }, {
            duration: 400,
            easing: "swing"
        });
    });




    window.addEventListener('resize', function () {
        WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight

        let windowW = window.outerWidth

        if (typeof WW !== 'undefined' && WW != windowW) {


            // Перезапись ширины окна
            WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth


            // Моб. версия
            if (!fakeResize) {
                fakeResize = true
                fakeResize2 = false

                document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
            }

            if (!fakeResize2) {
                fakeResize2 = true

                if (windowW < 420) document.getElementsByTagName('meta')['viewport'].content = 'width=420, user-scalable=no'
            } else {
                fakeResize = false
                fakeResize2 = true
            }
        }
    })



})