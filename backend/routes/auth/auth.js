import express from 'express';

// Route Handlers
import login from './login.js';
import addUser from './addUser.js';

const authRouter = express.Router();

authRouter.get('/login', (req, res) => {
    res.send('Hello World');
});

authRouter.post('/login', (req, res) => login(req, res));

authRouter.post('/addUser', (req, res) => addUser(req, res));

export default authRouter;