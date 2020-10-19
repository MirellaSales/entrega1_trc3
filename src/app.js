const express = require("express");
const matricula = require("./routes");

require("../database/index.js");

class App{
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();

    }
    middlewares(){
        this.app.use(express.json());
    }

    routes(){
        this.app.use(matricula);
    }
}



module.exports = new App().app;
