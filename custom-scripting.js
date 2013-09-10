$( document ).bind( "mobileinit", function() {
    // Make your jQuery Mobile framework configuration changes here!

    $.mobile.allowCrossDomainPages = true;
    $.support.cors = true;
});

$('.myButton').click(function() {
  $.get('url', function(data) {
    var url = data.url;
    // This is just a wrapper for device.platform
    if (app.isAndroid()) {
      navigator.app.loadUrl(url, { openExternal:true });
    } else {
      window.location.href = url;
    }
  });
});
