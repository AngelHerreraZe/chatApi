const Conversation = require("../models/conversation.model");
const Participant = require("../models/participant.model");
const Messages = require('../models/message.model')

class ConversationServices {
    static async create(creatorId, title) {
        try {
            const conversationCreated = await Conversation.create({
                creatorId: creatorId,
                title: title,
            });
            return conversationCreated;
        } catch (error) {
            throw error;
        }
    }

    static async createGroupal(creatorId, title) {
        try {
            const conversationCreated = await Conversation.create({
                creatorId: creatorId,
                title: title,
                isGroupal: true
            });
            return conversationCreated;
        } catch (error) {
            throw error;
        }
    }

    static async getAllConversationsUser(userId) {
        try {
            const allConversationsUser = Participant.findAll({
                where: {
                    participant: userId,
                },
                attributes: ["conversationId"],
                include: {
                    model: Conversation,
                    attributes: {
                        exclude: ["id", "creatorId", "isGroupal", "createdAt"]
                    },
                },
            })
            return allConversationsUser;
        } catch (error) {
            throw error;
        }
    }

    static async getConversationWMessages(id) {
        try {
            const conversationWithMessages = Conversation.findAll({
                where: { id },
                include: [
                    {
                        model: Participant,
                        attributes: ["id"]
                    },
                    {
                        model: Messages,
                        attributes: ["senderId", "message"]
                    }
                ],
                attributes: {
                    exclude: ["creatorId", "isGroupal", "createdAt"]
                }
            })
            return conversationWithMessages;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ConversationServices;