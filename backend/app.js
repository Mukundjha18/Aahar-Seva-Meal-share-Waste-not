const express = require('express');
const app = express();
require('dotenv').config();
require('./conn/conn');

const Cors = require('cors');
const User = require("./routes/user");
const Products = require("./routes/role");
const Favourite = require("./routes/favourite");
const Cart = require("./routes/cart");
const Order = require("./routes/orders");

app.use(express.json());
app.use(Cors());
const port = process.env.PORT || 3000;

//routes
app.use("/api/v1", User);
app.use("/api/v1", Products);
app.use("/api/v1", Favourite);
app.use("/api/v1", Cart);
app.use("/api/v1", Order);

app.get("/", (req, res) => {
  res.send("hello world");
});

//create port
app.listen(port, () => {
  console.log(`Hey, your server is running on port ${port}`);
});
