import express, { response } from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

app.use("*",(req,res)=>res.status(404).json({error:"url not found !!"}))

export default app