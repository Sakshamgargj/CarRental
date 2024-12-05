import Order from '../models/order.model.js'

const AllOrder = async (req,res)=>{
    try{
        const orderData = await Order.find();
        res.json(orderData);
    }catch(err){
        console.log(err)
        res.status(500).json({ error: 'Error retrieving orders' });
    }
}

const order = async (req,res)=>{
    try{
        let {carType ,pickupLocation ,dropoffLocation ,pickupDate ,dropoffDate } = req.body;
        const vehicle = [
            {
                carType ,
                pickupLocation ,
                dropoffLocation ,
                pickupDate ,
                dropoffDate 
            }]
        const orderData = await Order.create(vehicle);
        res.json(orderData);
        
    }catch(err){
        console.log(err)
        res.status(500).json({ error: 'Error retrieving orders' });
    }
}

export {order,AllOrder}