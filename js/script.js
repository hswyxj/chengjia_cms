/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://facebook.com/themefisher
 * GITHUB: https://github.com/hswyxj/
 */

(function ($) {
	'use strict';

	// testimonial-wrap
	if ($('.testimonial-wrap').length !== 0) {
		$('.testimonial-wrap').slick({
			slidesToShow: 2,
			slidesToScroll: 2,
			infinite: true,
			dots: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 6000,
			responsive: [{
					breakpoint: 1024,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 900,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}, {
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	}

	// navbarDropdown
	if ($(window).width() < 992) {
		$('#navbar .dropdown-toggle').on('click', function () {
			$(this).siblings('.dropdown-menu').animate({
				height: 'toggle'
			}, 300);
		});
	}

	$(window).on('scroll', function () {
		//.Scroll to top show/hide
		if ($('#scroll-to-top').length) {
			var scrollToTop = $('#scroll-to-top'),
				scroll = $(window).scrollTop();
			if (scroll >= 200) {
				scrollToTop.fadeIn(200);
			} else {
				scrollToTop.fadeOut(100);
			}
		}
	});
	// scroll-to-top
	if ($('#scroll-to-top').length) {
		$('#scroll-to-top').on('click', function () {
			$('body,html').animate({
				scrollTop: 0
			}, 600);
			return false;
		});
	}

	// portfolio-gallery
	if ($('.portfolio-gallery').length !== 0) {
		$('.portfolio-gallery').each(function () {
			$(this).find('.popup-gallery').magnificPopup({
				type: 'image',
				gallery: {
					enabled: true
				}
			});
		});
	}

	// Counter
	if ($('.counter-stat').length !== 0) {
		$('.counter-stat').counterUp({
			delay: 10,
			time: 1000
		});
	}

	// contact-form: 通过 mailto 打开本地邮件客户端发送留言到公司邮箱
	if ($('#contact-form').length !== 0) {
		$('#contact-form').on('submit', function (e) {
			e.preventDefault();

			var $form = $(this);
			var name = $form.find('[name="name"]').val();
			var email = $form.find('[name="email"]').val();
			var message = $form.find('[name="message"]').val();

			var companyEmail = '392116630@qq.com';
			var subject = '网站留言 - ' + name;
			var body = [
				'姓名：' + name,
				'邮箱：' + email,
				'',
				'留言内容：',
				message
			].join('\n');

			var mailtoUrl = 'mailto:' + companyEmail +
				'?subject=' + encodeURIComponent(subject) +
				'&body=' + encodeURIComponent(body);

			window.location.href = mailtoUrl;

			// 反馈提示：mailto 触发后邮件客户端弹出有延迟，避免用户以为没反应
			var $btn = $form.find('button[type="submit"]');
			var originalText = $btn.text();
			$btn.text('正在打开邮件客户端，请在窗口中完成发送').prop('disabled', true);
			setTimeout(function () {
				$btn.text(originalText).prop('disabled', false);
			}, 4000);
		});
	}

})(jQuery);
