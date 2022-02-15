import express, { json } from 'express';
import mongoose  from 'mongoose';
import User from './model/User.js'

const app = express();
app.use(json());
app.use(express.json())

mongoose.connect('mongodb+srv://yoonho:1234@cluster0.jn70c.mongodb.net/comp3133?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.post('/users', (req,res) => {
    const user = new User(req.body)
    user.save((err) => {
        if(err) return res.json(err)
        return res.status(201).json({
            user
        })
    })
})


app.listen(3000, () => {console.log('Server is running on port 3000')})