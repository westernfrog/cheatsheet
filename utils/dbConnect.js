import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}`);
  } catch (error) {
    console.error(`Failed to connect to database: ${error}`);
  }
};

export default connectToDatabase;
