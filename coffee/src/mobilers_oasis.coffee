ajax  = require 'ajax'
Oasis = require 'oasis'

class MobilersOasis
  @ENDPOINT = 'http://oasis.mogya.com/api/v0/search'
  @LATITUDE_1KM  = 0.0090133729745762
  @LONGITUDE_1KM = 0.010966404715491394

  constructor: ->
  getOases: (location, successCallback, failureCallback) ->
    console.log '[MobilersOasis#getOases] ENTER'

    @location = location
    @successCallback = successCallback
    @failureCallback = failureCallback

    ajax { url: MobilersOasis.ENDPOINT + generateUrlParams(), type: 'json' },
      (data, status, request) =>
        console.log '[MobilersOasis#getOases] Success'
        oases = []
        for entry in data.results
          oasis = new Oasis entry
          oases.push oasis
        @successCallback oases

      (data, status, request) =>
        console.log '[MobilersOasis#getOases] Failure'
        @failureCallback data

  generateUrlParams: (location) ->
    circle = _around1km.call(this)
    params = []
    params.push 'n=' + circle.n
    params.push 's=' + circle.s
    params.push 'e=' + circle.e
    params.push 'w=' + circle.w
    params.push 'lat=' + @latitude
    params.push 'lng=' + @longitude
    '?' + params.join '&'

  _around1km = ->
    circle = {}
    circle.n = @location.latitude  + MobilersOasis.LATITUDE_1KM
    circle.s = @location.latitude  - MobilersOasis.LATITUDE_1KM
    circle.e = @location.longitude + MobilersOasis.LONGITUDE_1KM
    circle.w = @location.longitude - MobilersOasis.LONGITUDE_1KM
    circle

this.exports = MobilersOasis
