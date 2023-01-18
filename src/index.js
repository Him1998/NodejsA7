const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 8080
const data = require('./InitialData');
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here
app.get("/api/student",(req,res)=>{
    res.send(JSON.stringify({
        data
    }));
})

app.get("/api/student/:id",(req,res) =>{
    console.log(req.params);
    res.send(data[req.params.id]);
})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;   