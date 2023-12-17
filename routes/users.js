var express = require('express');
var router = express.Router();
const mongoose = require("mongoose")
/* GET users listing. */

mongoose.connect("mongodb://127.0.0.1:27017/videosdb").then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB: ',error);
});

const songSchema = mongoose.Schema({
  id:Number,
  title:String,
  name:String,
  url:String,
  poster:String
})
// console.log(songSchema.id)


module.exports = mongoose.model("user",songSchema);
