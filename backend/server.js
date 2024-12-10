import express from "express";

const app = express();

app.get("/signup", (req, res) => {
  res.send("Signup route");
});
app.get("/login", (req, res) => {
  res.send("Login route");
});
app.get("/logout", (req, res) => {
  res.send("Logout route");
});

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
