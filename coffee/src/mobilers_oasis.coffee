require 'ajax'
require 'oasis'

class MobilersOasis
  @ENDPOINT = 'http://oasis.mogya.com/api/v0/search'
  constructor: (@location) ->
  getOasis: (successCallback, failureCallback) ->
    console.log "[MobilersOasis#GetOasis] ENTER"
    console.log @ENDPOINT

this.exports = MobilersOasis
