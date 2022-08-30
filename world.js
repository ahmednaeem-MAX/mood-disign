	

let stars = document.getElementByid('stars');
let moon = document.getElementByid('moon');
let mountains3 = document.getElementByid('mountains3');
let mountains3 = document.getElementByid('mountains4');
let river = document.getElementByid('river');
let boat6 = document.getElementByid('boat6');
let nouvil = document.queryselector('.nouvil');
window.onscroll = function() {
	let value = scrollY;
	stars.style.left =value + 'px';
	moon.style.top = value * 3 + 'px';
	mountains3.style.top = moon * 2 + 'px';
	mountains4.style.top = moon * 1.5 + 'px';
	river.style.top = moon * + 'px';
	boat6.style.top= value *  + 'px';
	boat6.style.left= value * 3 + 'px';
    nouvil.style.fontSize + value  + 'px' ;

}

