/*Side Navbar in Mobile*/

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

 /*End of Side Navbar in Mobile*/
 
  
 /*End of Side Navbar in Mobile*/
 
 document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

// Initialize collapsible (uncomment the lines below if you use the dropdown variation)
// var collapsibleElem = document.querySelector('.collapsible');
// var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

// Or with jQuery

//start of view results function
function viewResults(){
  var toggleKey=true;
  console.log("View results is pressed");
  document.getElementById("faculty_profile").style.display = "none";
  var viewres=document.getElementsByClassName("search");
  var i=0;
  for(i=0;i<viewres.length;i++){
    viewres[i].style.display="block";
  }
  console.log("View results is enabled Profile is disabled");
}
//end of view results function


//start of display profile function
function displayProfile(){
  var toggleKey=false;
  console.log("Profile is pressed");
  var profile =document.getElementById("student_profile");
  profile.style.display="block";
  var viewres=document.getElementsByClassName("search");
  var i=0;
  for(i=0;i<viewres.length;i++){
    viewres[i].style.display="none";
  }
  console.log("Profile is enabled View results is disabled");
}

//end of display profile section