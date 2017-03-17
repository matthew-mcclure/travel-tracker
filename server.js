const app = require('express')()
require('dotenv').config()
const port = process.env.PORT || 1234

app.use((req, res) => {
    res.send('hello from node')
})



app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})
