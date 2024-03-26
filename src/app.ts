import express from "express";
import path from "path";
import bodyParser from "body-parser";
import { db } from "./infrastructure/db";
import todoRouter from "./routes/todoRouter";

const app = express();
const rootDir = path.join(__dirname, "..");

app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(rootDir, "public")));

// Handle API routes
app.use("/todo", todoRouter);

// Handle all other routes by serving the index.html file
app.get("*", (req, res) => {
  res.sendFile(path.join(rootDir, "index.html"));
});

// Initialize database
db();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;



// funciona
// import express from "express";
// import path from "path";
// // import toDoController from "./controllers/toDoController";
// import bodyParser from "body-parser";
// import { db } from "./infrastructure/db";
// import todoRouter from "./routes/todoRouter"

// const app = express();
// const rootDir = path.join(__dirname, "..");

// app.use(bodyParser.json());

// app.use(express.static(path.join(rootDir, "public")));

// db();

// // toDoController(app);

// app.use("/todo", todoRouter);

// app.get("/index.html", (req, res) => {
//   res.sendFile(path.join(rootDir, "index.html"));
// });

// app.listen(3000, () => {
//   console.log("Gurrus says hello from port 3000");
// });

// export default app;
