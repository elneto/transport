import 'bootstrap';
import './style.scss';
import mobileUNLogo from './images/UNLogo2.png';
import confLogo from './images/masthead-en.svg';
import wheelImg from './images/sdgwheel.png';
import slide1 from './images/access-annie-spratt-wtk4VH8EU20-unsplash.jpg';
import slide2 from './images/safe-madalina-z-5xe-nuJ0GFw-unsplash.jpg';
import slide3 from './images/eff-chuttersnap-eqwFWHfQipg-unsplash.jpg';
import slide4 from './images/electric-car.jpg';
import tram from './images/tramluiz-felipe-dRNT_zPMZ6k-unsplash.jpg';
document.getElementById('mobileUNLogo').src = mobileUNLogo;
document.getElementById('confLogo').src = confLogo;
document.getElementById('wheel').src = wheelImg;
document.getElementById('slide1').src = slide1;
document.getElementById('slide2').src = slide2;
document.getElementById('slide3').src = slide3;
document.getElementById('slide4').src = slide4;
document.getElementById('tram').src = tram;
var wheel = document.getElementById('wheel');
var $ = require('jquery');

function headerSmall () {
	$('#confLogo').removeClass('sdgkplogo_normal').addClass('sdgkplogo_small');
	wheel.className = 'wheel_small';
	$('.confName').removeClass('confName').addClass('confName_small');
	$('.confDate1').removeClass('confDate1').addClass('confDate1_small');
	$('.confDate2').removeClass('confDate2').addClass('confDate2_small');
	$('button.navbar-toggler').addClass('mt-3').removeClass('mt-5');
	$('form#search-form').addClass('mt-3').removeClass('mt-5');
};

function headerNormal () {
	$('#confLogo').removeClass('sdgkplogo_small').addClass('sdgkplogo_normal');
	wheel.className = 'wheel_normal';
	$('.confName_small').removeClass('confName_small').addClass('confName');
	$('.confDate1_small').removeClass('confDate1_small').addClass('confDate1');
	$('.confDate2_small').removeClass('confDate2_small').addClass('confDate2');
	$('button.navbar-toggler').addClass('mt-5').removeClass('mt-3');
	$('form#search-form').addClass('mt-5').removeClass('mt-3');
};

function resizeHeader () {
	if ($('body').scrollTop() > 35 || $(window).width() < 992) {
		headerSmall();
	} else {
		headerNormal();
	}
}

function navigateHash () {
	var url = window.location.href.toString();
	if (url.match('#')) {
		let clicked = $('#' + url.split('#')[1] + '-tab');
		clicked.tab('show');
		$('li.nav-item').removeClass('naviSelected');
		clicked.hasClass('nav-link') ? clicked.parent().addClass('naviSelected') : clicked.parent().parent().addClass('naviSelected');
	}
}
$(document).ready(function () {
	resizeHeader();
	navigateHash();
});
// for the back and fwd buttons
window.onhashchange = function () {
	navigateHash();
};
$(document).scroll(function () {
	resizeHeader();
});
$(window).resize(function () {
	resizeHeader();
});
// to add a hashtag when clicking a nav link
var menuItems = ['home', 'about', 'programme', 'documentation', 'registration', 'media', 'related', 'commitments'];
menuItems.forEach(function (item) {
	$('a[href="#' + item + '"]').on('click', function (e) {
		// e.preventDefault();
		$('#' + item + '-tab').tab('show');
		window.location.href = '#' + item;
	});
});
