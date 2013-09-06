// Two methods for timers - setTimeout and SetInterval (single / repeating)

function simpleMessage() {
	alert("This is just an alert box");
}
//setTimeout(simpleMessage,10000);
// settimeout is in milliseconds

var myImage = document.getElementById("mainImage");

var imageArray = ["_images/overlook.jpg","_images/winery_sign.jpg","_images/lunch.jpg",
				  "_images/bigSur.jpg","_images/flag_photo.jpg","_images/mission_look.jpg"];
var imageIndex = 0;

function changeImage() {
	myImage.setAttribute("src",imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

// setInterval is also in milliseconds


//clicking on the img to stop img timer



var intervalHandler = setInterval(changeImage,1000);
var clicked=true;

myImage.onclick = function(){
	if(clicked==true){
		clearInterval(intervalHandler);	
		clicked=false;
	} else{
		setInterval(changeImage,1000);
		clicked=true;
	}
}
