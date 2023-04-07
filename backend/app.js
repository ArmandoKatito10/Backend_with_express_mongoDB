const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

const conn =require("./db/conn")
//connection DB
conn();
//routers on the page
const routes = require("./routs/router");
app.use("/api", routes);

app.listen(3000, function(){
    console.log("servidor online!")
});
//2JT27ViUYHrJgSwSx