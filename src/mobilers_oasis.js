(function() {
  var MobilersOasis;

  require('ajax');

  require('oasis');

  MobilersOasis = (function() {
    MobilersOasis.ENDPOINT = 'http://oasis.mogya.com/api/v0/search';

    function MobilersOasis(location) {
      this.location = location;
    }

    MobilersOasis.prototype.getOasis = function(successCallback, failureCallback) {
      return console.log("[MobilersOasis#GetOasis] ENTER");
    };

    return MobilersOasis;

  })();

  this.exports = MobilersOasis;

}).call(this);
