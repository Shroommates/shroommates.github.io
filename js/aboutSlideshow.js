// https://stackoverflow.com/questions/25347946/add-fade-effect-in-slideshow-javascript

var imgArray = [
	'/static/img/boo/boardwalk.jpg',
	'/static/img/boo/great-america.jpg',
	'/static/img/boo/tea-garden.jpg'],
	curIndex = 0;
	imgDuration = 3000;

function slideShow() {
	document.getElementById('slider').className += "fadeOut";
	setTimeout(function() {
		document.getElementById('slider').src = imgArray[curIndex];
		document.getElementById('slider').className = "";
	},750);
	curIndex++;
	if (curIndex == imgArray.length) { curIndex = 0; }
	setTimeout(slideShow, imgDuration);
}
slideShow();
