import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("=> using existing database connection");
    return;
  }

  try {
    await mongoose.connect(
      `mongodb+srv://root:${process.env.MONGODB_URI}@cluster0.ffgb9td.mongodb.net/?retryWrites=true&w=majority` ||
        "mongodb:127.0.0.1:27017/test",
      {
        dbName: "test",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    isConnected = true;
    console.log("=> new database connection");
  } catch (error) {
    console.log("=> error connecting to database:", error);
  }
};
