const express = require("express");
const app = express();

const cors = require("cors");
const postsRoutes =require("./routes/postsControllers");
const bodyParser = require("body-parser");


 app.use(bodyParser.json())
 app.use(cors())
 app.use('/posts', postsRoutes)

app.listen(3000, ()=> console.log('server starting: http://localhost:3000/'))