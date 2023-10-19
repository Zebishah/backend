const connectDB = require("./db");
const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json())
const port = 5000;
connectDB();
app.use(`/api/auth`, require('./routes/auth'))
app.use(`/api/notes`, require('./routes/notes'))
app.listen(port, () => {
    console.log("Server is Listening at Port" + host);
})
