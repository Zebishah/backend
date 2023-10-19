const connectDB = require("./db");
const express = require('express');
const app = express();
require('dotenv').config();
var cors = require('cors')
const allowedOrigins = ['https://front-end-jade-six.vercel.app'];
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // if you are using cookies or sessions
}));

app.use(express.json())
const port = 5000;
connectDB();
app.use(`/api/auth`, require('./routes/auth'))
app.use(`/api/notes`, require('./routes/notes'))
app.listen(port, () => {
    console.log("Server is Listening at Port" + host);
})
