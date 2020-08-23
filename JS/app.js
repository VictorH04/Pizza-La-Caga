// ! Parallax for scrolling

const topHero = document.querySelectorAll('.topHero');

window.addEventListener('scroll', function() {
	let offset = window.pageYOffset;

	topHero.forEach(function(prllx, i) {
		console.log('Parallax' + i + ': ' + prllx.offsetTop + ' / Window:' + offset);
		prllx.style.backgroundPositionY = (offset - prllx.offsetTop) * 0.7 + 'px';
	});

	// console.log('Offset: ' + offset);
	// console.log('Offset * 0.7' + offset * 0.7);
});

// ! Parallax pages
function splitScroll() {
	const controller = new ScrollMagic.Controller();

	new ScrollMagic.Scene({
		duration: '200%',
		triggerElement: '.menu_title',
		triggerHook: 0
	})
		.setPin('.menu_title')
		.addTo(controller);
	// scene.addIndicators();

	// console.log(controller);
}

splitScroll();
