import { Router } from "express";
import Tarea from "../Model/Tarea-model.js"

const routes = Router();

routes.get("/tareas",async (req,res)=>{
    try {
        const addTask = await Tarea.find();
        res.status(201).json(addTask);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error No se encuentra ningun dato");
    }
});

routes.post("/tareas",async(req,res)=>{
    const addTarea = Tarea(req.body);
    try {
      const addTask = await addTarea.save();
      res.status(201).json(addTask);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error guardar Tareas");
    }
});

routes.put("/tareas/:id", async (req, res) => {
    const { id } = req.params;
    const { name, description} = req.body;
    try {
      const tareas = await Tarea.updateOne(
        { _id: id },
        { $set: { name, description} }
      );
      res.status(201).json(tareas);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error No se encuentra ningun dato");
    }
});

routes.delete("/tareas/:id",async(req,res)=>{
    const { id } = req.params;
    try {
      const addTarea = await Tarea.deleteOne({_id: id});
      res.status(201).json(addTarea);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error No se encuentra ningun dato");
    }
});

export default routes;