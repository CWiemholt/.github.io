
function contact() {

  let x = document.getElementById("validator").value;
  const req = /['@]/;
  const forbid = /['!#$%^&*()]/;
  let text;
  if (x=="" || req.test(x) ==false || forbid.test(x) == true) {
    text = "Email not valid";
  } else {
    text = "Valid email";
  }
  document.getElementById("demo").innerHTML = text;
}
