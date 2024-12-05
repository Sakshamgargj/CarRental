import mongoose from 'mongoose';

const countriesSchema = mongoose.Schema({
    "cid":Number,
    "cname":String,
    "isoname":String,
    
})

const Countries = mongoose.model('country',countriesSchema)

export default Countries;