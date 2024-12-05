import mongoose from 'mongoose';

const vehicleSchema = mongoose.Schema({
    vid:Number,
    name:String,
    rent:Number,
    model:String,
    mark:String,
    year:Number,
    doors:String,
    ac:String,
    transmission:String,
    fuel:String,
    photo:String
})

const Vehicle = mongoose.model('brand',vehicleSchema)

export default Vehicle;