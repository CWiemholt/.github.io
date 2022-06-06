
function myFunction() {

  let x = document.getElementById("validator").value;

  let text;
  if (isNaN(x) || x < 1 || x > 100) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  document.getElementById("demo").innerHTML = text;
}
