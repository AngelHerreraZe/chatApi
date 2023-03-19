const User = require('../models/user.model');

class UserServices {
    static async create(newUser) {
        try {
            const userCreated = await User.create(newUser);
            return userCreated;
        } catch (error) {
            throw error;
        }
    }

    static async update(id, updatedInfo) {
        try {
            const updatedUser = await User.update(updatedInfo, {
                where: { id }
            });    
        } catch (error) {
            throw error;
        }
    }

    static async getUser(email) {
        try {
            const user = await User.findOne({
                where: { email }
            });
            return user;
        } catch (error) {
            throw error; 
        }
    }

    static async getAll() {
        try {
            const result = await User.findAll({
                attributes: {exclude: ["id", "password"]}
            });
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserServices;