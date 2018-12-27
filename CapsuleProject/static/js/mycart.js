console.log('myCart connected');

var modal = document.getElementById('myCartModal');
var btn = document.getElementById("myCart");
var span = document.getElementsByClassName("close")[0];
var body =document.querySelector('body');

btn.onclick = function() {
  modal.style.display = "block";
  body.style.overflow = "hidden";
}

span.onclick = function() {
  modal.style.display = "none";
  body.style.overflow = "";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    body.style.overflow = "";
  }
}
