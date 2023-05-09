/*window.document
window.location
window.screen
//storage
window.localStorage
window.sessionStorage */
/* window.alert()
window.confirm()
window.prompt() */
/* document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
document.getElementsByName()
//-------------------------------------
document.querySelector()
document.querySelectorAll() */


/* var firstname = document.getElementById("fname");
console.log(firstname);
firstname.type="password"
firstname.style="background-color: blue;color: white" */



/* function myfunction(event){
    console.log(event);
    event.preventDefault();
    var currentElement = event.target
    console.log(currentElement)
    currentElement.innerText = "Nice try don't copy"
}
var area=document.getElementById("demo");
area.addEventListener("paste",myfunction) */


var  myForm =document.getElementById("customForm");

var fname=document.createElement("input");
fname.type="text"
fname.className="form-control mt-3"
fname.style=""
fname.placeholder="Please enter First Name"
fname.id="fname"

var lname=document.createElement("input");
lname.type="text"
lname.className="form-control mt-3"
lname.style=""
lname.placeholder="Please enter Last Name"
lname.id="lname"

var input=document.createElement("input");
input.type="email"
input.className="form-control mt-3"
input.style=""
input.placeholder="Please enter Email Address"
input.id="user_email"

var dob=document.createElement("input");
dob.type="datetime-local"
dob.className="form-control mt-3"
dob.style=""
dob.id="dob"

var btn=document.createElement("button");
btn.type="submit"
btn.className="btn btn-primary mt-3 form-control"
btn.id="btn1"
btn.placeholder="Submit"
btn.innerText="Submit"

myForm.appendChild(fname)
myForm.appendChild(lname)
myForm.appendChild(input)
myForm.appendChild(dob)
myForm.appendChild(btn)

function handleSubmit(event){
    event.preventDefault()
    var formDetails={
        email:document.getElementById('user_email').value,
        fname:document.getElementById('fname').value,
        lname:document.getElementById('lname').value,
        dob:document.getElementById('dob').value
    }
    console.log(formDetails);
}

btn.addEventListener('click', handleSubmit);