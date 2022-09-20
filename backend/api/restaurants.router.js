import express from "express"

const router = express.Router()

router.route("/").get((req, res) => res.json({ author: 'Gaurav Khanna', message: "Hello !!!" }))

router.route("/list").get((req, res) => res.json({
    "id": "121721",
    "name": "Nandos Banani",
    "address": "Road-11, Banani, Dhaka",
    "minimum-order-price": "300.00",
    "delivery-fee": "75.00",
    "avg_delivery_time": "60",
    "logo": "https://s3-ap-southeast-2.amazonaws.com/aisdevtest/img/2b41b7bbf6da38212e1163c428d44f3a58b1487817bf3.jpg"
}))

export default router