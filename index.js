
require('dotenv').config();
const connectDB = require("./db");
const express = require('express');
const app = express();
app.use(express.json())
const cors = require('cors');

app.use(cors({
    origin: 'https://front-end-jade-six.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 204, // No content response for preflight requests

}));
let host = process.env.HEROKU_BACKEND_URL;
const port = 5000;
connectDB();
app.use(`/api/auth`, require('./routes/auth'))
app.use(`/api/notes`, require('./routes/notes'))
app.listen(port, () => {
    console.log("Server is Listening at Port" + host);
})
