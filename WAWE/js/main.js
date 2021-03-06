$(function () {
	// плавный скролл
	$(".menu a").on("click", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 1500);
	});
	// изменение цвета шапки
	$(window).on("scroll", function (event) {
		var scroll = $(window).scrollTop();
		headerContent = $(".header__content").height();
		if (scroll > 97) {
			$(".header").css("background-color", "#01353E");
		} else {
			$(".header").css("background-color", "transparent");
		}
	});

	$('.burger, .menu a').on('click', function () {
		$('.menu').toggleClass('menu--active');
	})

	$('.slider').slick({
		dots: true,
		arrows: false
	});

	var mixer = mixitup('.gallery__photos', {
		animation: {
			duration: 400
		}
	});
});