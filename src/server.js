
const express = require("express");
const routes = require("./routes/routes");
const cors = require("cors");
const server = express();

server.use(cors());

server.use(express.json());

server.use(express.urlencoded({ extended:true }))

server.use(routes);

server.listen(3000, () => {
    console.log("Rodando")
});
