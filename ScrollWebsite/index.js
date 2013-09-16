// JavaScript Document

/*this is for the down button on click function*/

var incrementScroll = function() {
        window.scrollBy(0, 30) ;
}

var scrollLoopId;
var startScrollLoop = function() {
	scrollLoopId = setInterval( incrementScroll, 100) ; 
}

var stopScrollLoop = function() {
	clearInterval( scrollLoopId ) ;
}



/*this is for the scroll function which is used by the mouse scroll*/

var pos = document.getElementById("actualPage1");
var stop = (pos.offsetTop-100);

window.onscroll = function () {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    //console.log(scrollTop, pos.offsetTop);
    // left.offsetTop;

    if (scrollTop >= stop) {
		document.getElementById('main-nav').className = 'sticky';
		//document.getElementById('sideBar').style.position='fixed';
		//document.getElementById('sideBar').style.top='80px';
		stopScrollLoop();
    } else {
		document.getElementById('main-nav').className = '';
		//document.getElementById('sideBar').style.position='absolute';
		//document.getElementById('sideBar').style.top='30px';
    }
}

//this is for the newz click
function newzscroll(){
		
	var newzpos = document.getElementById("newz").offsetTop;
	var newzStop = (newzpos - 767);
	var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	console.log(scrollTop, newzpos);
	
	var incrementNewzScroll = function() {
        window.scrollBy(0, 30) ;
	}
	
	var scrollNewzLoopId;
	
	var startNewzScrollLoop = function() {
		scrollNewzLoopId = setInterval( incrementNewzScroll, 100) ; 
	}

	
	var stopNewzScrollLoop = function() {
		clearInterval( scrollLoopId ) ;
	}
	
	startNewzScrollLoop();
	
	
	if (scrollTop >= newzStop) {	
		stopNewzScrollLoop();
	}
}

function homeTopScroll(){
	
}