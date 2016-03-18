const organizers = require('../index.js')
const jsonfile = require('jsonfile')

const file = 'organizers-data.json'

jsonfile.writeFile(file, organizers, {spaces: 2}, (err) => {
  if (err) {
    console.error(err)
  }
  console.log(JSON.stringify(organizers, null, 2))
})
