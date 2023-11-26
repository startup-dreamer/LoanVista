module.exports = app => {
    const user = require("../controllers/users.controller.js")
    const router = require("express").Router()

    // Create a new user
    router.post("/", user.create)

    // Retrieve all users
    router.get("/", user.findAll)

    // Retrieve a single user with address
    router.get("/:address", user.findOne)

    app.use("/users", router);
};