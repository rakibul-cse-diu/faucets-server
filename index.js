const express = require('express')
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;
// import connectDB from "./config/db";

const app = express();
require('dotenv').config();
app.use(cors());
app.use(express.json());


connectDB();

// const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@node-mongo-server-1.pkxfn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// async function run() {
//     try {
//         await client.connect();
//         console.log("db connected");
//         const usersCollection = client.db('faucets').collection('users');

//         // user sign up
//         app.post('/signup', async (req, res) => {
//             const userData = req.body;
//             const query = { email: userData.email };
//             const checkUser = await usersCollection.findOne(query);
//             if (checkUser === null) {
//                 const result = await usersCollection.insertOne(userData);
//                 res.send(result);
//             } else {
//                 res.status(400).send({ message: "User already exist" })
//             }
//         });

//         // user sign in
//         app.get('/signin', async (req, res) => {
//             const userEmail = req.query.email;
//             const userPassword = req.query.password;
//             const query = {
//                 email: userEmail,
//                 password: userPassword
//             };
//             const user = await usersCollection.findOne(query);
//             if (user !== null) {
//                 res.send(user);
//             } else {
//                 res.status(400).send({ message: "Invalid email or password" })
//             }
//         });

//     }
//     finally {

//     }
// }
// run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello World...!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})