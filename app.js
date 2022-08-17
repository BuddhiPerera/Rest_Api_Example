const express = require('express');
const app = express();
const mongoose = require('mongoose');

// // middlewares
// app.use('/posts', () =>{
//     console.log('This is a middleware running');
// });

// Routes
app.get('/', (req, res) =>{
    res.send('We are on Home');
});

app.get('/posts', (req, res) =>{
    res.send('We are on Posts');
});


// connecting to database
mongoose.connect('mongodb+srv://sandbox:p3nCTPTMX8IrJHek@cluster0.68e5agg.mongodb.net/sandbox?retryWrites=true&w=majority',
    {useNewUrlParser: true},
    () => console.log('connected to database')
);

// listening to the server
app.listen(4000);

