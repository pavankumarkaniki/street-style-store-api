const express = require("express");
const router = express.Router();

// Sample login route
router.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "password") {
        res.json({ token: "fake-jwt-token" });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

module.exports = router;
