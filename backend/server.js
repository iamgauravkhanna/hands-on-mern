import express from "express"
import cors from "cors"
import restaurantsRouter from "./api/restaurants.router.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/restaurants", restaurantsRouter);
app.use("*", (req, res) => res.status(404).json({ error: "page not found"}))

export default app;