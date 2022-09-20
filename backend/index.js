import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"

dotenv.config()

const MongoClient = mongodb.MongoClient
const port = process.env.PORT

MongoClient.connect(
    process.env.DB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
    .catch(err => {
        console.log('ERROR OCCURED......!!!')
        console.log(err.stack)
        process.exit(1)
    })
    .then(async client => {
        app.listen(port, () => {
            console.log(`Backend is Up. Listening to port: ${port}`)
        })
    })