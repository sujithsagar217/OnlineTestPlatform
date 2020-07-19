/*JavaScript*/
console.log("Testing");


/*Side Navbar in Mobile*/
document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelectorAll('.sidenav');
   var instances = M.Sidenav.init(elems);
 });

 // Or with jQuery

 /*$(document).ready(function(){
   $('.sidenav').sidenav();
 });*/


/*End of Side Navbar in Mobile*/


/* To Hide Login Form and Display Default HomePage */
function displayLoginForm(){
  console.log("Login Button is pressed");
  var login_block = document.getElementById("loginBlock");
  login_block.style.display="inline";
  console.log("Disabled default homepage and enabled login form");
}

/* End of To Hide Login Form and Display Default HomePage */
