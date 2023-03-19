const Message = require("../models/message.model");

class MessageServices {
    static async create (newMessage) {
        try {
            const resultMessage = await Message.create(newMessage);
            return resultMessage;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = MessageServices;