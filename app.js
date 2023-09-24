require("dotenv").config();

const express = require("express");
const app = express();
const connect = require("./db/connect");




const PORT = process.env.PORT || 5000;
const showProducts = require("./routes/products");
const connectDB = require("./db/connect");
app.get('/', (req, res) => {
    res.send("Hi I am live");
});
app.get('/about', (req, res) => {
    res.send("Hi billo are u live");
});

app.use("/api/products", showProducts);

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, (req,res) => {
            console.log(`${PORT} Connection done`)
      })  
    } catch (error) {
        console.log(error)
        
    }
}

start();