const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require("path");

const app = express();

require("dotenv").config();

app.use(cors());

app.use(express.static(path.join(__dirname, "../dist")));

const route = require('./routes/route');


app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('DB connected'))
  .catch(error => console.log(error.message));


app.use('/api',route);

app.listen(process.env.PORT||3000,()=>console.log('listening to port '+ process.env.PORT||3000));

app.get("*", (req, res) => {
  const filename = path.join(__dirname, "../dist/index.html");
  res.sendFile(filename);
});