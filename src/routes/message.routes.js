const {Router} = require('express');
const { createMessage } = require('../controllers/message.controller');

const router = Router();

router.post("/api/v1/message", createMessage)

module.exports = router;