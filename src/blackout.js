
import { gsap } from "gsap";
import { ScrollToPlugin} from "gsap/ScrollToPlugin.js";

gsap.registerPlugin(ScrollToPlugin);

document.addEventListener('DOMContentLoaded', function() {

	var elements = document.querySelectorAll('img');

	var nbl = gsap.timeline();
	
	nbl.add(nbl.to( elements, 2, {scale:1}));	
	nbl.add(nbl.to( window, 4, {scrollTo:400}));
	nbl.play();

}, false); 