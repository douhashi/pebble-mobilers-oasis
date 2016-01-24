ajax  = require 'ajax'
Oasis = require 'oasis'

class MobilersOasis
  @ENDPOINT = 'http://oasis.mogya.com/api/v0/search'
  @LATITUDE_1KM  = 0.0090133729745762
  @LONGITUDE_1KM = 0.010966404715491394

  constructor: ->
  getOasis: (location, successCallback, failureCallback) ->
    console.log '[MobilersOasis#getOasis] ENTER'

    @location = location
    @successCallback = successCallback
    @failureCallback = failureCallback

    ajax { url: MobilersOasis.ENDPOINT + _generateUrlParams(), type: 'json' },
      (data, status, request) ->
        console.log '[MobilerOasis#getOasis] Success'
        oases = []
        for entry in data.results
          oasis = new Oasis entry
          oases.push oasis
        @successCallback oases

      (data, status, request) ->
        console.log '[MobilerOasis#getOasis] Failure'
        @failureCallback data

  _generateUrlParams = ->
    circle = _around1km()
    params = []
    params.push 'n=' + circle.n
    params.push 's=' + circle.s
    params.push 'e=' + circle.e
    params.push 'w=' + circle.w
    '?' + params.join '&'

  _around1km = ->
    circle = {}
    circle.n = @location.latitude  + MobilersOasis.LATITUDE_1KM
    circle.s = @location.latitude  - MobilersOasis.LATITUDE_1KM
    circle.e = @location.longitude + MobilersOasis.LONGITUDE_1KM
    circle.w = @location.longitude - MobilersOasis.LONGITUDE_1KM
    circle

this.exports = MobilersOasis
