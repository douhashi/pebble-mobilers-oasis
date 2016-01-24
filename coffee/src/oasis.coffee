class Oasis
  constructor: (@entry) ->
    @title = @entry.title
    @distance = @entry.distance
    @latitude = @entry.latitude
    @longitude = @entry.longitude

this.exports = Oasis
