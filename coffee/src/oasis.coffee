class Oasis
  constructor: (@entry) ->
    @title = @entry.title
    @distance = @entry.distance
    @latitude = @entry.latitude
    @longitude = @entry.longitude
  distanceToMetre: ->
    Math.ceil(this.distance * 1000)

this.exports = Oasis
