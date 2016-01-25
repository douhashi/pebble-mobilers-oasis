(function() {
  var Geolocation, MobilersOasis, UI, Vector2, Vibe, logoText, openOasesMenu, splashWindow, statusText;

  UI = require('ui');

  Vector2 = require('vector2');

  Vibe = require('ui/vibe');

  MobilersOasis = require('mobilers_oasis');

  Geolocation = require('geolocation');

  splashWindow = new UI.Window();

  logoText = new UI.Text({
    position: new Vector2(0, 35),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: "mobiler's oasis",
    textAlign: 'center'
  });

  statusText = new UI.Text({
    position: new Vector2(0, 65),
    size: new Vector2(144, 24),
    font: 'gothic-24-bold',
    text: "Get position ...",
    textAlign: 'center'
  });

  splashWindow.add(logoText);

  splashWindow.add(statusText);

  splashWindow.show();

  Geolocation.getCurrentPosition(function(location) {
    var mo;
    mo = new MobilersOasis();
    console.log(location.latitude, location.longitude);
    statusText.text("Searching ...");
    return mo.getOases(location, function(oases) {
      return openOasesMenu(oases);
    }, function(data) {
      return console.log('failure');
    });
  }, function(error) {
    return console.log('failure');
  });

  openOasesMenu = function(oases) {
    var i, item, items, len, menu, oasis;
    splashWindow.hide();
    items = [];
    for (i = 0, len = oases.length; i < len; i++) {
      oasis = oases[i];
      item = {
        title: oasis.title,
        subtitle: oasis.distanceToMetre() + ' m'
      };
      items.push(item);
    }
    menu = new UI.Menu({
      sections: [
        {
          items: items
        }
      ]
    });
    return menu.show();
  };

}).call(this);
