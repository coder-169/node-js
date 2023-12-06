const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Home!')
})
app.get('/about', (req, res) => {
    res.send('About!')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})