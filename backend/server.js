/**
 * This module sets up an Express server and connects to a database.
 * It defines routes for various endpoints and starts the server on a specified port.
 */
const express = require("express")
const cors = require("cors")

const app = express()

var corsOptions = {}

app.use(cors(corsOptions))

// parse requests of content-type - application/json
app.use(express.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

const db = require("./app/models/index.js")
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Database id up 🙂")
    })
    .catch(err => {
        console.log("Database id down ☹️", err)
        process.exit()
    })

app.get("/", (req, res) => {
    res.json({ message: "Loan Vista is up fam...!!!!" })
})

require("./app/routes/users.routes.js")(app)
require("./app/routes/loans.routes.js")(app)
require("./app/routes/offers.routes.js")(app)
require("./app/routes/requests.routes.js")(app)
require("./app/routes/transfers.routes.js")(app)
require("./app/routes/notifications.routes.js")(app)

// set port, listen for requests
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})