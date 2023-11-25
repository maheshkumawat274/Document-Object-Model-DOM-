//Attributes in the DOM refer to the characteristics or properties of HTML elements.
//getAttribute and setAttribute are methods in the JavaScript DOM that allow to get and set the values of attributes on HTML elements.

//getAttribute:
// The getAttribute method is used to retrieve the value of a specified attribute on the selected HTML element.
// It takes one parameter, which is the name of the attribute we want to retrieve.
// If the attribute is not present, getAttribute returns null

var setAtt = document.getElementById("mk");
var value = setAtt.getAttribute("color")
console.log(value);

//setAttribute:
// The setAttribute method is used to set the value of a specified attribute on the selected HTML element.
// It takes two parameters: the name of the attribute and the value to set.
// If the attribute already exists, its value is updated; otherwise, a new attribute is added to the element.

var setAtt = document.getElementById("mk");
setAtt.setAttribute("class","Mahesh");
var set = setAtt.getAttribute("class");
console.log(set);
var checkset = setAtt.hasAttribute("class");
console.log(checkset)

//removeAttribute:
// The removeAttribute method is used to remove a specified attribute from the selected HTML element.
// It takes one parameter, which is the name of the attribute to be removed.
// If the specified attribute is not present on the element, the method does nothing.

var remove = setAtt.removeAttribute("class");
console.log(remove);
var checkremove = setAtt.hasAttribute("classs");
console.log(checkremove);

//hasAttribute is check this properties is exist or not. if this is exist then output is true otherwise false.

var mylink = document.getElementById("mylink");
if(mylink.hasAttribute("target")){
 console.log("Link has a target attribute")
}else{
 console.log("Link does not a target attribute");
}

// Accessing Standard Properties: in input Element:

var myinput = document.getElementById("myinput");
var inputValue = myinput.value;
console.log("input value " + inputValue)