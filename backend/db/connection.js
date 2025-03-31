import mongoose from "mongoose";

// Environment Variables
const DB_URI = process.env.DB_URI;

const connect = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log("Connected to MongoDB\n\n");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

export { connect };