// JavaScript Document

//function grayBg(){
//	document.getElementsByTagName('a').className = "active";
//}



/*function xy() {
    pos = document.getElementById('actualPage');
    var leftPos =pos.offsetLeft; 
	var topPos = pos.offsetTop;
	var topset = 0;
   /* while (pos==pos.offsetParent)
    	leftPos += pos.offsetLeft;
    pos = document.getElementById('main-nav');
    while (pos=pos.offsetParent)
    	topPos += pos.offsetTop;
    return [leftPos,topPos];*
	console.log(topPos);											
	if(topPos == topset){
		document.getElementById('actualPage').className="sticky";
	}
}
window.onscroll= xy();		*/	

var pos = document.getElementById("actualPage");
var stop = (pos.offsetTop);

window.onscroll = function (e) {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    console.log(scrollTop, pos.offsetTop);
    // left.offsetTop;

    if (scrollTop >= stop) {
		document.getElementById('main-nav').className = 'sticky';
		document.getElementById('sideBar').style.position='fixed';
		document.getElementById('sideBar').style.top='80px';
    } else {
		document.getElementById('main-nav').className = '';
		document.getElementById('sideBar').style.position='absolute';
		document.getElementById('sideBar').style.top='30px';
    }

}

function grayBg(){
	var anchor = document.getElementsByTagName('a');
	if(anchor.className=" "){
		this.className = "active";
	}
	else{
		this.className = "";
	}
}