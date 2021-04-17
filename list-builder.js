

/*LAURA*/
/* Log In Validation */ 
function log_in(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value; 

    if (username=="" || password=="" || password.length <9 || password.length >9){
        alert('You must enter username and 9 character password');
        return false;                       //this specifies that there must be input into both username and password, and password must be a length of 9 characters
    }
    else{
        return true;
    }
}

/* Forgot Password Validation - not working */ 
function forgot_password(){
    var email = document.getElementById('email').value;

    if (email=="" || email.length <10){
        alert('You must enter a valid email address');
        return false;                       //this specifies that there must be input into the email address field
    }
    else{
        return true;
    }
}

/*Laura old / not working code*/
/*Log In Show / Hide - not working 
$(document).ready(function(){
    $("#ForgotPasswordButton").click(function(){
        $("#ForgotPasswordForm").hide();
    });
});*/

/*Trying to do show/hide on subscribe
$(document).ready(function(){
    $(".susc-btn").click(function(){
        $("#subsText").hide;
    });
});*/

/*Fade In Not Working
$(document).ready(function(){   
    $(".btn.enquire").click(function(){
        $(".Enquire").fadeIn("slow");
    });
});*/

/*OLD CODE - NOT NEEDED*/
/*function openNav() {
    document.getElementById("mySideNav").style.width=250px;
}

function closeNav() {
    document.getElementById("mySideNav").style.width="0";
}*/

/*function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(51.508742, -0.120850),
        zoom:5,
    };
    var map= new google.maps.Map(document.getElementById("GoogleMap"),mapProp);
}*/

/*RONALD*/

// Trainings Transformation
$("box-trans").hide();
$(document).ready(function () {
  $("#btnFadeOut").click(function () {
    $("#box-trans").fadeOut("slow", function () {
      $("#btnFadeOut").text("Hide It");
    });
  });
});
$(document).ready(function () {
  $("#btnFadeIn").click(function () {
    $("#box-trans").fadeIn("slow", function () {
      $("#btnFadeIn").text("Hard Work Pays Off");
    });
  });
});
$(document).ready(function () {
  $("#box-trans").fadeOut("fast");
});

/*Subscribe*/
var modalBtn = document.querySelector(".modal-btn");
var modalBg = document.querySelector(".modal-bg");
var modalClose = document.querySelector(".modal-close");
modalBtn.addEventListener("click", function () {
  modalBg.classList.add("bg-active");
});
modalClose.addEventListener("click", function () {
  modalBg.classList.remove("bg-active");
});

function validator(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;

  console.log("email", email);

  if (!email) {
    return;
  }

  modalBg.classList.remove("bg-active");
}

/*BMI*/
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const calculate = document.querySelector("#calculate");
const yourBMI = document.querySelector("#finalBMI");

calculate.addEventListener("click", () => {
  if (height.value != "" && weight.value != "") {
    let finalBMI = (weight.value / (height.value * height.value)) * 10000;
    yourBMI.innerHTML = `Your BMI Is : <span> ${finalBMI.toFixed(2)} </span>`;
  } else {
    yourBMI.innerHTML = `Please Enter Correct Value`;
  }
});


