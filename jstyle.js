// 4. document.write will be the results page... See if it's styleable

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the crurrent tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    //change attribute to submit
    document.getElementById("nextBtn").innerHTML = "Submit";
      setTimeout(function () {
          document.getElementById("nextBtn").setAttribute("type" , "submit");
        }, 1000);
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}


function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    //Call show dog result function here:
    // document.querySelector(".dogResult").style.display="block";
    // document.querySelector("#regForm").style.display="none";
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}

//Show results
function results(){
  if (document.getElementById("size1", "loyality1", "trainable1", "grooming1", "temperature1").checked) {
    size = document.getElementById("size1").value;
    loyality = document.getElementById("loyality1").value;
    trainable = document.getElementById("trainable1").value;
    grooming = document.getElementById("grooming1").value;
    temperature = document.getElementById("temperature1").value;

  } else if (document.getElementById("size2", "loyality2", "trainable2", "grooming2", "temperature2").checked) {
    size = document.getElementById("size2").value;
    loyality = document.getElementById("loyality2").value;
    trainable = document.getElementById("trainable2").value;
    grooming = document.getElementById("grooming2").value;
    temperature = document.getElementById("temperature2").value;

  } else {
      size = document.getElementById("size3").value;
      loyality = document.getElementById("loyality3").value;
      trainable = document.getElementById("trainable3").value;
      grooming = document.getElementById("grooming3").value;
      temperature = document.getElementById("temperature3").value;
   }

      document.write ("<span style=\"color:#333; font-size: 50px; font-family: raleway; padding-left: 30%\">The Results of Your Breed!" + "<\/span>" + "<br><br>");

      document.write("<span style=\"color:#333; font-size: 16px; font-family:raleway; padding-left: 30%\"><strong>Size Dog:</strong> " + size + "<\/span>" + "<br>");

      document.write("<span style=\"color:#333; font-size: 16px; font-family: raleway; padding-left: 30%\"><strong>Affectionate:</strong> " + loyality + " dog.<\/span>" + "<br>");

      document.write ("<span style=\"color:#333; font-size: 16px; font-family: raleway; padding-left: 30%\"><strong>Trainable:</strong> " + trainable + "<\/span>" + "<br>");

      document.write ("<span style=\"color:#333; font-size: 16px; font-family:raleway; padding-left: 30%\"><strong>Grooming:</strong> " + grooming + "<\/span>" + "<br>");

      document.write ("<span style=\"color:#333; font-size: 16px; font-family: raleway; padding-left: 30%\"><strong>Temperature:</strong> " + temperature + "<\/span>" + "<br>");

}
