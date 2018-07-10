const app = require('express')()
module.exports = { path: '/api', handler: app }

app.get('/echo', (req, res) => {
  res.json({mrah: 'blah'})
})
