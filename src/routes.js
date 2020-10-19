const router = require("express");
const DisciplinaController = require("../controllers/DisciplinaController");

const disciplina = new router();

disciplina.get("/", (req, res) => {
    return res.json("A aplicação está funfando porque o Paulo é top")
})

disciplina.get("/disciplina", DisciplinaController.index); // Retorna todas as disciplinas que está matriculado

disciplina.post("/disciplina", DisciplinaController.store); // Criar disciplinas

disciplina.put("/disciplina/:codigo", DisciplinaController.update); // Atualizar os dados de uma disciplina

disciplina.delete("/disciplina/:codigo", DisciplinaController.delete); //Deletar uma disciplina

module.exports = disciplina;