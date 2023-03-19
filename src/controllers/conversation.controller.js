const ConversationServices = require("../services/conversation.services");
const ParticipantServices = require("../services/participant.services");

const createConversationGroupal = async (req, res, next) => {
    try {
        const {creatorId, title, participants} = req.body;
        const conversationResult = await ConversationServices.createGroupal(creatorId, title);
        const {id} = conversationResult;
        const participantsResult = await ParticipantServices.createParticipants(creatorId, participants,id);
        res.status(201).json();
    } catch (error) {
        next(error);
    }
}

const createConversation = async (req, res, next) => {
    try {
        const {creatorId, title, participant} = req.body;
        const conversationResult = await ConversationServices.create(creatorId,title);
        const {id} = conversationResult;
        const participants = await ParticipantServices.create(creatorId, participant, id)
        res.status(201).send()
    } catch (error) {
        next(error);
    }
}

const getConversationsUser = async (req, res, next) => {
    try {
        const {userId} = req.params;
        const results = await ConversationServices.getAllConversationsUser(userId);
        res.status(201).json(results);
    } catch (error) {
        next(error);
    }
}

const getConversationWithMessages = async (req, res, next) => {
    try {
        const {id} = req.params;
        const results = await ConversationServices.getConversationWMessages(id)
        res.status(201).json(results)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createConversationGroupal,
    createConversation,
    getConversationsUser,
    getConversationWithMessages
}