const Disciplina = require("../models/disciplina");
const disciplina = require("../src/routes");

class DisciplinaController{
    async index(req, res) {
        try {
            const disciplinas = await Disciplina.find();
            return res.status(200).json(disciplinas);

        } catch (error){
            return res.status(500).json({ message: `Erro no servidor! ${error}` });
        }
    }

    async store(req, res) {
        const { codigo } = req.body;
        console.log(codigo)
        if (!(codigo)) {
          return res
            .status(422)
            .json({ message: "O código da disciplina é obrigatório!" });
        }
        
        try {
          const disciplina = await Disciplina.create(req.body);
          return res.status(200).json({ message: "Disciplina criada com sucesso!" });

        } catch (error) {
          return res.status(500).json({ message: `Erro no servidor! ${error}` });
        } 

    }


// Atualizar 
    async update(req, res) {
        const { codigo } = req.params;
    
        const disciplinaToUpdate = await Disciplina.findOne({
          codigo: codigo,
        });
    
        if (!disciplinaToUpdate) {
          return res
            .status(422)
            .json({ message: "Disciplina não existe, ID inválido" });
        }
        
        await Disciplina.update(req.body);

        return res.status(200).json({ message: "Disciplina atualizada com sucesso!" });
    }

    async delete(req, res) {
        const disciplinaToDelete = await Disciplina.findOne({ codigo: req.params.codigo });
        console.log (disciplinaToDelete)

        if (!disciplinaToDelete) {
          return res
            .status(422)
            .json({ message: "Disciplina não existe, ID inválido" });
        }
    
        await Disciplina.deleteOne({ codigo: req.params.codigo });
    
        return res.json({ message: "Disciplina excluída!" });
      }

}


module.exports = new DisciplinaController();
