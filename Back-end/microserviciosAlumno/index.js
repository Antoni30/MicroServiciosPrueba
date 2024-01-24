import express from "express";
import { connectDB } from "../db.js";
import rutaAlumnos from "./routes/alumnos.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.get("/", (req, res) => {
  res.send("Servicio Estudiante");
});
app.use("/api", rutaAlumnos);

app.listen(2024, () => {
  console.log("Servicio Alumnos");
});
