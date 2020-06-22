function onload() {
  //   alert("Function onload() called");
  document.getElementById("timestamp").innerHTML = Date();
}
function checkNumber() {
  var theNumber, theMessage;

  theNumber = document.getElementById("smallnumber").value;

  if (isNaN(theNumber) || theNumber < 1 || theNumber > 10) {
    theMessage = "Number was expected to be betwwen 1 to 10";
  } else {
    theMessage = "Number is good";
  }

  document.getElementById("numberMessage").innerHTML = theMessage;
}
