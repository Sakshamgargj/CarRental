import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config(); 

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true, 
        });
        console.log(`\nMongoDB connected! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED:", error.message);
        process.exit(1);
    }
};

export default connectDB;
