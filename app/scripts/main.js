//beerlist birdwatcher list javascript

var hideShowFunction = function (evt) {
  var eventTarget = $(evt.target);
  var data = eventTarget.data();
  $('.view').removeClass('active');
  $(data.target).addClass('active')

  renderTemplate(data.target, data.item);
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
    "location" : { "latitude" : 142, "longitude" : 124 }
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
var renderTemplate = function( target, item ) {
  var targetTemplate = target + '-template';
  var source = $(targetTemplate).html();
  var template = Handlebars.compile(source);

  var data;
  if (item) {
    var itemId = item.toString();
    var arr = $.grep( beers, function (beer, i) {
      return beer.id === itemId;
    });
    data = arr[0];
  }
   else {
    data = { beers: beers };
   }
  var html = template(data);
  $(target).html(html);
};

//getting to the detail view from the list

//render the list as soon as the page loads
renderTemplate('#full-list');
