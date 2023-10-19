const connectDB = require("./db");
const express = require('express');
const app = express();
require('dotenv').config();
var cors = require('cors')
app.use(cors({
    origin: ["https://front-end-jade-six.vercel.app"],
    methods: ["POST", "GET", "POST", "PUT"],
    credentials: true
}))
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.use(express.json())
const port = 5000;
connectDB();
app.use(`/api/auth`, require('./routes/auth'))
app.use(`/api/notes`, require('./routes/notes'))
app.listen(port, () => {
    console.log("Server is Listening at Port" + host);
})
