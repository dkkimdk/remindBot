import express from 'express';
import { PORT } from './config/constants';
import { join } from "path";

import createMessageRouter from './routes/messages'
import createPasswordRouter from './routes/passwordAuth'

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(join(__dirname, "..")));
app.use(function(__, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
});

app.use('/api', createMessageRouter('hello'));
app.use('/password', createPasswordRouter());


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});