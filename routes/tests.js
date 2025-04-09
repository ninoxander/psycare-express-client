const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const response = await axios.get("http://localhost:3000/test");
        const tests = response.data;
        const count = tests.length;
        res.render("tests", { tests, count });
    } catch (error) {
        console.error("Error al consumir el endpoint /test:", error);
        res.render("tests", { error: "No se pudieron cargar los datos." });
    }
});

module.exports = router;