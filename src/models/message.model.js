const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Message = db.define('messages', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    senderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "sender_id"
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    conversationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "conversation_id"
    }
}, {
    timestamps: true,
    updatedAt: false
})

module.exports = Message;