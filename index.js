const express = require('express');
const app = express()
const morgan = require("morgan")


// Load environment variables. See .env file for available variables.
// This should be done before loading variables from process.env
require("dotenv").config({
    path:`.env.${process.env.NODE_ENV}`,
})

/* 
Morgan configuration that logs the following:
- the request body
- the request params
- the request query
- the time of the request
- the user agent
*/

const morganConfig = morgan(function (token, req, res){
    return [
        JSON.stringify(req.body),
        JSON.stringify(req.params),
        JSON.stringify(req.query),
        token.date(req, res, "iso"),
        req.headers["user-agent"],
    ].join(" ");
});

//Middlewares
app.use(express.json());
app.use(morganConfig)

const sequelize = require('./config/db.config')

// Define routes here







//Start the server

const port = process.env.PORT || 3000;
app.listen( PORT,async ()=>{

    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.0")
        console.log( `🏎️ Server is running on PORT${port}`)
    } catch (error) {
        econsole.log("Unable to connect to database:", error);
    }
})
