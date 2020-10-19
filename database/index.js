const mongoose = require("mongoose");
const conn = require("./dbConnection");

class database {
    constructor() {
        this.mongo()
    }

    mongo() {
        this.mongoConnection = mongoose.connect(conn.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true
        })
    }
}

module.exports = new database();