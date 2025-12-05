import mongoose from 'mongoose';
import {DB_NAME} from '../constants.js';

const connectDB = async()=>{
    try {
        const connection1 = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`Database connected successfully and hosted on ${connection1.connection.host}`);

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
export default connectDB;