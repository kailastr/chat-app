import { Server } from "socket.io";
import http from 'http';
import express from 'express';
import { Socket } from "net";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"]
    }
});

export const getReceiverId = (receiverId) => {
    return userSocketMap[receiverId];
}

//to get the logged-in user id like a key value pair {userId : socketId}
const userSocketMap = {};

io.on('connection', (socket) => {
    console.log("a user connected to socket : ", socket.id);

    //to store the userId obtained from the frontend socketContext file
    const userId = socket.handshake.query.userId;

    if (userId !== undefined) {
        userSocketMap[userId] = socket.id; //passing values to the userSocketMap function
    }

    //to send events to all the connected clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    //socker.on is used as event listner. Can be used in both client and server
    socket.on("disconnect", () => {
        console.log("User Disconnected : ", socket.id);

        //if the user logs out remove that userId from the userSocketMap
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
})

export { app, server, io };