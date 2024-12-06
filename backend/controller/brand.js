import Vehicle from '../models/vehicle.model.js'

const a1 = async (req, res) => {
    try {
        const vehicleData = await Vehicle.find();
        res.json(vehicleData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error retrieving vehicles' });
    }
}
const a2 = async (req,res)=>{
    try{
        const vehicle = [
            {
                vid:1,
                name:"Audi A1 S-Line",
                rent:45,
                model:"Audi",
                mark:"A1",
                year:2022,
                doors:"4",
                ac:"Yes",
                transmission:"Manual",
                fuel:"Hybrid",
                photo:"http://res.cloudinary.com/dvyxj4egv/image/upload/v1733495304/sbsxitylxhqusm3w5n8g.jpg"
            },
            {
                vid:2,
                name:"VW Golf 6",
                rent:37,
                model:"Golf 6",
                mark:"Volkswagen",
                year:2008,
                doors:"4",
                ac:"Yes",
                transmission:"Manual",
                fuel:"Diesel",
                photo:"http://res.cloudinary.com/dvyxj4egv/image/upload/v1733495537/f3uwyis6bdqzjh8xeeds.jpg"
            },
            {
                vid:3,
                name:"Toyota Camry",
                rent:30,
                model:"Camry",
                mark:"Toyota",
                year:2009,
                doors:"4",
                ac:"Yes",
                transmission:"Automatic",
                fuel:"Hybrid",
                photo:"http://res.cloudinary.com/dvyxj4egv/image/upload/v1733495686/rcczdlun0cnrmv5o2oot.jpg"
            },{
                vid:4,
                name:"Mercedes-Benz GLK",
                rent:50,
                model:"Benz GLK",
                mark:"Mercedes",
                year:2022,
                doors:"4",
                ac:"Yes",
                transmission:"Manual",
                fuel:"Diesel",
                photo:"http://res.cloudinary.com/dvyxj4egv/image/upload/v1733495441/clnsieijcqp28o01gd2d.jpg"

            },
            {
                vid:5,
                name:"BMW",
                rent:35,
                model:"320",
                mark:"BMW",
                year:2022,
                doors:"4",
                ac:"Yes",
                transmission:"Manual",
                fuel:"Diesel",
                photo:"http://res.cloudinary.com/dvyxj4egv/image/upload/v1733495305/sa7pcrqdqq0609lcehdi.jpg"
            },
            {
                vid:6,
                name:"Passat CC",
                rent:45,
                model:"Passat CC",
                mark:"Volkswagen",
                year:2012,
                doors:"4",
                ac:"Yes",
                transmission:"Automatic",
                fuel:"Petrol",
                photo:"http://res.cloudinary.com/dvyxj4egv/image/upload/v1733495442/k6mmku2ixutyswt3gr2g.jpg"
            }
        ]
        const vehicleData = await Vehicle.create(vehicle);
        res.json(vehicleData);
    }catch(err){
        console.log(err)
        res.status(500).json({ error: 'Error retrieving vehicles' });
    }
}
const a3 = async (req,res)=>{
    let {vid,name,rent,model,mark,year,doors,ac,transmission,fuel,photo} = req.body;
    console.log(req.body);
    const vehicle = [
        {
            vid,
            name,
            rent,
            model,
            mark,
            year,
            doors:`${doors}/5`,
            ac,
            transmission,
            fuel,
            photo
        }]
    const vehicleData = await Vehicle.create(vehicle);
    res.json(vehicleData);

}

const a4 = async (req, res) => {
    try {
        const { vid } = req.body;

        if (!vid) {
            return res.status(400).json({ error: 'Vehicle ID is required' });
        }

        console.log(`Deleting vehicle with ID: ${vid}`);

        const vehicleData = await Vehicle.deleteOne({ vid });

        if (vehicleData.deletedCount === 0) {
            return res.status(404).json({ error: 'Vehicle not found' });
        }

        res.status(200).json({ message: 'Vehicle deleted successfully', vehicleData });
    } catch (error) {
        console.error('Error deleting vehicle:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const a5 = async (req, res) => {
    try {
        const vid = req.params.record;
        if (!vid) {
            return res.status(400).json({ error: 'Vehicle ID is required' });
        }

        const vehicleData = await Vehicle.findOne({ vid });
        res.send(vehicleData);
    } catch (error) {
        console.error('Error deleting vehicle:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const a6 = async (req,res)=>{
    try{
        let opr = req.query.opr

        if (opr != 'U') {
            return res.status(400).send("Can't Update vehicle");
        }

        let {vid,name,rent,model,mark,year,doors,ac,transmission,fuel,photo} = req.body
        
        const vehicleData = await Vehicle.updateOne({vid},{$set:{name,rent,model,mark,year,doors,ac,transmission,fuel,photo}});
        if (vehicleData) {
            res.send(vehicleData);
        } else {
            res.status(404).send({ error: "Vehicle not found " });
        }
       
    }catch(err){
        console.log(err)
        res.status(500).json({ error: 'Error retrieving vehicles' });
    }
}


export {a1,a2,a3,a4,a5,a6}