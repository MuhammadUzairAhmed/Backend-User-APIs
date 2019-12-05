import express from 'express';
import * as userController from './controller/userController';
import mongoose from 'mongoose';
var cors = require('cors')

const app = express(); 
//this string  is connected to live cluster mongodb
const URI: string = "mongodb+srv://dbuzair:dbuzair@userscluster-ntgmi.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
    }).then(res => console.log('connected successfuly'))
    .catch(err => console.log('error to connect with database'))
app.set("port", 3002);
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }))
app.use(cors())
app.get('/users', userController.allUsers)
app.get('/user/:id', userController.getUser)
app.post('/user', userController.addUser)
app.delete('/user/:id', userController.deleteUser)
app.put('/user/:id', userController.updateUser)

app.listen(app.get('port'), () => {
    console.log("app is running", app.get('port'));
});