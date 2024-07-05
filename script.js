console.log("hello nilesh")
let btn = document.getElementById("btn");
let mail = document.getElementById("mailling").value;
let inp = document.forms[mail].value;
console.log(inp)
console.log(mail)
function openSub(addMail){


let html = `<div class="successbutton">
<i><img src="assets/images/icon-success.svg" alt=""></i>
<h1>Thanks for Subscribing!</h1>
<p>a confirmation email has been sent to <b>${addMail}</b>. Please open it to and click the button
    inside to confirm your subcription</p>
<button id="dissmiss">Dissmiss massage</button>
</div>`
document.querySelector(".container").innerHTML = html

}
console.log(mail)