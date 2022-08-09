
const Message = require("../model/messageModel");
const bcrypt = require("bcrypt");
const messageModel = require("../model/messageModel");


module.exports.addMessage = ( req, res, next ) => {

    try{
        const { from, to, message } = req.body;
        const data = await messageModel.create({
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

module.exports.getAllMessage = ( req, res, next ) => {}