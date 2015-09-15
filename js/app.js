
var input = {
  "events": [
    {
      "occasion": "Birthday party",
      "invited_count": 120,
      "year": 2015,
      "month": 3,
      "day": 14
    },
    {
      "occasion": "Technical discussion",
      "invited_count": 23,
      "year": 2015,
      "month": 4,
      "day": 24
    },
    {
      "occasion": "Press release",
      "invited_count": 64,
      "year": 2015,
      "month": 6,
      "day": 7,
      "cancelled": true
    },
    {
      "occasion": "New year party",
      "invited_count": 55,
      "year": 2016,
      "month": 1,
      "day": 1
    }
  ]
};

// User interface
// Create interface from DOM to the event board.
$( document ).ready(function() {
    console.log( "ready!" );
    var $eventList = $('.displayBoardContainer');
    var $carousel = $('.carousel-inner');
    _.each(input.events, function(event){
        var eventItem = new Event(event);
        var $event = eventItem.createBoardItem();
        $eventList.append($event);
        $carousel.append('<div clas>').append($event);
    });
});

