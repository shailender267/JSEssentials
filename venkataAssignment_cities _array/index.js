// JavaScript Document

// this is using the ul li tags


window.onload = function(){
	//here i defined the object	
	var myObj = [{name: "Moscow", count: 12, content: "<p>description</p>"}, 
				 {name:"Amsterdam", count: 25, content: "html"},
				 {name: "Lisbon", count: 15, content: "html"},
				 {name: "Berlin", count: 19, content: "html"},
				 {name: "Madrid", count: 25, content: "html"}];
				 
	//sorting of objects is done here				 
	myObj.sort(function(a, b){
		var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
		if (nameA < nameB) //sort string ascending
		return -1 
		if (nameA > nameB)
		return 1
		return 0 //default return value (no sorting)
	})  
	
	//then i s liced them into the small groups of 2 	
	var sliceCut1 = myObj.slice(0,2);
	var sliceCut2 = myObj.slice(2,4);
	var sliceCut3 = myObj.slice(4,5);
	
	
	//created a section just for the html and css styling	
	var test=document.createElement('section');
	test.setAttribute('id','test');
	
	document.body.appendChild(test);
	
	//created a ul for all the things differently
	var ul1 = document.createElement('ul');
	test.appendChild(ul1);
		
	var ul2 = document.createElement('ul');
	test.appendChild(ul2);	
	
	var ul3 = document.createElement('ul');
	test.appendChild(ul3);	
	
	
	//wrote a for loop where i used the array length as the end for the loop and i have created separate li for all uls and anchor tags in those li 
	 
	for (var i=0; i<myObj.length; i++){
		
		
		
		var li1 = document.createElement('li');
		ul1.appendChild(li1);
		
		var li2 = document.createElement('li');
		ul2.appendChild(li2);
		
		var li3 = document.createElement('li');
		ul3.appendChild(li3);
	
		var anCor1=document.createElement('a');
		li1.appendChild(anCor1);	 
		anCor1.setAttribute('href', '#');//setting the href attribute
		
		var anCor2=document.createElement('a');
		li2.appendChild(anCor2);	
		anCor2.setAttribute('href', '#');//setting the href attribute
		
		var anCor3=document.createElement('a');
		li3.appendChild(anCor3);	
		anCor3.setAttribute('href', '#');//setting the href attribute
		
		//here i have assigned the values using the sliced which i created at the beginning
		
		anCor1.innerHTML =anCor1.innerHTML + sliceCut1[i].name + '('+ sliceCut1[i].count  + ')';	
		anCor2.innerHTML =anCor2.innerHTML + sliceCut2[i].name + '('+ sliceCut2[i].count  + ')';	
		anCor3.innerHTML =anCor3.innerHTML + sliceCut3[i].name + '('+ sliceCut3[i].count  + ')';	
	} 	
	
	
};

























// this is using the anchor tags

//window.onload = function(){
//	var myObj = [{name: "Moscow", count: 12, content: "<p>description</p>"}, 
//				 {name:"Amsterdam", count: 25, content: "html"},
//				 {name: "Lisbon", count: 15, content: "html"},
//				 {name: "Berlin", count: 19, content: "html"},
//				 {name: "Madrid", count: 25, content: "html"}];
//	myObj.sort();
//	var test=document.createElement('section');
//	test.setAttribute('id','test');
//	
//	document.body.appendChild(test);
//	
//	
//	for (var i=0; i<myObj.length; i++){
//	
//		var anCor=document.createElement('a');
//	
//		test.appendChild(anCor);
//		anCor.setAttribute('href', '#');	 
//		
//		anCor.innerHTML =anCor.innerHTML + myObj[i].name + '('+ myObj[i].count  + ')';
//		
//	
//	} 
//	
//	var sortt = document.getElementById('test');
//	test.sort;
//};

