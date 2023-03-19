const {DataTypes} = require('sequelize');
const bcrypt = require('bcrypt');
const db = require('../utils/database');

const User = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username : {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        validate: {
            isEmail: true
        },
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING(30),
        defaultValue: "Jhon",
        field: "first_name"
    },
    lastName: {
        type: DataTypes.STRING(30),
        defaultValue: "Doe",
        field: "last_name"
    }
},{
    timestamps: true,
    updatedAt: false,
    hooks: {
        beforeCreate: async (user) => {
            try {
                const salt = await bcrypt.genSalt(10);
                const passwordHash = await bcrypt.hash(user.password, salt);
                user.password = passwordHash;
            } catch (error) {
                throw error;
            }
        }
    }
})

module.exports = User;