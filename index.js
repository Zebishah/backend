const connectDB = require("./db");
const express = require('express');
const app = express();
app.use(express.json())
app.use((req, res, next) => {
    // Set the CORS headers here to allow or deny cross-origin requests.
    res.header('Access-Control-Allow-Origin', 'https://your-frontend-domain.com');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Credentials', true);

    // Call the 'next' function to pass the request to the next middleware or route handler.
    next();
});

require('dotenv').config();

const port = 5000;
connectDB();
app.use(`/api/auth`, require('./routes/auth'))
app.use(`/api/notes`, require('./routes/notes'))
app.listen(port, () => {
    console.log("Server is Listening at Port" + host);
})
