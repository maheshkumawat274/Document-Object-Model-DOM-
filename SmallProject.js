function addTodo(){
 var a = document.getElementById("newTodo").value;
 if(a==""){
  alert("Enter the any to do");
  return;
 }
 var b = document.createElement('li');
 b.textContent=a;
 //b.addEventListener("click",function(){
  //b.classList.toggle('done');
 //})
 todoList.append(b);

 document.getElementById("newTodo").value="";
}