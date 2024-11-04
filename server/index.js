import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { getAllUsers, createNewUser, loginUser } from "./controllers/users.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

app.get("/", getAllUsers);

app.post("/register", createNewUser);

app.post("/login", loginUser);

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
