import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.router.js"

const app = express();
const port = 3001;

app.use(cors()) ;
app.use(express.json()) ;

app.use("/api/v1/restaurants",restaurants);

export default app ;