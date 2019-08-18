const express = require("express");
const server = express();
const rotas = require("./rotas");

server.use("/api", rotas);

server.listen(3000, () => {
    console.log("executando na 3000!!!");
})