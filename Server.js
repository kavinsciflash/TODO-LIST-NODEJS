const express = require("express")

const mongoose = require("mongoose")
require("dotenv").config()

const MONGO_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@kavin-cluster.gphtzny.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`


const routes = require("./routes/TodoRoute")

const cors = require("cors")

const app = express()

const PORT = process.env.PORT | 5000

app.use(express.json())
app.use(cors())

mongoose.connect(MONGO_URI)
    .then(() => console.log("mongodb connected..."))
    .catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.send('Welcome to my Node.js app!');
});

app.use(cors({
    origin: 'http://34.229.14.151:3000',
}));

app.use("/api", routes)

app.listen(PORT, () => console.log(`listening at ${PORT}`))