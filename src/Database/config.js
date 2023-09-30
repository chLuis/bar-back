import mongoose from "mongoose";

export const connectDB = async () => {
    try {
    const data = await mongoose.connect(process.env.MONGO_URI);
        console.log('DB connected');
        //useNewUrlParser: true,
        //useUnifiedTopology: true,
        return(data)
    }
    catch (error) {
    console.log(`Error: ${error.message}`);
    //process.exit(1);
    throw new Error(error);
  }
}