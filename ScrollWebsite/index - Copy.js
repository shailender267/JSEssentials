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


window.onscroll = function (e) {
   var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    console.log(scrollTop, pos.offsetTop);
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
var scrollNewzLoop;
var newzpos = document.getElementById('newz');
console.log(newzpos.offsetTop);
var incrementNewzScroll = function() {
        window.scrollBy(0, 30) ;
}
var scrollnewzTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
var scrollToNewz = function(){
	//incrementScroll();
	//setInterval(window.scrollTo(0,1730),8000);
	scrollNewzLoop = setInterval( incrementNewzScroll, 100) ; 
	
	if(scrollnewzTop >= 1730 ){
		clearInterval( scrollNewzLoop ) ;
	}
}




