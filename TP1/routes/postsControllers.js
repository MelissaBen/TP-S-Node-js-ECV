const express = require("express");
const router = express.Router();

router.get('/message', (req, res) =>{
res.status(400).send('Hello world');
})
router.get('/json', (req, res)=>{
  const message = {
    "firstname": "Melissa",
    "status": 200
  }
  res.status(400).send({message : message})
})
router.get('/exemple3', (req, res) =>{
  const message = {
    "firstname": "Melissa",
    "lastName": "Ben",
    "brithdate": "04/01/1998"
  }
  res.status(200).send({message: message})
})



module.exports= router;