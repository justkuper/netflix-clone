// Import the Express framework for creating the router
import express from "express";

// Import the controller functions for handling authentication routes
import { login, logout, signup } from "../controllers/auth.controller.js";

// Create a new router instance using Express
const router = express.Router();

// Define a POST route for the "/signup" endpoint, handled by the `signup` controller function
router.post("/signup", signup);

// Define a POST route for the "/login" endpoint, handled by the `login` controller function
router.post("/login", login);

// Define a POST route for the "/logout" endpoint, handled by the `logout` controller function
router.post("/logout", logout);

// Export the router so it can be used in other parts of the application
export default router;


// jRclB5NVjPwEoRqc