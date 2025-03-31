import express from 'express';
import cors from 'cors';

import { connect } from './db/connection.js';
import indexRouter from './routes/index.js';

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/', indexRouter);

app.listen(process.env.SERVER_PORT, () => { 
    console.log('Server is running on http://localhost:' + process.env.SERVER_PORT);
    console.log('Press CTRL + C to stop the server\n\n');

    // Connect to MongoDB
    console.log('Connecting to MongoDB...');
    connect();
    console.log('Connected to MongoDB\n\n');
});