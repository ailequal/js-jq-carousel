// ready
$(document).ready(
  function () {
    // next
    $('.next').click(
      function () {
        clickNext();
      }
    );
    // prev
    $('.prev').click(
      function () {
        clickPrev();
      }
    );
  }
);

// function next with loop and icon dot change
function clickNext() {
  // var
  var imageActive = $('img.active');
  var imageNext = imageActive.next();
  var iconActive = $('i.active');
  var iconNext = iconActive.next();
  // if else
  if (imageActive.hasClass('last')) {
    // last handler
    imageActive.removeClass('active');
    $('img.first').addClass('active');
    iconActive.removeClass('active');
    $('i.first').addClass('active');
  } else {
    // next one
    imageActive.removeClass('active');
    imageNext.addClass('active');
    iconActive.removeClass('active');
    iconNext.addClass('active');
  }
}

// function prev with loop and icon dot change
function clickPrev() {
  // var
  var imageActive = $('img.active');
  var imagePrev = imageActive.prev();
  var iconActive = $('i.active');
  var iconPrev = iconActive.prev();
  // if else
  if (imageActive.hasClass('first')) {
    // first handler
    imageActive.removeClass('active');
    $('img.last').addClass('active');
    iconActive.removeClass('active');
    $('i.last').addClass('active');
  } else {
    // prev one
    imageActive.removeClass('active');
    imagePrev.addClass('active');
    iconActive.removeClass('active');
    iconPrev.addClass('active');
  }
}

// bonus adding keyboard command
// bonus super selecting image from dot
// super bonus make the script universal for other slider
