
const app = {};

// Hamburger Menu toggle
app.toggleNav = () => {
	$('.hamburger').on('click', function() {

		$('.header__nav').toggleClass('hamburger__visible');
	});
} 

// DOCUMENT READY

$(function(){
	console.log('hello world');
	app.toggleNav();

}); 