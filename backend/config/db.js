// Import the Mongoose library, which provides tools to interact with MongoDB in a structured way
import mongoose from "mongoose";

// Import the environment variables, specifically the MongoDB connection URI
import { ENV_VARS } from "./envVars.js";

// Define an asynchronous function to connect to the MongoDB database
export const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB using the connection URI from environment variables
    const conn = await mongoose.connect(ENV_VARS.MONGO_URI);

    // Log a success message, including the host of the connected database
    console.log("MongoDB connected: " + conn.connection.host);
  } catch (error) {
    // Log an error message if the connection fails, including the error details
    console.error("Error connecting to MONGODB: " + error.message);

    // Exit the process with a non-zero status code to indicate an error
    process.exit(1); // 1 means an error occurred, 0 means success
  }
};
