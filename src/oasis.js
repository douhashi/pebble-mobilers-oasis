(function() {
  var Oasis;

  Oasis = (function() {
    function Oasis(entry) {
      this.entry = entry;
      this.title = this.entry.title;
      this.distance = this.entry.distance;
      this.latitude = this.entry.latitude;
      this.longitude = this.entry.longitude;
    }

    return Oasis;

  })();

  this.exports = Oasis;

}).call(this);
