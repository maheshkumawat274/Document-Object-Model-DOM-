 var paragraph = document.createElement('p');
 paragraph.textContent="Hello bhaiji key haal hai !";
 //body.appendChild(paragraph);
 body.prepend(paragraph);
//body.before(paragraph);
//body.append(paragraph);

const newDiv = document.createElement('div');
const newText = document.createTextNode('Or Bhai sab badiya h na !');
newDiv.prepend(newText);
//body.append(newDiv);
body.prepend(newDiv);

//Removing an element:

//newDiv.remove();

//example combinig creation and removal:

var newCreateDiv = document.createElement('div');
var newCreateText = document.createTextNode('This is a new div');
newCreateDiv.appendChild(newCreateText);
body.after(newCreateDiv);
//remove the div after 10sec:
setTimeout(function(){
 newCreateDiv.remove();
},10000);

// replace

var replaceDiv = document.createElement('div');
replaceDiv.textContent="bhai sach m mja aa gya";
setTimeout(function(){
 replace.appendChild(replaceDiv)
},5000);

element.remove();