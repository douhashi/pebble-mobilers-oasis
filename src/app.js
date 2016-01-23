(function() {
  var MobilersOasis, UI, Vector2, Vibe, main;

  UI = require('ui');

  Vector2 = require('vector2');

  Vibe = require('ui/vibe');

  MobilersOasis = require('mobilers_oasis');

  main = new UI.Card({
    title: 'Pebble.js',
    icon: 'images/menu_icon.png',
    subtitle: 'Hello World!',
    body: 'Press any button.',
    subtitleColor: 'indigo',
    bodyColor: '#9a0036'
  });

  main.show();

  main.on('click', 'up', function(e) {
    var menu, mo;
    mo = MobilersOasis["new"];
    mo.getOasis({});
    menu = new UI.Menu({
      sections: [
        {
          items: [
            {
              title: 'Pebble.js',
              icon: 'images/menu_icon.png',
              subtitle: 'Can do Menus'
            }, {
              title: 'Second Item',
              subtitle: 'Subtitle Text'
            }
          ]
        }
      ]
    });
    menu.on('select', function(e) {
      console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
      console.log('The item is titled "' + e.item.title + '"');
    });
    menu.show();
  });

  main.on('click', 'select', function(e) {
    var textfield, wind;
    wind = new UI.Window({
      fullscreen: true
    });
    textfield = new UI.Text({
      position: new Vector2(0, 65),
      size: new Vector2(144, 30),
      font: 'gothic-24-bold',
      text: 'Text Anywhere!',
      textAlign: 'center'
    });
    wind.add(textfield);
    wind.show();
  });

  main.on('click', 'down', function(e) {
    var card;
    card = new UI.Card;
    card.title('A Card');
    card.subtitle('Is a Window');
    card.body('The simplest window type in Pebble.js.');
    card.show();
  });

}).call(this);
