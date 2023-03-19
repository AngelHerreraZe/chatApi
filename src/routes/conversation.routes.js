const {Router} = require('express');
const { createConversation, createConversationGroupal, getConversationsUser, getConversationWithMessages } = require('../controllers/conversation.controller');
const router = Router();

router.post("/api/v1/conversation/", createConversation);
router.post("/api/v1/conversation/groupal/", createConversationGroupal)
router.get("/api/v1/conversation/:userId", getConversationsUser)
router.get("/api/v1/conversation/:id/messages", getConversationWithMessages)

module.exports = router;