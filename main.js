// ready
$(document).ready(
  function () {
    // next
    $('.next').click(
      function () {
        next();
      }
    );
    // prev
    $('.prev').click(
      function () {
        prev();
      }
    );
  }
);

// function next with loop and icon dot change
function next() {
  // remove active from img
  $('img.active').removeClass('active');
  // add active to following img
  $('img.active').addClass('active');
}

// function prev with loop and icon dot change
function prev() {
  // remove active from img
  $('img.active').removeClass('active');
  // add active to following img
  $('img.active').addClass('active');
}

// bonus adding keyboard command
// bonus super selecting image from dot
// super bonus make the script universal for other slider
