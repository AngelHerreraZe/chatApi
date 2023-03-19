const express = require('express');
const morgan = require('morgan')
const cors = require('cors');
const initModels = require('./models/initModels');
const db = require('./utils/database');
const app = express();
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');
const conversationRoutes = require('./routes/conversation.routes');
const messageRoutes = require('./routes/message.routes');
const errorHandlerRouter = require('./routes/error.handler.routes');
const PORT = 8000;

initModels();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(userRoutes);
app.use(authRoutes);
app.use(conversationRoutes);
app.use(messageRoutes);

db.authenticate()
    .then(() => console.log("Base de datos conectada"))
    .catch((error) => console.log(error))

db.sync({alter: true})
    .then(() => console.log("Base de datos sincronizada"))
    .catch((error) => console.log(error))

errorHandlerRouter(app);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})