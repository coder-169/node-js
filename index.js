const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Home!')
})
app.post('/register', (req, res) => {
    res.json({success:true, message:'Register!',data:req.body})
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})