const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const userRoutes = require("./routes/userRoutes")
const msgRoutes = require("./routes/messagesRoutes")
const socket = require('socket.io')


const app = express();
require("dotenv").config();

// middleware
app.use(cors());
app.use(express.json());

// using the controller route for registering
app.use( "/api/auth", userRoutes );
app.use( "/api/message", msgRoutes );

// mongo connect
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then( ()=>{
    console.log("DB connection successfull");
}).catch( err => {
    console.log(err.message);
} );



// make server
const server = app.listen(process.env.PORT, ()=>{
    console.log('Server started on port '+process.env.PORT)
})


const io = socket(server, {
    cors: {
        origin: "http://localhost:3000",
        credentials: true,
    },
});

global.onlineUsers = new Map();

io.on("connection", (socket) => {
    global.chatSockket = socket;
    socket.on("add-user", (userId) => {
        onlineUsers.set(userId, socket.id);
    });

    socket.on("send-msg", (data) => {
        const sendUserSocket = onlineUsers.get(data.to);
        if(sendUserSocket){
            socket.to(sendUserSocket).emit("msg-receive", data.msg);
        }
    });
});