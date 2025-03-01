import mongoose from "mongoose";
import configService from "./classess/config.class";

export default async function connectToDatabase() {
  try {
    await mongoose.connect(configService.getOrThrow("MONGO_URI"));
    console.info("connected to datbase successfully");
  } catch (error) {
    console.error("failed to connect to database server", error);

    process.exit(1);
  }
}
