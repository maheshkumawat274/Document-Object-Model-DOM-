//querySelector is a method in JavaScript that allows  to select and retrieve the first element that matches a specified CSS selector from the DOM (Document Object Model). 
//It's part of the DOM API and is commonly used to manipulate and interact with HTML elements on a webpage.
// 4 Pillars of DOM :
//     1. Selection of an Element
//     2. Changing HTML
//     3. Changing CSS
//     4. Even Listener


  //  1. Selection of an Element :
  /*var a = document.querySelector("h1");
  console.log(a);
  var b = document.querySelector("p");
  console.log(b);
  //class example
  var exClass = document.querySelector(".example");
  
  console.log(exClass)
  //id exmaple
  var exId = document.querySelector("#mk");
  var d = document.getElementById("mk");
  d.style.fontSize="20px";
  console.log(exId);*/


  //2. Changing HTML
  /*var ChangeHtml = document.querySelector("h1");
  ChangeHtml.innerHTML=" Changed the h1 tag name Prince yadav";*/


  //3. Changing CSS
  /*var ChangeCss = document.querySelector("h1");
  var x = document.querySelector(".example");
  ChangeCss.style.backgroundColor="red";
  ChangeCss.style.fontSize="50px";
  x.style.backgroundColor="green";*/


  //4. Event Listener
  var a = document.querySelector("h1");
  a.addEventListener("click",function(){
   console.log("Or bhai aa gya swad !");
   a.innerHTML="kya change ho jayega !";
   a.style.color="yellow";
   a.style.backgroundColor="black"
  })