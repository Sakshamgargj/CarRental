import mongoose from 'mongoose';

const memberSchema = mongoose.Schema({
    "email":String,
    "upass":String,
    "fname":String,
    "lname":String,
    "mobile":String,
    "country":String,
    "state":String,
    "city":String,
    "pincode":String
})

const Member = mongoose.model('member',memberSchema)

export default Member;