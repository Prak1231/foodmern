const express = require('express')
const db = require('./db')
const Pizza = require('./models/pizzaModel')

const app = express()

app.use(express.json())

const pizzasRoute = require('./Routes/pizzasRoute')
const userRoute = require('./Routes/userRoute')
const ordersRoute = require('./Routes/ordersRoute')

app.use('/api/pizzas/', pizzasRoute)
app.use('/api/users/', userRoute)
app.use('/api/orders/', ordersRoute)

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`Server running on port number ${port}🔥`)
})

// DATABASE='mongodb+srv://prakash:<PASSWORD>@cluster0.nbtkiwp.mongodb.net/User-store?retryWrites=true&w=majority'
// DATABASE_PASSWORD=prak1234
