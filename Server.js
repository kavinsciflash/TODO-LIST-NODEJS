const express = require("express")

const mongoose = require("mongoose")
require("dotenv").config()

const MONGO_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@kavin-cluster.gphtzny.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`


const routes = require("./routes/TodoRoute")

const cors = require("cors")

const app = express()

const PORT = process.env.PORT | 5000

app.use(express.json())

const corsOptions = {
    origin: 'http://34.229.14.151', // Allow requests from this origin
    optionsSuccessStatus: 200 // Some legacy browsers choke on 204
  };
  
  // Use CORS middleware with the specified options
  app.use(cors(corsOptions));
  

mongoose.connect(MONGO_URI)
    .then(() => console.log("mongodb connected..."))
    .catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.send('kudos Node App Running!...');
});

app.use(cors({
    origin: 'http://34.229.14.151:3000',
}));

app.use("/api", routes)

app.listen(PORT, () => console.log(`listening at ${PORT}`))