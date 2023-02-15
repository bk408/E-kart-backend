const express = require("express");
const cors = require("cors");
const req = require("express/lib/request");
const res = require("express/lib/response");


const stripe = require("./routes/stripe");


const app = express();

require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/api/stripe", stripe);


app.get("/", (req, res) => {
    res.send("Welcome to EKart");
});

const port = process.env.PORT || 5000;

app.listen(port, console.log(`server running on port ${port}`));




