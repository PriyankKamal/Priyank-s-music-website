var express = require('express');
var router = express.Router();
// var fetch = require('node-fetch');
// import fetch from 'node-fetch';
const axios = require('axios');


const songModel = require("./users")

/* GET home page. */
router.get("/", function (req, res) {
  res.send("helloooob")
})

router.get("/about",function(req,res){
  res.send("i am about")
})

router.get("/create",async function(req, res) {
  const createdSong = await songModel.create({
    id: 21,
    title: "Bones",
    name: "Imagine Dragons Bones",
    url: "Imagine_Dragons_-_Bones_(Official_Music_Video)(1440p).webm",
    poster:"bones.png"
  })
  console.log(createdSong)
  res.send(createdSong)
})

router.get("/find",async function(req,res){
  const songList =  await songModel.find()
  res.send(songList)
})

router.get("/delete",async function(req,res){
  const songDelete = await songModel.findOneAndDelete({
    title:"ohangel"
  })
  res.send(songDelete)
})

router.get("/fetching",async function(req,res){
  const url = "http://localhost:3000/find"
  const option = {
    "method":"GET"
    }
  const response = await axios.get(url,option)
  const data = await response.data
  // console.log(data) 
  // res.send(response)
  res.json(data)
})

module.exports = router;
