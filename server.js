const express = require('express')
const { MongoClient } = require('mongodb');
var cors = require('cors')
const app = express();
const port = 5000;

//handleDynamic
const ObjectId = require('mongodb').ObjectId;

//Midleware

app.use(cors());
// Send Json data
app.use(express.json());

//TdNbiqCZeXeLcqjA
// jerinParlour

const uri = "mongodb+srv://jerinParlour:TdNbiqCZeXeLcqjA@cluster0.9z7i3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function run() {
    try {
        await client.connect();
        const database = client.db("Services");
        const serviceCollection = database.collection("name");
        const userCollection = database.collection("user");

        //DATA

        app.post('/services', async (req, res) => {
            const service = req.body;
            const result = await serviceCollection.insertOne(hotels);
            res.json(result);
        });

        app.get('/services', async (req, res) => {
            const cursors = serviceCollection.find({})
            const result = await cursors.toArray()
            res.send(result)
        })

        app.get('/services/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const result = await serviceCollection.findOne(query)
            res.send(result);
        })

        //USer

        app.post('/users', async (req, res) => {
            const user = req.body;
            const result = await userCollection.insertOne(user)
            res.json(result);
        });

        app.get('/users', async (req, res) => {
            const cursors = userCollection.find({})
            const result = await cursors.toArray()
            res.send(result)
        })
        app.get('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) }
            const result = await userCollection.findOne(query)
            res.send(result);
        })




        app.listen(port, () => {
            console.log('run with', port)
        });


    } finally {
        //   await client.close();
    }
}
run().catch(console.dir);