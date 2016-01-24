class Geolocation
  @getCurrentPosition: (successCallback, failureCallback) ->
    navigator.geolocation.getCurrentPosition(
      (location) =>
        location = { latitude: location.coords.latitude, longitude: location.coords.longitude }
        successCallback location
      (error) =>
        console.log '[Geolocation.getCurrentPosition] Error: (' + err.code + '): ' + err.message
        failureCallback(error)
    )

this.exports = Geolocation
