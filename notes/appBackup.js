// import express from "express";
// import path from "path";
// import bodyParser from "body-parser";
// import { db } from "./infrastructure/db";
// import todoRouter from "./routes/todoRouter";

// const app = express();
// const rootDir = path.join(__dirname, "..");
// // React
// const frontendDir = path.join(rootDir, "frontend", "build");

// app.use(bodyParser.json());

// // Serve static files from the 'public' directory SIN REACT
// // app.use(express.static(path.join(rootDir, "public")));

// // Serve static files from the React build directory
// app.use(express.static(frontendDir));

// // Handle API routes
// app.use("/", todoRouter);

// // Handle all other routes by serving the index.html file SIN REACT
// app.get("*", (req, res) => {
//   res.sendFile(path.join(rootDir, "index.html"));
// });

// // Initialize database
// db();

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// export default app;