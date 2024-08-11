const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors({origin:'*'}))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

require('dotenv').config()
const PORT = process.env.PORT || 4000

const emailRoutes = require('./routes/emailRoutes')

app.use('/email', emailRoutes)

app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})
