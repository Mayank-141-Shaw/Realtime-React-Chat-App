
const bcrypt = require("bcrypt");
const Message = require("../model/messageModel");

// adding the message to the db
// along with info like who wrote it and to whom
module.exports.addMessage = ( req, res, next ) => {

    try{
        const { from, to, message } = req.body;
        const data = await Message.create({
            message: { text: message },
            users: [from, to],
            sender: from,
        });

        if(data) return res.json({msg: "Message added successfully."});
        return res.json({ msg: "Failed to add msg in database" });

    }catch(e){
        next(e);
    }
}

// getting messages from db in sorted manner of writer and reciever format
module.exports.getAllMessage = ( req, res, next ) => {

    try{
        // getting from and to details
        const { from, to } = req.body;

        // finding all messages that have users array containing only our from and to user
        // and sort them in latest updated format/recent
        const messages = await Message.find({
            users: {
                $all: [from, to],
            },
        }).sort({ updatedAt: 1 });

        // getting deciding and setting messages of self and other user
        // if msg is written by user, it will be true
        // else be false
        // along with the message
        const projectedMessages = messages.map( msg => {
            return {
                fromSelf: msg.sender.toString() === from,
                message: msg.message.text,
            };
        } );

        // return sthe formatted message
        return res.json(projectedMessages);

    }catch(e){
        next(e)
    }
}