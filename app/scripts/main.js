//beerlist birdwatcher list javascript

var hideShowFunction = function (evt) {
  var eventTarget = $(evt.target);
  var data = eventTarget.data();
  $('.view').removeClass('active');
  $(data.target).addClass('active')
};

$('.view-switcher').on('click', function(evt){
  hideShowFunction(evt);
});

//localStorage
if (Modernizr.localstorage) {
  var beers = [
    {
    "id": "1",
    "title": "Pliny the Younger",
    "description" : "Good!",
    "image" : null,
    "location" : { "latitude" : 42, "longitude" : 42 }
    },
    {
    "id": "2",
    "title": "Racer 5",
    "description" : "Excellent",
    "image" : null,
    "location" : [42, 42]
    },
    {
    "id": "3",
    "title": "Pliny the Elder",
    "description" : "Good!",
    "image" : null,
    "location" : [42, 42]
    }
  ];

  localStorage.beers = JSON.stringify(beers);
}
else {
  console.log('it does not work');
}
