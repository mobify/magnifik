(function($) {

    // initialize magnifik
    $('a.z1').magnifik();


    // Manual tests : verify event names in README are indeed correct
    var $element = $('a.z1');
    var openingEvent = 'magnifik:opening';
    var openedEvent = 'magnifik:open';
    var closingEvent = 'magnifik:closing';
    var closedEvent = 'magnifik:close';

    $element.on(openingEvent, function(event) {
        console.log(openingEvent + ' event has been fired');
    });

    $element.on(openedEvent, function(event) {
        console.log(openedEvent + ' event has been fired');
    });

    $element.on(closingEvent, function(event) {
        console.log(closingEvent + ' event has been fired');
    });

    $element.on(closedEvent, function(event) {
        console.log(closedEvent + ' event has been fired');
    });

}(jQuery));