const connectDB = require("./db");
const express = require('express');
const app = express();
require('dotenv').config();
var cors = require('cors')
app.use(cors({
    origin: ["https://front-end-jade-six.vercel.app"],
    methods: ["POST", "GET", "POST", "PUT"],
    credentials: false
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
