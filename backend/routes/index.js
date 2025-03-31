import express from 'express';

// import authRouter from './auth/auth.js';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
    res.send('Home Page');
});

// indexRouter.use('/auth/', authRouter);

export default indexRouter;