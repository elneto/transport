import 'bootstrap';
import './style.scss';
import confLogo from './images/conflogo.png';
import slide1 from './images/access-annie-spratt-wtk4VH8EU20-unsplash.jpg';
import slide2 from './images/safe-madalina-z-5xe-nuJ0GFw-unsplash.jpg';
import slide3 from './images/eff-chuttersnap-eqwFWHfQipg-unsplash.jpg';
import slide4 from './images/green-matt-henry-1nVbppFJl-s-unsplash.jpg';
import tram from './images/tramluiz-felipe-dRNT_zPMZ6k-unsplash.jpg';
document.getElementById('confLogo').src = confLogo;
document.getElementById('slide1').src = slide1;
document.getElementById('slide2').src = slide2;
document.getElementById('slide3').src = slide3;
document.getElementById('slide4').src = slide4;
document.getElementById('tram').src = tram;
var sdgkplogo = document.getElementById('confLogo');
var $ = require('jquery');

function headerSmall () {
	sdgkplogo.className = 'sdgkplogo_small';
	$('.confName').removeClass('confName').addClass('confName_small');
	$('button.navbar-toggler').addClass('mt-3').removeClass('mt-5');
	$('form#search-form').addClass('mt-3').removeClass('mt-5');
};

function headerNormal () {
	sdgkplogo.className = 'sdgkplogo_normal';
	$('.confName_small').removeClass('confName_small').addClass('confName');
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
$(document).ready(function () {
	resizeHeader();
	var url = window.location.href.toString();
	if (url.match('#')) {
		$('#' + url.split('#')[1] + '-tab').tab('show');
	}
});
$(document).scroll(function () {
	resizeHeader();
});
$(window).resize(function () {
	resizeHeader();
});
var menuItems = ['home', 'about', 'programme', 'documentation', 'registration', 'media', 'otherevents', 'commitments'];
menuItems.forEach(function (item) {
	$('a[href="#' + item + '"]').on('click', function (e) {
		e.preventDefault();
		$('#' + item + '-tab').tab('show');
		window.location.href = '#' + item;
	});
});
