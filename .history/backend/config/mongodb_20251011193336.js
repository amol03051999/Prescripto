import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on('connected', () => console.log('Database Connected'));
    mongoose.connection.on('error', (err) => console.error('Database connection error:', err));

    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`);
    } catch (err) {
        console.error('Could not connect to MongoDB:', err);
        process.exit(1);
    }
}

export default connectDB;