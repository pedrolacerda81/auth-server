const app = require('express')()
const consign = require('consign')
const db = require('./config/db')

app.db = db

consign()
    .then('./config/middleware.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(4000, () => {
    console.log('Auth server executando...')
})