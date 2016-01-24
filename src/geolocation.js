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
        return function(error) {
          console.log('[Geolocation.getCurrentPosition] Error: (' + err.code + '): ' + err.message);
          return failureCallback(error);
        };
      })(this));
    };

    return Geolocation;

  })();

  this.exports = Geolocation;

}).call(this);
