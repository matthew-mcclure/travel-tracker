const app = require('express')()
require('dotenv').config()
const port = process.env.PORT || 1234





app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})
