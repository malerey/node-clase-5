const express = require('express');
const morgan = require('morgan');
const app = express();
const userRouter = require('./routes/userRoutes');
const gatitoRouter = require('./routes/gatitoRoutes');

app.use(express.json());
app.use(morgan('dev'));

app.use('/gatitos', gatitoRouter)
app.use('/users', userRouter);

module.exports = app;
