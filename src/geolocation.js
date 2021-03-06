(function() {
  var Geolocation;

  Geolocation = (function() {
    function Geolocation() {}

    Geolocation.getCurrentPosition = function(successCallback, failureCallback) {
      return navigator.geolocation.getCurrentPosition((function(_this) {
        return function(location) {
          location = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
          };
          return successCallback(location);
        };
      })(this), (function(_this) {
        return function(err) {
          console.log('[Geolocation.getCurrentPosition] Error: (' + err.code + '): ' + err.message);
          return failureCallback(err);
        };
      })(this));
    };

    return Geolocation;

  })();

  this.exports = Geolocation;

}).call(this);
