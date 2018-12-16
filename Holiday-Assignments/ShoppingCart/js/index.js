console.log('script connected')
// Remove Items From Cart
$('a.remove').click(function () {
  event.preventDefault();
  $(this).parent().parent().parent().hide(400);

})

$('p#remove').click(function () {
  event.preventDefault();
  console.dir($(this).parent().parent().parent());
  $(this).parent().parent().parent().hide(400);

})

// Just for testing, show all items
$('a.btn.continue').click(function () {
  $('li.items').show(400);
})

$('totalItem').click(function () {
  alert()
})

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("previewModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

