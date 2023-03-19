const {DataTypes} = require('sequelize');
const db = require('../utils/database');

const Participant = db.define('participants', {
    creatorId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    participant: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    conversationId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
},{
    timestamps: false
})

module.exports = Participant;