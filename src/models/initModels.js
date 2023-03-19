const User = require('./user.model');
const Conversation = require('./conversation.model');
const Message = require('./message.model');
const Participant = require('./participant.model');

const initModels = () => {
    User.hasMany(Conversation, {foreignKey: 'creatorId'});
    Conversation.belongsTo(User, {foreignKey: 'creatorId'});

    User.hasMany(Message, {foreignKey: 'senderId'});
    Message.belongsTo(User, {foreignKey: 'senderId'});

    User.hasMany(Participant, {foreignKey: 'participant'});
    Participant.belongsTo(User, {foreignKey: 'participant'});

    Conversation.hasMany(Message, {foreignKey: 'conversationId'});
    Message.belongsTo(Conversation, {foreignKey: 'conversationId'});

    Conversation.hasMany(Participant, {foreignKey: 'conversationId'});
    Participant.belongsTo(Conversation, {foreignKey: 'conversationId'});
}

module.exports = initModels;