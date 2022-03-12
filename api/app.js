const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { Inventory } = require("./db/models/inventory.model");
const { mongoose } = require("./db/mongoose");

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/inventories", (req, res) => {
  Inventory.find()
    .then((inventories) => {
      res.send(inventories);
    })
    .catch((e) => {
      res.send(e);
    });
});

app.post("/inventories", (req, res) => {
  let title = req.body.title;
  let location = req.body.location;
  let price = req.body.price;
  let newInventory = new Inventory({
    title,
    location,
    price,
  });
  newInventory.save().then((inventorytDoc) => {
    res.send(inventorytDoc);
  });
});

app.delete("/inventories/:id", (req, res) => {
  Inventory.findOneAndRemove({
    _id: req.params.id,
  }).then((removedInventoryDoc) => {
    res.send(removedInventoryDoc);
  });
});
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
