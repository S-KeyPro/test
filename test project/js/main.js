$(document).ready(function(){
      $('.slider-coffee').slick({
      	// autoplay: true,
      	// autoplaySpeed: 3000
      });
});


function contentActive1() {
    document.getElementById ('content__icon1').classList.add ("active1");
    document.getElementById ('content__icon2').classList.remove ("active2");
	document.getElementById ('content__icon3').classList.remove ("active3");
	document.getElementById ('content__icon4').classList.remove ("active4");
}
function contentActive2() {
    document.getElementById ('content__icon2').classList.add ("active2");
    document.getElementById ('content__icon1').classList.remove ("active1");
	document.getElementById ('content__icon3').classList.remove ("active3");
	document.getElementById ('content__icon4').classList.remove ("active4");
}
function contentActive3() {
    document.getElementById ('content__icon3').classList.add ("active3");
	document.getElementById ('content__icon2').classList.remove ("active2");
	document.getElementById ('content__icon1').classList.remove ("active1");
	document.getElementById ('content__icon4').classList.remove ("active4");
}
function contentActive4() {
    document.getElementById ('content__icon4').classList.add ("active4");
    document.getElementById ('content__icon2').classList.remove ("active2");
	document.getElementById ('content__icon3').classList.remove ("active3");
	document.getElementById ('content__icon1').classList.remove ("active1");
}

function hider1() {
	document.getElementById ('content__text2').style.display = 'none';
	document.getElementById ('content__text3').style.display = 'none';
	document.getElementById ('content__text4').style.display = 'none';
	document.getElementById ('content__text1').style.display = 'block';
}
function hider2() {
	document.getElementById ('content__text1').style.display = 'none';
	document.getElementById ('content__text3').style.display = 'none';
	document.getElementById ('content__text4').style.display = 'none';
	document.getElementById ('content__text2').style.display = 'block';
}
function hider3() {
	document.getElementById ('content__text1').style.display = 'none';
	document.getElementById ('content__text2').style.display = 'none';
	document.getElementById ('content__text4').style.display = 'none';
	document.getElementById ('content__text3').style.display = 'block';
}
function hider4() {
	document.getElementById ('content__text1').style.display = 'none';
	document.getElementById ('content__text2').style.display = 'none';
	document.getElementById ('content__text3').style.display = 'none';
	document.getElementById ('content__text4').style.display = 'block';
}






