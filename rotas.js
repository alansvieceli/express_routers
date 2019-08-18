const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
    const init = Date.now();
    next();
    console.log(`Tempo = ${Date.now() -  ini} ms.`);
});

//http://localhost:3000/api/produtos/2
router.get('/produtos/:id', (req, res) => {
    res.json({id: req.params.id, name: "Caneta"});
});

router.get("clientes/:id/:name", (req, res) => {
    res.json({id: req.param.id, name: req.params.name});
});

module.exports = router;