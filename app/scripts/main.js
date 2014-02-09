//beerlist birdwatcher list javascript

var hideShowFunction = function (evt) {
  var eventTarget = $(evt.target);
  var data = eventTarget.data();
  $('.view').removeClass('active');
  $(data.target).addClass('active')
}

$('.view-switcher').on('click', function(evt){
  hideShowFunction(evt);
});
