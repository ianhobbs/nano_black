// Import with codekit. You have to change this if your using other build environments.

// @codekit-prepend "../bower_components/gsap/src/minified/TweenMax.min.js";
// @codekit-prepend "../bower_components/gsap/src/minified/TimelineLite.min.js";
// @codekit-prepend "../bower_components/gsap/src/minified/plugins/ScrollToPlugin.min.js";


document.addEventListener('DOMContentLoaded', function() {


	var elements = document.querySelectorAll('img');

	var nbl = new TimelineLite();

	nbl.add( TweenMax.to( elements, 2, {scale:1}) );	
	nbl.add( TweenMax.to( window, 4, {scrollTo:400}) );
	nbl.play();

}, false); 