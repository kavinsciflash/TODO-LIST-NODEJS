const express = require("express")

const mongoose = require("mongoose")
require("dotenv").config()

const MONGO_URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@kavin-cluster.gphtzny.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`


const routes = require("./routes/TodoRoute")

const cors = require("cors")

const app = express()

const PORT = process.env.PORT | 5000

app.use(express.json())


mongoose.connect(MONGO_URI)
    .then(() => console.log("mongodb connected..."))
    .catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.send('kudos Node App Running!...');
});

app.use(cors({
    origin: 'http://34.229.14.151:3000', // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
    optionsSuccessStatus: 200 // For legacy browser support
  }));
  
  // Manually setting CORS headers (optional, for additional control)
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
  });

app.use("/api", routes)

app.listen(PORT, () => console.log(`listening at ${PORT}`))