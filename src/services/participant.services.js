const Participant = require("../models/participant.model");

class ParticipantServices {
    static async create(creatorId,participant,conversationId){
        try {
            const participantsCreated = await Participant.create(
                {
                    creatorId,
                    participant,
                    conversationId
                }
            )
            return participantsCreated;
        } catch (error) {
            throw error;
        }
    }

    static async createParticipants(creatorId, participants, conversationId){
        try {
            const participantsArray = [];
            for (let i = 0; i < participants.length; i++){
                participantsArray.push({creatorId: creatorId, participant: participants[i], conversationId: conversationId})
            }
            const participantsCreated = await Participant.bulkCreate(participantsArray)
            return participantsCreated;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ParticipantServices;