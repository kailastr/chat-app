import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Successfully connected to MongoDB");
    } catch (error) {
        console.log("Error in MongoDB connection : ", error.message);
    }
}

export default connectToMongoDB;