import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined");
}

export const connectToDB = async (): Promise<void> => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("Already connected to MongoDB ✅");
      return;
    }

    if (mongoose.connection.readyState === 2) {
      console.log("MongoDB is connecting...");
      return;
    }

    await mongoose.connect(MONGODB_URI, {
      dbName: "ImfundoPrivateTutors",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions);

    console.log("Connected to MongoDB ✅");
  } catch (error) {
    console.error("MongoDB connection error ❌:", error);
    throw new Error("Failed to connect to database");
  }
};
