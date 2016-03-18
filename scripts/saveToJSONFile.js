var organizers = require('../index.js')
var jsonfile = require('jsonfile')

var file = 'organizers-data.json'

jsonfile.writeFile(file, organizers, {spaces: 2}, function (err) {
  if (err) {
    console.error(err)
  }
  console.log(JSON.stringify(organizers, null, 2))
})
