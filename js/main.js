// $(document).ready(function () {
// 	$('.header__burger').click(function () {
// 		$('header__burger').toggleClass('active');
// 	});
// });
$('.header__burger,.header__link').on('click', function () {
	$('.header__burger, .header__menu').toggleClass('active');
});
