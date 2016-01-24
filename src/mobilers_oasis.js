(function() {
  var MobilersOasis, Oasis, ajax;

  ajax = require('ajax');

  Oasis = require('oasis');

  MobilersOasis = (function() {
    var _around1km, _generateUrlParams;

    MobilersOasis.ENDPOINT = 'http://oasis.mogya.com/api/v0/search';

    MobilersOasis.LATITUDE_1KM = 0.0090133729745762;

    MobilersOasis.LONGITUDE_1KM = 0.010966404715491394;

    function MobilersOasis() {}

    MobilersOasis.prototype.getOasis = function(location, successCallback, failureCallback) {
      console.log('[MobilersOasis#getOasis] ENTER');
      this.location = location;
      this.successCallback = successCallback;
      this.failureCallback = failureCallback;
      return ajax({
        url: MobilersOasis.ENDPOINT + _generateUrlParams(),
        type: 'json'
      }, function(data, status, request) {
        var entry, i, len, oases, oasis, ref;
        console.log('[MobilerOasis#getOasis] Success');
        oases = [];
        ref = data.results;
        for (i = 0, len = ref.length; i < len; i++) {
          entry = ref[i];
          oasis = new Oasis(entry);
          oases.push(oasis);
        }
        return this.successCallback(oases);
      }, function(data, status, request) {
        console.log('[MobilerOasis#getOasis] Failure');
        return this.failureCallback(data);
      });
    };

    _generateUrlParams = function() {
      var circle, params;
      circle = _around1km();
      params = [];
      params.push('n=' + circle.n);
      params.push('s=' + circle.s);
      params.push('e=' + circle.e);
      params.push('w=' + circle.w);
      return '?' + params.join('&');
    };

    _around1km = function() {
      var circle;
      circle = {};
      circle.n = this.location.latitude + MobilersOasis.LATITUDE_1KM;
      circle.s = this.location.latitude - MobilersOasis.LATITUDE_1KM;
      circle.e = this.location.longitude + MobilersOasis.LONGITUDE_1KM;
      circle.w = this.location.longitude - MobilersOasis.LONGITUDE_1KM;
      return circle;
    };

    return MobilersOasis;

  })();

  this.exports = MobilersOasis;

}).call(this);
