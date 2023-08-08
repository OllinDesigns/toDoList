import express from "express";
import path from "path";
import toDoController from "./src/application/controllers/toDoController";
import bodyParser from "body-parser";
import { db } from "./src/infrastructure/db";

const app = express();
const rootDir = path.join(__dirname, "..");

app.use(bodyParser.json());

app.use(express.static(path.join(rootDir, "public")));

db();

toDoController(app);

app.get("/index.html", (req, res) => {
  res.sendFile(path.join(rootDir, "index.html"));
});

app.listen(3000, () => {
  console.log("Gurrus says hello from port 3000");
});

export default app;
