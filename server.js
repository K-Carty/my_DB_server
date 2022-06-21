const express = require('express')
const app = express()
const port = 4000

app.get('/set', (req,res) => {
  const somevalue = req.query.somekey;
  app.set('somekey', somevalue)
  res.send({ 'somevalue': somevalue })
})

app.get('/get', (req,res) => {
  const somekey = req.query.key
  res.send(app.get(somekey))
})

app.listen(port, () => { 
  console.log(`DB server app listening at http://localhost:${port}`)
});

module.exports = app