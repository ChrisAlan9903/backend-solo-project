const express = require('express');
const app = express()
const morgan = require("morgan")


// Load environment variables. See .env file for available variables.
// This should be done before loading variables from process.env
require("dotenv").config({
    path:`.env.${process.env.NODE_ENV}`,
})

const PORT = 3000

app.listen( PORT, ()=>{
    console.log( `🏎️ Server is running on PORT${PORT}`)
})