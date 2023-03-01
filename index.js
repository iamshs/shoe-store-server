const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = 5000 || process.env.PORT;

app.use(cors());
app.use(express());

const uri = `mongodb+srv://${process.env.SS_USER}:${process.env.SS_PASS}@cluster0.qv83fqj.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});



async function run() {
  try {
  const shoesCollection = client.db("shoe-store").collection("shoes")
  const sliderCollection = client.db("shoe-store").collection("sliderImage")

  app.get("/products" , async(req,res) =>{
    const cursor = shoesCollection.find({})
    const result = await cursor.toArray()
    res.send(result) 
  }) ;

  app.get("/product/:id" , async(req,res) =>{
    const id = req.params.id ;
    const query = { _id : new ObjectId(id)} ;
    const result = await shoesCollection.findOne(query) ;
    res.send(result) ;
   })

  app.get("/slider" , async(req,res) =>{
   const cursor = sliderCollection.find({})
   const result = await cursor.toArray()
   res.send(result)
  })

  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello word from shoe-store");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
