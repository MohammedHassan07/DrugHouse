const express = require('express')
const cookieParser = require('cookie-parser')
const hbs = require('hbs')

const { PORT } = require('./config/config')
const DBConnection = require('./middleware/connectToDB')
const adminRoutes = require('./routes/adminRoutes')
const navRoutes = require('./routes/navRoutes')
const blogsRoutes =require('./routes/blogsRoutes')

const app = express()


app.set('view engine', 'html')
app.engine('html', hbs.__express)
app.use(express.json())
app.use(express.static('public'))
app.use(cookieParser())

app.use(DBConnection)
app.use(adminRoutes)
app.use(navRoutes)
app.use(blogsRoutes)


app.listen(PORT, () => {

    console.log('Server is up at', PORT)
})