//Events :
//Events in the DOM (Document Object Model) allow you to respond to user interactions or changes in the browser.
function Callme(){
 alert("are o lodu sun le !")
}
var a = document.getElementById("mybtn");
a.addEventListener("click",Callme)
a.addEventListener("click",function(){
 alert("hello bsdk !")
})
//a.removeEventListener("click",Callme);

var check = document.getElementById("thisKeyWord");
check.addEventListener("click",function(){
 console.log(this);
})

//. Mouseover and Mouseout Events:

mydiv.addEventListener("mouseover",function(){
 mydiv.style.backgroundColor="red";
})

mydiv.addEventListener("mouseout",function(){
 mydiv.style.backgroundColor="lightblue"
})

//keydown:

mykey.addEventListener("keydown",function(event){
 console.log("key pressed: ",event.key);
})

//Form Submission event:

myform.addEventListener("submit",function(event){
 event.preventDefault();
 alert("Form Submitted !")
})