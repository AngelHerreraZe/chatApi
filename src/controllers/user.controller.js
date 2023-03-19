const UserServices = require("../services/user.services");

const createUser = async (req, res, next) => {
    try {
        const newUser = req.body;
        const result = await UserServices.create(newUser);
        res.status(201).json(result);
    } catch (error) {
        next(error)        
    }
}

const updateUser = async(req, res, next) => {
    try {
        const {id} = req.params;
        const updatedInfo = req.body;
        await UserServices.update(id, updatedInfo);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
}

const getUsers = async (req, res, next) => {
    try {
        const users = await UserServices.getAll();
        res.json(users);
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createUser,
    updateUser,
    getUsers
}