import Conversation from "../models/conversation.model.js";
import Message from '../models/message.model.js';

//socket functionality
import { getReceiverId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
    // console.log("Message sent id : ", req.params.id);
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const { _id: senderId } = req.user;
        // console.log(req.user);

        //to get the previous conversation btw the users
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        });

        // if the users are chatting for the first time
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            });
        }

        const newMessage = new Message({
            senderId, //in short of - senderId: senderId
            receiverId,
            message
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        // await conversation.save();
        // await newMessage.save();    --- instead of using .save function for multiple data we could say
        await Promise.all([conversation.save(), newMessage.save()]); // in this way both the .save functions run in parallel

        //SOCKET IO functionalities
        const receiverSocketId = getReceiverId(receiverId);
        if (receiverSocketId) {
            //io.to(<socket.id>).emit() is used to send(emit) to a specific user
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }

        res.status(201).json(newMessage);

    } catch (error) {
        console.log("SendMessage Controller Error : ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const getMessages = async (req, res) => {
    try {

        const { id: userToChatId } = req.params;
        const { _id: senderId } = req.user;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] }
        }).populate("messages"); //Conversation.findOne gives us the id of the messages. The .populate function help us to get the messages based on their id

        if (!conversation) {
            return res.status(200).json([]);
        }

        const messages = conversation.messages;

        return res.status(200).json(messages);

    } catch (error) {
        console.log("getMessage Controller error : ", error.message);
        return res.status(500).json({ error: "Internal Server Error !!" });
    }
}