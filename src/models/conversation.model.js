const {DataTypes} = require('sequelize');
const db = require('../utils/database');

const Conversation = db.define('conversations', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    creatorId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "creator_id"
    },
    title: {
        type: DataTypes.STRING(50),
        defaultValue: "Chat"
    },
    isGroupal: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        field: "is_groupal"
    }
},{
    timestamps: true,
    updatedAt: false
})

module.exports = Conversation;