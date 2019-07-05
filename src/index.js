import 'bootstrap';
import './style.scss';
import cover from './images/transport1.png';
import confLogo from './images/conflogo.png';
import slide2 from './images/rodrigo-abreu-lq9PxpwDZUk-unsplash.jpg';
document.getElementById('cover').src = cover;
document.getElementById('confLogo').src = confLogo;
document.getElementById('slide2').src = slide2;
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
var menuItems = ['home', 'about', 'programme', 'outcomes', 'documentation', 'registration', 'media', 'prep'];
menuItems.forEach(function (item) {
	$('a[href="#' + item + '"]').on('click', function (e) {
		e.preventDefault();
		$('#' + item + '-tab').tab('show');
		window.location.href = '#' + item;
	});
});
