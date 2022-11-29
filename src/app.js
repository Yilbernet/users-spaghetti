const express = require('express');

const db = require('./utils/database');
const userRouter = require('./users/users.router');

const port = 9000;
const app = express();

app.use(express.json());

db.authenticate()
   .then(() => console.log('database autenticada correctamente'))
   .catch((err) => console.log(err));

db.sync()
   .then(() => console.log('database sincronizada correctamente'))
   .catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.json({message: 'Ok!'});
});

app.use('/api/v1', userRouter);

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
