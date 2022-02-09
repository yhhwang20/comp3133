const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { auth } = require('./middleware/auth');
const { User } = require("./models/User");
const path = require("path");
const cors = require('cors');
const { Server } = require("socket.io");
const { Message } = require("./models/Message");

const PORT = 5000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "src")));

app.use(bodyParser.json());
app.use(cookieParser());

/////////////////////////////////////////////////////
//User Registration & LOGIN & LOGOUT
app.post('/api/users/register', (req, res) => {
    const user = new User(req.body);
    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err})
        return res.status(201).json({
            success: true
        })
    })
})

app.post('/api/users/login',(req,res) => {
    User.findOne({ username: req.body.username }, (err,user) => {
          if(!user){
            return res.json({
              loginSuccess: false,
              message:"User does not exist"
            })
          }
    user.checkPassword(req.body.password, (err,isMatch) => {
      if(!isMatch)
      return res.json({loginSuccess: false, message:"Wrong Password"})
  
    user.generateToken((err,user) =>{
        if(err) return res.status(400).send(err);
  
        res.cookie("x_auth",user.token)
        .status(200)
        .json({loginSuccess : true, userId:user._id})
      })
    })
  })
})

app.get('/api/users/logout', auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id },
    { token: ""}
    , (err, user) => {
      if(err) return res.json({success: false, err});
      return res.status(200).send({
        success: true
      })
    })
})
app.get('/api/users/auth', auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAuth: true,
    username: req.user.username,
    firstname: req.user.firstname,
    lastname: req.user.lastname
  })
})

//mongoDB Connection
const mongoose = require('mongoose');
const moment = require('moment');
mongoose.connect('mongodb+srv://yoonho:1234@cluster0.jn70c.mongodb.net/comp3133?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected!'))
  .catch(err => console.log(err))

const server = app.listen(PORT, console.log(`Server running on port ${PORT}`));

//socket io server Connection
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(cors())

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log("Socket io connected")
  socket.on("chatting",(data)=>{
    const { message } = data;
    console.log(data)

    //MongoDB data store
    const msg = new Message(data);
    msg.save().then(()=>{
      io.emit("chatting", {
        message,
        time: moment(new Date()).format("h:ss A")
      })
    })
  })
  
  socket.on('disconnect', () => {
    console.log(`${socket.id} disconnected`)
  })
});

