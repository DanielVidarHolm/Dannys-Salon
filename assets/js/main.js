/*
	Twenty by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() { return $header.height() + 10; }
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			expandMode: (browser.mobile ? 'click' : 'hover')
		});

	// Nav Panel.

		// Button.
			$(
				'<div id="navButton">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

		// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
			if (browser.os == 'wp' && browser.osVersion < 10)
				$('#navButton, #navPanel, #page-wrapper')
					.css('transition', 'none');

	// Header.
		if (!browser.mobile
		&&	$header.hasClass('alt')
		&&	$banner.length > 0) {

			$window.on('load', function() {

				$banner.scrollex({
					bottom:		$header.outerHeight(),
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt reveal'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			});

		}

})(jQuery);


let images = [
	"https://picsum.photos/500/400",
	"https://picsum.photos/500/400",
	"https://picsum.photos/500/400",
	"https://picsum.photos/500/400",
	"https://picsum.photos/500/400",
	"https://picsum.photos/500/400",
	"https://picsum.photos/500/400",
	"https://picsum.photos/500/400",
	"https://picsum.photos/500/400",
	"https://picsum.photos/500/400",
	"https://picsum.photos/500/400",
	"https://picsum.photos/500/400",
	"https://picsum.photos/500/400",
	"https://picsum.photos/500/400",
	"https://picsum.photos/500/400",
	"https://picsum.photos/500/400"
];

// This will control the amount of images displayed in the gallery section of the index page
// Im basicly using the window.innerWidth to determine if it should display 9 images, 6 images or 3 images
// TODO Set the rest of the images to another slide so you can flip through them
window.addEventListener('resize', () => {
	console.log(window.innerWidth)
	if (window.innerWidth >= 1280){
		console.log('3x3')
		if (document.querySelector('#slide1').children.length != 9){
			document.querySelector('#slide1').textContent = '';
			for (let i = 0; i < 9; i++){
				let newImg = document.createElement('img');
				newImg.src = images[i];
				document.querySelector('#slide1').appendChild(newImg);
			}
		}
		
		
	} else if (window.innerWidth >= 840 && window.innerWidth < 1280){
		console.log('2x3')
		if (document.querySelector('#slide1').children.length != 6){
			document.querySelector('#slide1').textContent = '';
			for (let i = 0; i < 6; i++){
				let newImg = document.createElement('img');
				newImg.src = images[i];
				document.querySelector('#slide1').appendChild(newImg);
			}
		}
	} else {
		if (document.querySelector('#slide1').children.length != 3){
			document.querySelector('#slide1').textContent = '';
			for (let i = 0; i < 3; i++){
				let newImg = document.createElement('img');
				newImg.src = images[i];
				document.querySelector('#slide1').appendChild(newImg);
			}
		}
	}

}, true)

