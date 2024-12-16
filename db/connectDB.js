import mongoose from "mongoose";

const connectDB = async (DB_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: process.env.DB_NAME,
    };
    await mongoose.connect(DB_URL, DB_OPTIONS);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
