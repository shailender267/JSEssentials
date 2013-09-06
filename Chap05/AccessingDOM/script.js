var mainTitle = document.getElementById("mainTitle");

console.log("this is an element of type : ", mainTitle.nodeType );
console.log("the inner html is ", mainTitle.innerHTML );
console.log("child nodes: " , mainTitle.childNodes.length);

var myLinks = document.getElementsByTagName("a");
console.log("Links: ",myLinks.length);

var myNav = document.getElementById("homeNav");

console.log("NodeType: ", homeNav.nodeType);
console.log("the inner html is ", homeNav.innerHTML );