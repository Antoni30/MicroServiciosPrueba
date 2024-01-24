import express from "express";
import cors from "cors";
//Importar la base de datos y llarmarla
import { connectDB } from "../db.js";
import routes from "./Routes/materias.js";

const app = express();
app.use(cors());

//COMO MIDDLEWARE
app.use(express.json());

//CONEXION BASE DE DATOS
connectDB();

app.get("/", (req, res) => {
  res.send("Servicio MATERIAS");
});

//Api :D
app.use("/api", routes);

app.listen(3000, () => {
  console.log("Servicio MATERIAS");
});
