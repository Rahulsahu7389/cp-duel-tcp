const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
require('./Models/db.js')
const ensureAuthenticated = require('./Middlewares/auth.js')
const AuthRouter = require('./Routers/AuthRouter.js')

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use('/auth',AuthRouter);
app.get('/home',ensureAuthenticated,(req,res)=>{
  res.json({user:req.name});
})
app.get('/home',ensureAuthenticated,(req,res)=>{
  res.json({user:req.name});
})
app.get('/home',ensureAuthenticated,(req,res)=>{
  res.json({user:req.name});
})
app.get('/home',ensureAuthenticated,(req,res)=>{
  res.json({user:req.name});
})

app.get('/ping', (req, res) => {
  res.send('Hello World!');//just to check if the server is running
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
