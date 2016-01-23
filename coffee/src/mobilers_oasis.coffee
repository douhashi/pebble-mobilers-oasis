require 'ajax'
require 'oasis'

class MobilersOasis
  @ENDPOINT = 'http://oasis.mogya.com/api/v0/search'
  constructor: (@location) ->
  getOasis: (successCallback, failureCallback) ->
    console.log "[MobilersOasis#GetOasis] ENTER"

this.exports = MobilersOasis
