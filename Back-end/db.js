import mongoose from "mongoose";
import env from "dotenv";
env.config();

const db = process.env.DB_URL;

export const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("DB connected");
  } catch (error) {
    console.log(error);
  }
};
