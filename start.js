const app = require('./server.js')
const port = 4000
app.listen(port, () => { 
  console.log(`DB server app listening at http://localhost:${port}`)
});