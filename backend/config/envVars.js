// Import the 'dotenv' library, which loads environment variables from a .env file into process.env
import dotenv from 'dotenv';

// Load and parse the .env file to make its variables available in the application
dotenv.config();

// Export an object named ENV_VARS that stores key environment variables for easy access throughout the app
export const ENV_VARS = {
    // The connection string for MongoDB, used to connect to the database
    MONGO_URI: process.env.MONGO_URI,

    // The port number on which the server will run; defaults to 3000 if not set in the .env file
    PORT: process.env.PORT || 3000,

    // The secret key used to sign and verify JSON Web Tokens (JWTs) for user authentication
    JWT_SECRET: process.env.JWT_SECRET,

    // The current environment (e.g., 'development', 'production') to allow environment-specific configurations
    NODE_ENV: process.env.NODE_ENV,

    // The API key for The Movie Database (TMDB) API, used to fetch movie/TV show data
    TMDB_API_KEY: process.env.TMDB_API_KEY,
};
