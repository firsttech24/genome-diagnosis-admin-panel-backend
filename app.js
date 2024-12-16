import express from "express";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/connectDB.js";
import contactUsDetailsRoutes from "./routes/contactUsDetailsRoutes.js";

const app = express();
const port = process.env.PORT;

// middleware
app.use(express.json());

// db connection
const DB_URL = process.env.DB_URL;
connectDB(DB_URL);

// routes
app.use(contactUsDetailsRoutes);

app.listen(port, () => {
  console.log("http://localhost:" + port);
});
