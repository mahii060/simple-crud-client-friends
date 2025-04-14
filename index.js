import express from 'express'
import cors from 'cors'
import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb';


const app = express()
const port = process.env.PORT || 5000;

// Middleware
app.use(cors())
app.use(express.json())

// mahi9621416
//6Yw8Vbe9BIxZsm9D



const uri = "mongodb+srv://mahi9621416:6Yw8Vbe9BIxZsm9D@cluster0.3zfncho.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        const database = client.db("friendsDB")
        const friends = database.collection("friends");

        // GET	Read	Retrieve data from the database
        app.get('/friends', async (req, res) => {
            const cursor = friends.find()
            const result = await cursor.toArray();
            res.send(result)
        })

        app.get('/friends/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await friends.findOne(query)
            res.send(result)
            // console.log();
        })

        // POST	Create	Add new data to the database
        app.post('/friends', async (req, res) => {
            const friend = req.body;
            const result = await friends.insertOne(friend);
            res.send(result)
            // console.log(friend);
        })


        // PUT / PATCH	Update	Modify existing data
        app.put('/friends/:id', async (req, res) => {
            const id = req.params.id;
            const friend = req.body;
            const filter = { _id: new ObjectId(id) }
            const options = { upsert: true };
            const updateDoc = {
                $set: {
                    name: friend.name,
                    department: friend.department
                },
            }
            const result = await friends.updateOne(filter, updateDoc, options)
            res.send(result)
            console.log('updated', friend);
        })

        // DELETE	Delete	Remove data from the database
        app.delete('/friends/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await friends.deleteOne(query)
            res.send(result)
        })




        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);




app.get('/', (req, res) => {
    res.send('Hello from friends world')
})

app.listen(port, () => {
    console.log(`Friends app listening on port ${port}`)
})