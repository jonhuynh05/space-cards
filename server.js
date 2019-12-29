require("dotenv").config()

const express = require("express")
const path = require("path")
const app = express()
const fetch = require("node-fetch");
const methodOverride = require("method-override")
const bodyParser = require("body-parser")
const session = require("express-session")
const PORT = process.env.PORT || 8300
const key = process.env.API_KEY

app.use(express.static(path.join(__dirname, "build")))
app.use(session({
    secret: "learn about space",
    resave: false,
    saveUninitialized: false
}))
app.use(methodOverride("_method"));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

//API CALLS
app.get("/api/v1/", async (req, res) => {
    try{
        const data = await (await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=${key}`)).json()
        console.log(data, "this is the data")
        console.log("this hit")
        res.send(data)
    }
    catch(err){
        console.log(err)
        res.json(err)
    }
})


app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}.`)
})