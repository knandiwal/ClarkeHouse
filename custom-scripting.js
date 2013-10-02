<!--Swipe to go back -->
$(document).bind('swiperight', function () {
    history.back();
});


document.addEventListener('deviceready', onDeviceReady, false);   


<!--Calendar Script Files -->
$(document).ready(function() {
    $('#calendar').fullCalendar({
        events: 'https://www.google.com/calendar/feeds/f5umpqa9cdr4v6i2tccpvq5scs%40group.calendar.google.com/public/basic'
    });
});

