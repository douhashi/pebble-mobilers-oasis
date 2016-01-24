UI = require('ui')
Vector2 = require('vector2')
Vibe = require('ui/vibe')

# my module
MobilersOasis = require('mobilers_oasis')
Geolocation   = require('geolocation')

splashWindow = new UI.Window()
logoText = new UI.Text(
  position: new Vector2(0, 35)
  size: new Vector2(144, 30)
  font: 'gothic-24-bold'
  text: "mobiler's oasis"
  textAlign: 'center'
)

statusText = new UI.Text(
  position: new Vector2(0, 65)
  size: new Vector2(144, 24)
  font: 'gothic-24-bold'
  text: "Get position ..."
  textAlign: 'center'
)
splashWindow.add logoText
splashWindow.add statusText
splashWindow.show()

Geolocation.getCurrentPosition(
  (location) ->
    mo = new MobilersOasis()
    console.log location.latitude, location.longitude
    statusText.text("Searching ...")
    mo.getOases location,
      (oases) ->
        openOasesMenu(oases)
      (data) ->
        console.log 'failure'
  (error) ->
    console.log 'failure'
)

openOasesMenu = (oases) ->
  items = []
  for oasis in oases
    item = { title: oasis.title, subtitle: oasis.distanceToMetre() + ' m' }
    items.push item
  menu = new UI.Menu sections: [{ items: items }]
  menu.show()
