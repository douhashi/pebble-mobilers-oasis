class Geolocation
  @getCurrentPosition: (successCallback, failureCallback) ->
    navigator.geolocation.getCurrentPosition(
      (location) =>
        location = { latitude: location.coords.latitude, longitude: location.coords.longitude }
        successCallback location
      (err) =>
        console.log '[Geolocation.getCurrentPosition] Error: (' + err.code + '): ' + err.message
        failureCallback(err)
    )

this.exports = Geolocation
