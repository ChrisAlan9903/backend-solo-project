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

//Middleware
app.use(express.json());
app.use(morganConfig)

const sequelize = require('./config/db.config')

// Define routes here
const usersRoute = require('./routes/users.route')
const circlesRoute = require('./routes/circles.route')
const circleMemberRoute = require('./routes/circleMembers.route')
const messagesRoute = require('./routes/messages.route')
// const usersRelRoute = require('./routes/usersRelationship.route')
// const chatroomsRoute = require('./routes/chatrooms.route')
// const chatroomMemberRoute = require('./routes/chatroomMembers.route')


app.use('/users', usersRoute)
app.use('/users/:userId/circle', circlesRoute)
app.use('/users/:userId/circle/:circleId/circleMembers', circleMemberRoute)
app.use('/users/:userId/messages', messagesRoute)
// app.use('/usersRelationship', usersRelRoute)
// app.use('/circles', chatroomsRoute)
// app.use('/circles', chatroomMemberRoute)

// Health check
app.get('/', (req,res)=>{
    res.send(`Health OK : `, process.env.NODE_ENV)
})


//Start the server

const port = process.env.PORT || 3000;
app.listen( PORT,async ()=>{

    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.0")
        console.log( `🏎️ Server is running on PORT${port}`)
    } catch (error) {
        console.log("Unable to connect to database:", error);
    }
})
