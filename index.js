const connectDB = require("./db");
const express = require('express');
const app = express();
require('dotenv').config();
var cors = require('cors')
app.use(cors({
    origin: 'https://your-frontend-domain.com', // Replace with your frontend's domain.
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    exposedHeaders: 'Content-Length',
    credentials: true,
}));

app.use(express.json())
const port = 5000;
connectDB();
app.use(`/api/auth`, require('./routes/auth'))
app.use(`/api/notes`, require('./routes/notes'))
app.listen(port, () => {
    console.log("Server is Listening at Port" + host);
})
