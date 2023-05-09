//BOM
/* window.navigator
window.document
window.location
window.screen
//storage
window.localStorage
window.sessionStorage */


/// acces the elements

/* document.getElementById()//only gives first occureance of the element
document.getElementsByClassName()//all elements 
document.getElementsByTagName()//all elements 
document.getElementsByName()//list of all elements we generally use names for form elements */

function myfunction(event){
    console.log(event);
    event.preventDefault();
    var currentelement=event.target
    currentelement.inner="nice try"

}
var area=document.getElementById("demo");
area.addEventListener("paste",myfunction)

//creat a form using js
var input = document.createElement("input")
input.type="email"
input.className="form-control"
input.placeholder="email"

//to display it on screen first access the exesting form amd add to it here the exesting form has id customForm
var Myform=getElementById("customForm")
Myform.appendChild(input)