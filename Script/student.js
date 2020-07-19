/*Side Navbar in Mobile*/
document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelectorAll('.sidenav');
   var instances = M.Sidenav.init(elems);
 });

 // Or with jQuery
var toggleKey=true;
 /*$(document).ready(function(){
   $('.sidenav').sidenav();
 });*/


/*End of Side Navbar in Mobile*/
/* function to display exams*/

 function viewExams(){
   toggleKey=true;
   console.log("View Exams is pressed");
   document.getElementById("student_Profile").style.display = "none";
   var viewexam=document.getElementsByClassName("ViewExams");
   var i=0;
   for(i=0;i<viewexam.length;i++){
     viewexam[i].style.display="block";
   }
   console.log("View Exams is enabled Profile is disabled");
 }

/*end function to display exams*/

/* function to display profile*/
function displayProfile(){
  toggleKey=false;
  console.log("Profile is pressed");
  var profile =document.getElementById("student_Profile");
  profile.style.display="block";
  var viewexam=document.getElementsByClassName("ViewExams");
  var i=0;
  for(i=0;i<viewexam.length;i++){
    viewexam[i].style.display="none";
  }
  console.log("Profile is enabled View Exams is disabled");
}

/* end function to diplay profile*/
