import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
    "carType":String,
    "pickupLocation":String,
    "dropoffLocation":String,
    "pickupDate":String,
    "dropoffDate":String,
})

const Order = mongoose.model('order',orderSchema)

export default Order;