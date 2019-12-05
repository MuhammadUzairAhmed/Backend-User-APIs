import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
    name: {type:String},
    email: {type:String},
    dob: {type:String},
    newAdded:{type:String},
    lastModified:{type:String}
});
   
const User = mongoose.model('User', userSchema);
export default User;