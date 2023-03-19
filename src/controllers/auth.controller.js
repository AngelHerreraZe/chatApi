const UserServices = require("../services/user.services");
const bcrypt = require('bcrypt');

const userLogin = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const user = await UserServices.getUser(email);
        if (!user) {
            return next({
                status: 400,
                message: 'Invalid email',
                error: 'User not found'
            })
        }
        const isValid = await bcrypt.compare(password, user.password);
        if(!isValid) {
            return next({
                status: 400,
                message: "Password doesn't match with email user",
                error: 'Invalid password'
            })
        }
        const {
            id,
            username,
            firstName,
            lastName,
        } = user
        res.json({
            id, username, firstName, lastName, email
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    userLogin,
}