//beerlist birdwatcher list javascript

var hideShowFunction = function (evt) {
  var eventTarget = $(evt.target);
  var data = eventTarget.data();
  $('.view').removeClass('active');
  $(data.target).addClass('active')

  renderTemplate(data.target);
};

$('body').on('click','.view-switcher', function(evt){
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
    "location" : { "latitude" : 42, "longitude" : 42 }
    },
    {
    "id": "3",
    "title": "Pliny the Elder",
    "description" : "Good!",
    "image" : null,
    "location" : { "latitude" : 42, "longitude" : 42 }
    }
  ];

  localStorage.beers = JSON.stringify(beers);
}
else {
  console.log('it does not work');
}

//template compilation and rendering
var renderTemplate = function( target ) {
  var targetTemplate = target + '-template';
  var source = $(targetTemplate).html();
  var template = Handlebars.compile(source);

  //data
  var data = { beers: beers };
  var html = template(data);
  $(target).append(html);
};

//getting to the detail view from the list

//render the list as soon as the page loads
renderTemplate('#full-list');
