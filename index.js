const express = require('express')
const cors = require('cors');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const app = express();
require('dotenv').config();
app.use(cors());
app.use(express.json());


connectDB();

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('Hello World...!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})