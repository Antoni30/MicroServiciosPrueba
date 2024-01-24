import express from "express";
import ruta from "./routes/tareas.js";
import { connectDB } from "../db.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.get("/", (req, res) => {
  res.send("Servicio Tareas");
});
app.use("/api", ruta);

app.listen(2000, () => {
  console.log("Servicio Tareas");
});
