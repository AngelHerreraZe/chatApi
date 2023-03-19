const {Router} = require('express');
const { createUser, updateUser, getUsers } = require('../controllers/user.controller');
const { createUserValidator, updateUserValidator } = require('../validators/users.validators');
const router = Router();

router.post("/api/v1/users",createUserValidator, createUser);
router.put("/api/v1/users/:id",updateUserValidator, updateUser);
router.get("/api/v1/users", getUsers);

module.exports = router;