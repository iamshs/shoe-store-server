const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
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

console.log(uri);

async function run() {
  try {
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
