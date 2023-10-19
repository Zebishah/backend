const connectDB = require("./db");
const express = require('express');
const app = express();
require('dotenv').config();
var j = process.env.REACT_APP_FRONT_URL;
var cors = require('cors')
app.use(cors({
    origin: j,
    methods: ["POST", "GET", "POST", "PUT"],
    credentials: true
}))
app.use(express.json())
const port = 5000;
connectDB();
let host = process.env.REACT_APP_API_HOST
app.use(`/api/auth`, require('./routes/auth'))
app.use(`/api/notes`, require('./routes/notes'))
app.listen(port, () => {
    console.log("Server is Listening at Port" + host);
})
