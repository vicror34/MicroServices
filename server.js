import express from "express";
import userRoutes from "./routes/userRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use("/users", userRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
