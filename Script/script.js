/*JavaScript*/
console.log("Testing");
/*Variables*/

var toggleKey = true;

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
function displayDefaultHomePage(){
  toggleKey=true;
  console.log("HomePage or Logo Button is pressed");
  var login_block = document.getElementById("loginBlock");
  login_block.style.display="none";
  var homepage = document.getElementsByClassName("homePage");
  var i=0;
  for (i = 0; i < homepage.length; i++) {
  homepage[i].style.display="block";
}
  console.log("Enabled default homepage and Disabled login form");
}

/* End of To Hide Login Form and Display Default HomePage */


/* To display Login Form and Hide Default HomePage */
function displayLoginForm(){
  toggleKey=false;
  console.log("Login Button is pressed");
  var login_block = document.getElementById("loginBlock");
  login_block.style.display="block";
  var homepage = document.getElementsByClassName("homePage");
  var i=0;
  for (i = 0; i < homepage.length; i++) {
  homepage[i].style.display="none";
}

  console.log("Disabled default homepage and enabled login form");
}

/* End of  To display Login Form and Hide Default HomePage  */
