const mongoose = require("mongoose");
const conn = require("../database/dbConnection");
const autoIncrement = require("mongoose-auto-increment");

mongoose.connect(conn.url);
autoIncrement.initialize(mongoose);

const DisciplinaSchema = new mongoose.Schema(
    {
        codigo: {
            type: Number,
            required: true,
            unique: true
        },
        nome: {
            type: String,
            required: true
        },
        professor: {
            type: String,
            required: true
        },
        departamento: {
            type: String,
            required: true
        },
        QtdCreditos: {
            type: Number,
            require: true,
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

DisciplinaSchema.plugin(autoIncrement.plugin, {
    model: "Disciplina",
    field: "id",
    startAt: 1,
    incrementBy: 1,
});

module.exports = mongoose.model("Disciplina", DisciplinaSchema);