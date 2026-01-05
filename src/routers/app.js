import express from "express";
import cors from "cors";
import router from "./index.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "test") {
  app.use((req, res, next) => {
    res.sendFile = (filePath) => {
      res.status(200).send("Arquivo enviado mockado");
    };
    next();
  });
}

app.use(router);

export default app;