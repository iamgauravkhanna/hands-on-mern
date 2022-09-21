import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import RestaurantsDAO from "./dao/restaurantsDAO.js"
import ReviewsDAO from "./dao/reviewsDAO.js"

dotenv.config()

const mongoClient = mongodb.MongoClient
const port = process.env.PORT

mongoClient.connect(
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
        await RestaurantsDAO.injectDB(client)
        await ReviewsDAO.injectDB(client)
        app.listen(port, () => {
            console.log(`Backend is Up. Listening to port: ${port}`)
        })
    })