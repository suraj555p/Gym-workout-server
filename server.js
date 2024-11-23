require('dotenv').config()

const express=require('express')
const mongoose=require('mongoose')
const workoutRoutes=require('./routes/workouts.js')
const userRoutes=require('./routes/user.js')
const cors = require('cors')


//express app
const app=express()

const corsOptions = {
    origin: 'https://gym-workout-web-application.vercel.app',
    optionsSuccessStatus: 200 // For legacy browsers
};

app.use(cors(corsOptions));

//middleware
app.use(express.json())

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    //listen for requests
    app.listen(process.env.PORT,()=>{
    console.log('listening on port :',process.env.PORT);
    
})
})
.catch((error)=>{
    console.log(error);
    
})

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()  
})

//routes
app.use('/api/workouts',workoutRoutes)
app.use('/api/user',userRoutes)


