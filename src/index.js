import { server } from "./routes/index.router.js";
import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URL);

app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(server);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
