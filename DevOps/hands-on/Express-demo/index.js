const express = require("express");
const ctrl = require("./OrderController");
const app = express();
app.use("/order", ctrl);
app.use('/',middleware);





app.listen(3000, () => {
  console.log("server started at port 3000");
});


function middleware(req,res,next){
res.end('Welcome to Home page. Use "/order" path');

}