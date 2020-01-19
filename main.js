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
    // keyboard
    $(document).keydown(
      function () {
        // macos key
        if (event.keyCode === 39) {
          clickNext();
        } else if (event.keyCode === 37) {
          clickPrev();
        }
        // windows key
        else if (event.which === 100) {
          clickNext();
        } else if (event.which === 97) {
          clickPrev();
        }
      }
    )
    $('i.fa-circle').click(
      function () {
        // clickIcon();
        var iconActive = $('i.active');
        var iconInactive = $(this);
        var iconIndex = iconInactive.index();
        var imageActive = $('img.active');
        var imageInactive = $('img').index(iconIndex);
        // console.log($('i.fa-circle').index());
        // console.log($('.images img').index());
        iconActive.removeClass('active');
        iconInactive.addClass('active');
        imageActive.removeClass('active');
        // imageInactive.addClass('active');
        // var arrayIcon = [];
        // $('.nav i').each(
        //   function (i) {
        //     arrayIcon.push($('li'));
        // });
        // console.log(arrayIcon);
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

// function click on dot
// function clickIcon() {
//   var iconActive = $('i.active');
//   var iconInactive = $('i.fa-circle');
//   iconActive.removeClass('active');
//   $(this).addClass('active');
// }

// bonus super selecting image from dot
// super bonus make the script universal for other slider
