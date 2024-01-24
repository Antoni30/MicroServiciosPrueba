import { Router } from "express";
import Alumno from "../Model/Alumno-model.js";

const routes = Router();

routes.get("/alumnos", async (req, res) => {
  try {
    const addTask = await Alumno.find();
    res.status(201).json(addTask);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error No se encuentra ningun dato");
  }
});

routes.post("/alumnos", async (req, res) => {
  const alumno = Alumno(req.body);
  try {
    const addAlumno = await alumno.save();
    res.status(201).send(addAlumno)
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al agregar Alumnos");
  }
});

routes.put("/alumnos/:id", async (req, res) => {
  const { id } = req.params;
  const { name, apellido, edad } = req.body;
  try {
    const alumnos = await Alumno.updateOne(
      { _id: id },
      { $set: { name, apellido,edad} }
    );
    res.status(201).json(alumnos);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error No se encuentra ningun dato");
  }
});

routes.delete("/alumnos/:id",async(req,res)=>{
    const { id } = req.params;
    try {
      const alumno = await Alumno.deleteOne({_id: id});
      res.status(201).json(alumno);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error No se encuentra ningun dato");
    }
});

export default routes;
