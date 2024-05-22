const myslide = document.querySelectorAll('.myslide'), dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 6000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {

	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}


//number counter
var student = setInterval(studentTrained, 2);
var Campus = setInterval(campus, 10);
var Placement = setInterval(placement, 10);
var Years = setInterval(years, 10);
let count1 = 1;
let count2 = 0;
let count3 = 1;
let count4 = 1;

function studentTrained() {
    count1++;
    document.querySelector(".number1").innerHTML = count1;
    if (count1 === 5000) {
        clearInterval(student);
    }
}

function campus() {
    count2++;
    document.querySelector(".number2").innerHTML = count2;
    if (count2 == 1) {
        clearInterval(Campus);
    }
}

function placement() {
    count3++;
    document.querySelector(".number3").innerHTML = count3;
    if (count3 == 100) {
        clearInterval(Placement);
    }
}

function years() {
    count4++;
    document.querySelector(".number4").innerHTML = count4;
    if (count4 == 10) {
        clearInterval(Years);
    }
}
