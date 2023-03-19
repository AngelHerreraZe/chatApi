const MessageServices = require("../services/message.services");

const createMessage = async (req, res, next) => {
    try {
        const newMessage = req.body;
        const result = await MessageServices.create(newMessage)
        res.status(201).send()
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createMessage,
}