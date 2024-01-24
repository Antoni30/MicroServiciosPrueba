import { Router } from "express";
import MateriaModels from "../Model/Materia-models.js";

const routes = Router();

routes.get("/materias", async (req, res) => {
    try {
        const addTask = await MateriaModels.find();
        res.status(201).json(addTask);
      } catch (error) {
        console.log(error);
        res.status(500).send("Error No se encuentra ninguna materia");
      }
});

routes.post("/materias", async (req, res) => {
    const materia = MateriaModels(req.body);
    try {
      const addMateria = await materia.save();
      res.status(201).json(addMateria);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error al agregar Materia");
    }
});

routes.put("/materias/:id", async (req, res) =>{
    const { id } = req.params;
    const { nameSubject, descriptionSubject} = req.body;
    try {
        const materia = await MateriaModels.updateOne(
        { _id: id },
        { $set: { nameSubject, descriptionSubject} }
        );
        res.status(201).json(materia);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error No se encuentra ningun dato");
  }
});

routes.delete("/materias/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const materia = await MateriaModels.deleteOne({_id: id});
      res.status(201).json(materia);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error No se encuentra ningun dato");
    }    
});

export default routes;

//ASYNC - ESPERAR LA RESPUESTA DEL SERVIDOR 