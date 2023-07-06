require("dotenv").config();
const express = require('express');
const dbConnect = require("./db/dbConnect");

const userRoutes = require('./routes/user')
const workoutRoutes = require('./routes/workout')

const app = express();

dbConnect();

// middleware
app.use(express.json())

// app.get('/', function(req, res){
//     res.send('hello');
// })

app.use('/api/user', userRoutes);
app.use('/api/workouts', workoutRoutes);

app.listen(4000, ()=> console.log('server started in port 4000'));